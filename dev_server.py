from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import hashlib
import os


ROOT = Path(__file__).resolve().parent
WATCHED_SUFFIXES = {
    ".css",
    ".gif",
    ".html",
    ".jpeg",
    ".jpg",
    ".js",
    ".png",
    ".svg",
    ".webp",
}
LIVE_RELOAD_SCRIPT = b"""
<script>
(() => {
  let currentVersion = null;
  const checkForUpdates = async () => {
    try {
      const response = await fetch('/__live_reload_version', { cache: 'no-store' });
      const nextVersion = await response.text();
      if (currentVersion !== null && nextVersion !== currentVersion) {
        location.reload();
        return;
      }
      currentVersion = nextVersion;
    } catch (_) {
      // Keep the current page visible while the development server restarts.
    }
    setTimeout(checkForUpdates, 750);
  };
  checkForUpdates();
})();
</script>
"""


def content_version() -> str:
    digest = hashlib.sha1()
    watched_paths = sorted(
        path
        for path in ROOT.rglob("*")
        if path.is_file() and path.suffix.lower() in WATCHED_SUFFIXES
    )
    for path in watched_paths:
        stat = path.stat()
        digest.update(str(path.relative_to(ROOT)).encode("utf-8"))
        digest.update(str(stat.st_size).encode("ascii"))
        digest.update(str(stat.st_mtime_ns).encode("ascii"))
    return digest.hexdigest()


class LiveReloadHandler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self) -> None:
        request_path = urlparse(self.path).path
        if request_path == "/__live_reload_version":
            payload = content_version().encode("ascii")
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=ascii")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        if request_path in {"/", "/index.html"}:
            payload = (ROOT / "index.html").read_bytes().replace(
                b"</body>", LIVE_RELOAD_SCRIPT + b"</body>"
            )
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return

        super().do_GET()


if __name__ == "__main__":
    os.chdir(ROOT)
    ThreadingHTTPServer(("127.0.0.1", 5500), LiveReloadHandler).serve_forever()
