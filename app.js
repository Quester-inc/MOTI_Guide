const iconPaths = {
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5M9.5 20v-6h5v6"/>',
  rocket: '<path d="M14 5c2.6-2.6 5.5-2 5.5-2s.6 2.9-2 5.5l-4.8 4.8-4-4L14 5Z"/><path d="m9.5 8.5-4 .7-2 2 4.2 1.1M14.5 13.5l-.7 4-2 2-1.1-4.2M7 17c-1 1-3 1-3 1s0-2 1-3"/><circle cx="15.5" cy="7" r="1"/>',
  cable: '<path d="M7 2v5M4 4.5h6M17 17v5M14 19.5h6M7 7v3a7 7 0 0 0 7 7h3"/>',
  crosshair: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  activity: '<path d="M3 12h4l2.2-7 4.1 14 2.2-7H21"/>',
  timeline: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="11" cy="18" r="2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  alert: '<path d="M10.3 3.7 2.5 17.2A2 2 0 0 0 4.2 20h15.6a2 2 0 0 0 1.7-2.8L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 16h.01"/>'
};

const icon = (name, className = "") => `<svg class="${className}" aria-hidden="true" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.info}</svg>`;

const categories = [
  {
    id: "getting-started",
    title: "시작하기",
    description: "설치부터 화면 이해까지",
    icon: "rocket",
    topics: [
      {
        id: "installation",
        title: "설치와 앱 실행",
        useCases: ["UC-001"],
        summary: "MOTI Studio를 사용할 PC 환경을 확인하고 프로그램을 설치한 뒤 Hand Metrics 기본 화면까지 정상적으로 실행합니다.",
        covers: ["지원 운영체제와 필수 하드웨어", "설치 파일 실행과 설치 위치", "Hand Metrics 기본 화면과 정상 실행 확인"],
        prerequisites: ["MOTI Studio 설치 파일", "관리자 권한을 사용할 수 있는 Windows PC", "연결할 장비와 사용 가능한 USB 포트"],
        steps: [
          ["시스템 요구사항 확인", "운영체제, 그래픽 환경과 연결할 장비가 요구사항을 만족하는지 확인합니다."],
          ["프로그램 설치", "설치 파일을 실행하고 안내에 따라 설치를 완료합니다.", { src: "assets/1.%20download.png", alt: "MOTI Studio 설치 프로그램의 추가 작업 선택 화면" }],
          ["첫 실행 확인", "MOTI Studio를 실행해 Hand Metrics 기본 화면과 상단의 Hand Metrics, Live View, Teleoperation 탭이 표시되는지 확인합니다.", { src: "assets/2.%20hand_matrics.png", alt: "MOTI Studio 첫 실행 시 표시되는 Hand Metrics 화면" }]
        ],
        result: "MOTI Studio가 오류 없이 실행되고 Hand Metrics 기본 화면이 표시됩니다.",
        note: "실행 직후 오류가 발생하면 오류 문구와 로그 위치를 기록한 뒤 문제 해결 문서를 확인하세요."
      },
      {
        id: "interface-modes",
        title: "화면 구성과 동작 모드",
        useCases: ["UC-002"],
        summary: "주요 페이지를 이해하고 현재 지원되는 Tracker mode에서 작업을 시작합니다.",
        covers: ["상단 페이지 탭과 Live View Inspector", "Live View 하단 Timeline", "Tracker mode 작업 흐름"],
        prerequisites: ["MOTI Studio 실행", "Tracker mode 확인", "사용할 추적 장비 준비"],
        steps: [
          ["Live View 열기", "상단 탭에서 Live View로 이동해 3D View, Inspector와 하단 Timeline의 위치를 확인합니다.", [
            { src: "assets/3.%20live_view.png", alt: "MOTI Studio Live View 화면", caption: "Live View에서는 추적 장비와 손 모델을 3D 공간에서 확인하고 화면 구도를 조작할 수 있습니다." },
            { src: "assets/4.%20task_panel.png", alt: "Live View 오른쪽 작업 패널", caption: "오른쪽 Task Panel에서 장비, 캘리브레이션, View, Teleoperation과 UDP 상태를 탭별로 확인합니다. 개발 빌드에만 표시되는 Debug 탭은 배포판에 포함되지 않습니다." },
            { src: "assets/5.%20timeline.png", alt: "Live View 하단 Timeline", caption: "하단 Timeline에서 동작을 녹화하고 프레임 탐색, 재생, 저장과 CSV Export를 실행합니다." }
          ]],
          ["모드 확인", "현재 지원되는 동작 모드는 Tracker mode입니다. Camera mode는 아직 구현되지 않았으므로 사용하지 않습니다."],
          ["Tracker mode 선택", "Live View의 Operation Mode가 Tracker mode인지 확인합니다.", { src: "assets/6.%20tracker_mode.png", alt: "Tracker mode 선택 영역", caption: "Tracker mode에서는 Binding과 Calibration을 사용해 추적 장비 바인딩과 글러브 캘리브레이션을 진행합니다. Camera mode는 현재 미구현 기능입니다." }]
        ],
        result: "Tracker mode에서 바인딩, 캘리브레이션, 트래킹과 Timeline 작업을 진행할 수 있습니다.",
        note: "Camera mode는 현재 미구현 기능입니다. 정식 지원 전까지 기본값인 Tracker mode를 사용하세요."
      }
    ]
  },
  {
    id: "devices",
    title: "장비 연결",
    description: "추적 장비 준비와 상태 확인",
    icon: "cable",
    topics: [
      {
        id: "device-discovery",
        title: "장비 연결과 상태 확인",
        useCases: ["UC-006", "UC-007", "UC-023"],
        summary: "연결된 글러브와 OpenVR 추적 장비가 자동으로 인식되는지 확인합니다.",
        covers: ["OpenVR 장비 자동 갱신", "글러브 자동 연결·재시도", "장비별 연결·추적 상태 확인"],
        prerequisites: ["사용할 장비의 전원 켜기", "USB 동글과 유선 장비 연결", "트래커 Runtime 실행"],
        steps: [
          ["장비 연결", "글러브 동글을 연결하고 OpenVR Runtime과 사용할 추적 장비를 준비합니다.", [
            { src: "assets/7.%20connect_dongle.png?v=20260716-2", alt: "PC USB 포트에 글러브 동글을 연결하는 모습", caption: "글러브 동글을 PC의 사용 가능한 USB 포트에 끝까지 연결합니다." },
            { src: "assets/8.%20wear_glove.png", alt: "MOTI 글러브를 손에 착용한 모습", caption: "손가락과 손목 스트랩이 느슨하지 않도록 글러브를 밀착해 착용하고 센서 모듈이 안정적으로 고정되었는지 확인합니다." }
          ]],
          ["자동 인식 확인", "트래커, 베이스 스테이션, HMD, 컨트롤러와 글러브가 자동으로 목록에 나타나는지 확인합니다.", { src: "assets/9.%20check_device.png", alt: "Task Panel의 Devices 탭에 인식된 장비 목록", caption: "Devices 탭에서 장비 종류별 인식 수, ready·pose 상태와 배터리 잔량을 확인합니다. 사용할 글러브와 추적 장비가 모두 목록에 표시되어야 합니다." }],
          ["장비 상태 확인", "Devices 탭에서 사용할 글러브와 추적 장비의 연결·추적 상태를 확인합니다."]
        ],
        result: "사용할 모든 장비가 목록에 나타나고 준비 상태를 확인할 수 있습니다.",
        note: "모든 장비를 한 번에 갱신하는 공통 버튼은 없습니다. OpenVR 장비와 글러브는 자동 갱신됩니다. Camera mode는 현재 미구현입니다."
      },
      {
        id: "camera",
        title: "카메라 연결과 Preview (미구현)",
        useCases: ["UC-003", "UC-004", "UC-005"],
        summary: "Camera mode와 카메라 연결·Preview 기능은 현재 제공되지 않습니다.",
        covers: ["Camera mode 구현 상태", "카메라 목록 갱신", "카메라 연결과 Preview"],
        prerequisites: ["현재 사용할 수 없음"],
        steps: [
          ["구현 상태 확인", "Camera mode, 카메라 목록 갱신, 연결·해제와 영상 Preview는 현재 미구현 기능입니다."]
        ],
        result: "현재 배포판에서는 Camera mode를 사용할 수 없습니다.",
        note: "기능이 정식으로 제공된 이후 실제 연결 절차와 Preview 화면을 업데이트할 예정입니다."
      }
    ]
  },
  {
    id: "calibration",
    title: "손 설정과 캘리브레이션",
    description: "트래킹 전 필수 설정",
    icon: "crosshair",
    topics: [
      {
        id: "binding",
        title: "추적 장비–글러브 바인딩",
        useCases: ["UC-008", "UC-009"],
        summary: "자동으로 좌우가 구분된 글러브에 Binding Workbench에서 트래커 또는 컨트롤러를 pose source로 연결합니다.",
        covers: ["글러브 좌우 자동 인식", "트래커·컨트롤러 바인딩", "저장·해제와 Undo/Redo"],
        prerequisites: ["글러브와 동글 연결", "트래커 또는 컨트롤러 인식 완료"],
        steps: [
          ["Workbench 열기", "Devices 탭에서 Binding Setup을 눌러 Binding Workbench를 엽니다.", { src: "assets/10.%20binding_button.png", alt: "Devices 탭의 Binding Setup 버튼", caption: "Task Panel의 Devices 탭에서 Binding Setup을 선택해 장비 관계 설정 화면을 엽니다." }],
          ["추적 장비 연결", "자동 인식된 글러브와 사용할 트래커 또는 컨트롤러를 선택해 연결합니다.", [
            { src: "assets/11.%20binding_setup.png", alt: "바인딩 전 글러브와 트래커가 표시된 Binding Setup 화면", caption: "왼쪽의 글러브와 오른쪽의 추적 장비가 Unbound 상태로 표시됩니다. 연결할 글러브와 트래커 또는 컨트롤러를 차례로 선택합니다." },
            { src: "assets/12.%20binding_complete.png", alt: "글러브와 트래커 연결이 완료된 Binding Setup 화면", caption: "바인딩이 완료되면 글러브와 추적 장비 사이에 연결선이 나타나고 글러브 카드에 연결된 장비 이름이 표시됩니다." }
          ]],
          ["바인딩 저장", "연결 결과를 저장하고 필요하면 Undo, Redo 또는 해제를 사용합니다.", { src: "assets/13.%20save_button.png", alt: "Binding Setup의 Save 버튼", caption: "연결 관계를 확인한 뒤 Save를 눌러 바인딩 결과를 저장하고 작업 화면으로 돌아갑니다." }]
        ],
        result: "글러브에 선택한 추적 장비가 pose source로 저장되어 바인딩 상태로 표시됩니다.",
        note: "글러브 Left/Right는 동글 장치 정보로 자동 구분됩니다. 사용자가 side를 지정하거나 별도로 확인할 필요가 없습니다."
      },
      {
        id: "glove-attachment",
        title: "글러브 부착 설정",
        useCases: ["UC-024"],
        summary: "트래커나 컨트롤러가 손에 부착된 위치와 회전을 3D Preview에서 조정합니다.",
        covers: ["손과 장비 종류 선택", "장착 Preset 적용", "위치·회전 미세 조정과 저장"],
        prerequisites: ["트래커–글러브 바인딩 완료", "실제 장비 부착 완료", "3D View에서 손과 장비 확인"],
        steps: [
          ["대상 선택", "Devices 탭에서 Attachment Setup을 연 뒤 설정할 손과 부착된 장비 종류를 선택합니다.", [
            { src: "assets/14.%20attachment_setup_button.png", alt: "Devices 탭의 Attachment Setup 버튼", caption: "Task Panel의 Devices 탭에서 Attachment Setup을 눌러 부착 설정 Workbench를 엽니다." },
            { src: "assets/15.%20select_hand%26device.png", alt: "부착 설정의 손 방향과 장비 종류 선택 항목", caption: "Side에서 설정할 손을 선택하고 Device Type에서 실제로 부착한 Tracker, Controller 또는 Generic 장비를 선택합니다." }
          ]],
          ["Preset 적용", "실제 부착 방식과 가장 가까운 Mount Preset을 선택합니다.", { src: "assets/16.%20select_preset.png", alt: "Mount Preset이 적용된 Attachment Workbench", caption: "실제 장착 방향과 가장 가까운 Mount Preset을 적용한 뒤 3D Preview에서 손과 장비의 기준 위치를 확인합니다." }],
          ["미세 조정", "3D Preview를 보며 위치와 회전을 조정한 뒤 저장합니다.", { src: "assets/17.%20gizmo_control.png", alt: "Attachment Workbench의 회전 Gizmo", caption: "장비에 표시된 Gizmo의 축과 회전 링을 조작해 위치와 각도를 실제 부착 상태에 맞춘 뒤 결과를 저장합니다." }]
        ],
        result: "3D 손 모델과 실제 부착 장비의 기준 위치가 자연스럽게 일치합니다.",
        note: "큰 오차는 Preset을 다시 선택하고, 작은 오차만 위치·회전 값으로 조정하는 것이 좋습니다."
      },
      {
        id: "glove-calibration",
        title: "캘리브레이션과 프로필 관리",
        useCases: ["UC-010", "UC-026"],
        summary: "대상 글러브별 GHOST 캘리브레이션 단계를 수행하고 결과를 프로필로 저장해 다시 적용합니다.",
        covers: ["Hinge·Flat·Tracking 단계", "글러브별 대상 선택과 Reset", "프로필 생성·선택·갱신·이름 변경·삭제"],
        prerequisites: ["글러브 연결과 자동 인식", "센서 데이터 정상 수신", "안내 자세를 취할 수 있는 공간"],
        steps: [
          ["Hinge 단계", "Calibration 탭에서 대상 글러브를 선택하고 Hinge를 시작한 뒤 안내 자세가 안정되면 Apply hinge를 실행합니다.", [
            { src: "assets/18.%20calibration_panel.png", alt: "Calibration 탭의 글러브 선택과 캘리브레이션 Workflow", caption: "Calibration 탭에서 대상 글러브를 선택하고 New profile을 누른 뒤 Start hinge로 첫 번째 Hinge motion 단계를 시작합니다." },
            { src: "assets/23.%20hinge_motion.png", alt: "손가락을 쥐었다 펴는 Hinge 모션 안내", caption: "손가락을 끝까지 쥐었다가 끝까지 펴는 동작을 안정된 속도로 반복합니다. 손목은 가능한 한 움직이지 않도록 유지하세요." },
            { src: "assets/19.%20apply_hinge.png", alt: "Hinge motion 완료 후 Apply hinge 버튼", caption: "Hinge motion이 완료되어 첫 단계가 done으로 바뀌면 Apply hinge를 눌러 측정 결과를 적용합니다." }
          ]],
          ["Flat과 Tracking 단계", "Flat 자세를 적용한 뒤 Tracking 준비를 실행하고 손가락 움직임이 정상적으로 반영되는지 확인합니다.", [
            { src: "assets/20.%20flat_pose.png", alt: "Hinge 적용 완료 후 Flat pose 버튼", caption: "Hinge 적용이 완료되면 손을 안내된 평평한 자세로 유지하고 Flat pose를 눌러 세 번째 단계를 진행합니다." },
            { src: "assets/24.%20flat_motion.png", alt: "책상 위에서 유지하는 Flat 모션 정지 자세 안내", caption: "손가락을 모으고 손바닥 전체가 책상에 닿도록 편 상태에서 움직이지 말고 자세를 유지합니다." },
            { src: "assets/21.%20prepare_tracking.png", alt: "Flat pose 완료 후 Prepare tracking 버튼", caption: "Flat pose가 done으로 표시되면 Prepare tracking을 눌러 추적을 준비한 뒤 손가락 움직임이 3D 손 모델에 정상적으로 반영되는지 확인합니다." },
            { src: "assets/25.%20tracking_motion.png", alt: "손등과 손바닥을 위아래로 회전하는 Tracking 모션 안내", caption: "손등과 손바닥이 번갈아 위를 향하도록 손목을 부드럽고 일정한 속도로 회전하며 추적 상태를 확인합니다." }
          ]],
          ["프로필 저장", "Tracking 준비가 완료되면 이름을 입력해 새 프로필로 저장하거나 선택한 프로필을 갱신합니다.", { src: "assets/22.%20save_profile.png", alt: "Tracking ready 상태와 프로필 이름 및 Save 버튼", caption: "Tracking ready가 ready로 표시되면 Profile name에 이름을 입력하고 Save를 눌러 캘리브레이션 결과를 프로필로 저장합니다." }]
        ],
        result: "글러브 Pose가 정상적으로 계산되고 저장된 프로필을 다음 실행에서 다시 적용할 수 있습니다.",
        note: "결과가 잘못되면 대상 글러브를 확인한 뒤 Reset하고 단계를 다시 수행하세요. Hinge Optimize와 Flat 개발자 단계는 일반 절차가 아닙니다."
      }
    ]
  },
  {
    id: "workflows",
    title: "트래킹과 주요 작업",
    description: "실시간 모션 확인과 활용",
    icon: "activity",
    topics: [
      {
        id: "tracking",
        title: "트래킹 시작과 상태 확인",
        useCases: ["UC-011"],
        summary: "바인딩과 캘리브레이션을 완료한 뒤 트래킹을 시작하고 실시간 손 움직임을 확인합니다.",
        covers: ["트래킹 시작 전 준비 상태", "Running·Error 상태 확인", "실시간 손 움직임 확인"],
        prerequisites: ["추적 장비 바인딩 완료", "필요한 캘리브레이션 완료"],
        steps: [
          ["준비 상태 확인", "Binding과 Calibration 설정을 완료했는지 확인합니다.", { src: "assets/26.%20check_bind%26cal.png", alt: "Tracker mode와 Binding 및 Calibration 준비 배지", caption: "상단에서 Tracker mode가 선택되어 있고 Binding과 Calibration 배지가 준비 상태로 표시되는지 확인합니다." }],
          ["트래킹 준비", "Calibration Workflow가 완료되어 Tracking ready 상태인지 확인합니다.", { src: "assets/27.%20tracking_start.png", alt: "Calibration Workflow의 Tracking ready 상태", caption: "대상 글러브와 적용할 프로필을 선택한 뒤 Hinge, Flat pose 단계가 done이고 Tracking ready가 ready로 표시되는지 확인합니다. 다시 진행해야 할 때는 Retry tracking을 사용합니다." }],
          ["상태 확인", "Live View에서 손 움직임이 실시간으로 반영되는지 점검합니다.", { src: "assets/28.%20check_liveview.png", alt: "트래킹된 손과 부착 장비가 표시된 Live View", caption: "Live View로 이동해 실제 손의 위치와 손가락 움직임이 3D 손 모델에 자연스럽게 반영되는지 확인합니다." }]
        ],
        result: "손 움직임이 Live View에 실시간으로 반영되고 상태가 Running으로 표시됩니다.",
        note: "Error 상태가 표시되면 장비 바인딩과 GHOST 상태를 확인한 뒤 앱을 다시 실행하세요."
      },
      {
        id: "live-view",
        title: "3D View와 객체 관리",
        useCases: ["UC-014", "UC-027"],
        summary: "3D View를 이동·회전·확대하고 장면 객체를 선택해 이름과 표시 상태를 관리합니다.",
        covers: ["카메라 이동·회전·확대", "장면 객체 선택", "객체 이름과 종류별 표시 설정"],
        prerequisites: ["Live View 페이지 열기", "하나 이상의 장비 인식", "필요하면 트래킹 시작"],
        steps: [
          ["View 조작", "마우스와 키보드로 장면을 회전, 이동, 확대해 원하는 구도를 만듭니다.", { src: "assets/29.%20adjust_view.png", alt: "장비와 손이 함께 표시된 MOTI Studio Live View", caption: "Live View에서 마우스로 장면을 회전·이동하고 휠로 확대·축소해 확인할 손과 장비가 잘 보이는 구도를 만듭니다." }],
          ["객체 선택", "확인할 글러브, 트래커 또는 다른 장면 객체를 선택합니다.", { src: "assets/30.%20select_hand.png", alt: "Live View에서 선택된 손과 Object Properties", caption: "Live View의 손이나 장비를 클릭합니다. 선택되면 노란색 경계 상자가 나타나고 오른쪽 Object Properties에 종류, 식별자, 상태와 이름이 표시됩니다." }],
          ["이름과 표시 관리", "객체 이름과 종류별 표시 옵션을 작업 목적에 맞게 조정합니다.", { src: "assets/31.%20device_rename.png", alt: "선택한 손의 Edit Object Name 팝업", caption: "Object Properties의 이름 편집 버튼을 누르고 새 이름을 입력한 뒤 Save를 선택합니다. 장비 목록의 Visible 옵션으로 필요한 객체만 화면에 표시할 수 있습니다." }]
        ],
        result: "필요한 장비와 손 모델이 구분 가능한 이름과 원하는 구도로 표시됩니다.",
        note: "객체가 너무 많으면 사용하지 않는 종류를 숨겨 장면을 단순하게 유지하세요."
      },
      {
        id: "hand-metrics",
        title: "Hand Metrics 확인",
        useCases: ["UC-015"],
        summary: "왼손과 오른손의 데이터 상태와 3D 손 움직임을 확인해 트래킹 품질을 점검합니다.",
        covers: ["좌우 손 데이터 상태", "기본 스켈레톤의 움직임", "실험용 손 메쉬 표시"],
        prerequisites: ["글러브 연결과 자동 인식", "트래킹 또는 유효한 손 Pose"],
        steps: [
          ["페이지 열기", "Hand Metrics 페이지로 이동해 좌우 손 Pane을 확인합니다.", { src: "assets/32.%20hand_metrics_overview.png", alt: "좌우 손 Pane이 표시된 Hand Metrics 전체 화면", caption: "상단에서 Hand Metrics 탭을 선택하면 왼쪽과 오른쪽 손을 각각 확인할 수 있는 Pane과 손 데이터 상태가 표시됩니다. 손은 기본적으로 스켈레톤으로 표시되며, 이 이미지의 메쉬 표시는 실험 기능을 선택한 예시입니다." }],
          ["상태 확인", "각 손의 Tracking 또는 Waiting 상태를 확인합니다.", [
            { src: "assets/33.%20Tracking.png", alt: "초록색 점과 Tracking 상태 표시", caption: "초록색 Tracking은 해당 손의 유효한 Pose 데이터가 수신되고 있음을 의미합니다.", compact: true },
            { src: "assets/34.%20wating.png", alt: "노란색 점과 Waiting 상태 표시", caption: "노란색 Waiting은 해당 손의 유효한 Pose 데이터를 기다리는 상태입니다. 글러브 연결, 프로필과 트래킹 준비 상태를 확인하세요.", compact: true }
          ]],
          ["손 움직임 확인", "좌우 손가락을 움직여 기본 스켈레톤의 자세가 실제 움직임과 자연스럽게 일치하는지 확인합니다.", { src: "assets/35.%20check_hand_metrics.png", alt: "손가락 움직임이 스켈레톤으로 표시된 Hand Metrics 화면", caption: "실제 손가락을 천천히 움직이며 해당 손 Pane의 스켈레톤이 같은 방향과 자세로 자연스럽게 반응하는지 확인합니다." }]
        ],
        result: "좌우 손의 데이터 상태와 3D 모델 움직임을 통해 트래킹 품질을 판단할 수 있습니다.",
        note: "손 메쉬는 아직 개발 중인 실험 기능입니다. 일반적인 트래킹 확인에는 기본 스켈레톤을 사용하세요. Viewport Settings의 Glove Render에서 Mesh 또는 Both를 선택할 수 있지만 형태가 부정확하게 표시될 수 있습니다."
      },
      {
        id: "teleoperation",
        title: "Teleoperation Preview",
        useCases: ["UC-028"],
        summary: "입력 손과 로봇 핸드 모델을 선택해 로컬 변환 Preview와 UDP·feedback 상태를 확인합니다.",
        covers: ["왼손·오른손 입력 선택", "로봇 핸드 모델 선택", "View mode, 축 표시와 연결 상태"],
        prerequisites: ["유효한 손 트래킹", "Teleoperation 페이지 열기", "Preview할 입력 손 선택"],
        steps: [
          ["입력 손 선택", "왼손 또는 오른손 중 유효한 입력을 선택합니다."],
          ["로봇 핸드 선택", "Gallery에서 사용할 로봇 핸드 모델을 선택하고 적용합니다."],
          ["상태 검증", "View mode와 축 표시를 조정하며 Pose와 지연 상태를 확인합니다."]
        ],
        result: "선택한 입력 손의 움직임이 로봇 핸드 모델에 시각화되고 로컬 입력과 UDP 상태가 표시됩니다.",
        note: "현재 버전은 원격 target pose와 feedback이 연결되지 않은 Preview입니다. 이 화면만으로 실제 로봇을 제어할 수 있다고 판단하면 안 됩니다."
      }
    ]
  },
  {
    id: "data",
    title: "녹화와 데이터 출력",
    description: "Timeline, Take와 외부 연동",
    icon: "timeline",
    topics: [
      {
        id: "udp-streaming",
        title: "UDP Streaming 설정과 실행",
        useCases: ["UC-013"],
        summary: "좌우 손의 UDP 목적지와 포트를 설정하고 실시간 데이터 전송을 시작하거나 중지합니다.",
        covers: ["좌우 손 IP와 Port 설정", "설정 저장과 재시작 조건", "Streaming 상태 확인"],
        prerequisites: ["수신 프로그램 실행", "목적지 IP와 Port 확인", "손 트래킹 데이터 준비"],
        steps: [
          ["Endpoint 입력", "왼손과 오른손의 목적지 IP, Send Port와 Echo Port를 입력합니다.", { src: "assets/36.%20udp_streaming.png", alt: "좌우 글러브의 UDP Endpoint 설정 화면", caption: "Task Panel의 UDP 탭에서 왼손과 오른손에 사용할 수신 IP, 데이터 송신 포트와 Echo 포트를 각각 입력합니다." }],
          ["설정 적용", "UDP 설정을 저장하고 재시작이 필요한지 상태 메시지를 확인합니다.", { src: "assets/37.%20udp_endpoint_save.png", alt: "UDP Endpoint 저장 완료 팝업", caption: "저장 버튼을 누른 뒤 UDP Endpoints Saved 팝업이 표시되면 설정이 정상적으로 저장된 것입니다. 송신 중에 변경했다면 중지 후 다시 시작해야 적용됩니다." }],
          ["Streaming 실행", "Streaming을 시작하고 수신 프로그램에서 데이터 도착을 확인합니다.", { src: "assets/38.%20udp_send.png", alt: "UDP Streaming이 실행 중인 화면", caption: "시작 버튼을 누른 뒤 상단과 UDP 탭의 상태가 초록색 streaming으로 바뀌는지 확인하고, 수신 프로그램에서 좌우 손 데이터가 도착하는지 점검합니다." }]
        ],
        result: "좌우 손 데이터가 설정한 UDP Endpoint로 전송되고 상태가 Streaming으로 표시됩니다.",
        note: "주소를 변경했다면 Streaming을 중지한 뒤 다시 시작해야 새 설정이 적용됩니다."
      },
      {
        id: "recording",
        title: "Timeline Take 녹화",
        useCases: ["UC-016"],
        summary: "현재 트래킹 데이터를 Timeline Take로 녹화하고 종료해 검토 가능한 결과를 만듭니다.",
        covers: ["녹화 전 트래킹 상태", "Record·Stop 조작", "녹화된 프레임과 Take 이름"],
        prerequisites: ["트래킹 실행", "Take 저장 폴더 확인", "녹화할 동작 준비"],
        steps: [
          ["녹화 준비", "Timeline이 Live 상태이고 저장 위치에 접근 가능한지 확인합니다.", { src: "assets/39.%20timeline_live.png", alt: "Live 상태의 Timeline과 녹화 준비 화면", caption: "Live View 하단 Timeline의 시간이 0에서 대기하고 Record 버튼을 사용할 수 있는지 확인합니다. 필요하면 Paths 버튼에서 Take와 Export 저장 폴더를 먼저 점검합니다." }],
          ["Take 녹화", "Record를 실행한 뒤 필요한 동작을 수행합니다.", { src: "assets/40.%20timeline_record.png", alt: "Timeline Take 녹화가 진행 중인 화면", caption: "빨간 Record 버튼을 누른 뒤 프레임과 시간이 증가하는 동안 기록할 손 동작을 수행합니다. 녹화 중에는 빨간 Stop 버튼으로 기록을 종료할 수 있습니다." }],
          ["녹화 종료", "Stop을 실행하고 Take 이름, 길이와 Frame 수를 확인합니다.", { src: "assets/41.%20timeline_check.png", alt: "녹화가 종료된 Timeline의 시간과 Frame 수", caption: "Stop을 누른 뒤 Timeline에 전체 시간과 마지막 Frame 수가 표시되는지 확인합니다. Return to Live를 누르기 전에 녹화 길이와 프레임이 예상한 범위인지 점검하세요." }]
        ],
        result: "수행한 동작이 Timeline Take로 생성되어 재생과 저장을 진행할 수 있습니다.",
        note: "녹화 중 장비 연결이 끊기거나 앱이 종료되면 Take가 예상보다 짧거나 불완전할 수 있습니다."
      },
      {
        id: "playback",
        title: "재생, Marker와 Loop",
        useCases: ["UC-017", "UC-030"],
        summary: "Timeline을 탐색·재생하고 Marker와 Loop 구간을 사용해 필요한 동작을 반복 검토합니다.",
        covers: ["재생, 정지와 Frame 이동", "Marker 추가·삭제", "Loop 시작·끝 구간 설정"],
        prerequisites: ["녹화되거나 불러온 Take", "Timeline Frame 표시", "검토할 동작 구간 파악"],
        steps: [
          ["Take 탐색", "Play, Pause, Step과 Seek를 사용해 확인할 Frame을 찾습니다.", { src: "assets/42.%20check_frame.png", alt: "Timeline에서 재생 중인 Frame을 탐색하는 화면", caption: "Play 또는 Pause와 이전·다음 Frame 버튼을 사용하거나 Timeline의 원하는 지점을 선택해 검토할 Frame으로 이동합니다. 현재 시간과 Frame 번호를 함께 확인하세요." }],
          ["Marker 추가·삭제", "중요한 동작 지점에 Marker를 추가하고, 필요 없는 Marker는 우클릭해 삭제합니다.", { src: "assets/43.%20add_marker.png", alt: "Timeline에 여러 Marker가 추가된 화면", caption: "중요한 자세나 이벤트가 나타나는 Frame으로 이동한 뒤 Marker 버튼을 누릅니다. 추가된 지점은 Timeline에 M1, M2와 같은 표식으로 표시되며, 필요 없는 표식은 그 위에서 우클릭해 삭제할 수 있습니다." }],
          ["Loop 설정", "반복 확인할 시작과 끝 Frame을 지정하고 Loop 재생을 켭니다.", { src: "assets/44.%20add_loop.png", alt: "Timeline에 Loop 구간과 In/Out Repeat가 설정된 화면", caption: "Timeline 양쪽의 Loop 핸들을 반복할 시작과 끝 Frame으로 옮긴 뒤 In/Out Repeat 버튼을 켭니다. 활성화된 구간만 반복 재생되는지 확인하세요." }]
        ],
        result: "필요한 구간을 빠르게 찾고 반복 재생하면서 동작을 비교할 수 있습니다.",
        note: "Loop 시작 Frame은 끝 Frame보다 앞에 위치하도록 설정하세요."
      },
      {
        id: "takes",
        title: "저장/불러오기와 Take 관리",
        useCases: ["UC-018", "UC-029"],
        summary: "Timeline Capture에 이름을 지정해 저장하고 Takes 목록에서 불러오거나 삭제합니다.",
        covers: ["저장할 때 Take 이름 지정", "Take 목록 갱신과 불러오기", "저장 파일 삭제"],
        prerequisites: ["저장할 Capture 또는 기존 Take", "Take 폴더 쓰기 권한", "구분 가능한 Take 이름"],
        steps: [
          ["현재 Take 저장", "현재 Capture에 이름을 지정하고 Take 폴더에 저장합니다.", { src: "assets/45.%20save_record.png", alt: "Save Recording 창에서 Take 이름을 입력하는 화면", caption: "Timeline의 저장 버튼을 누르고 Save Recording 창에 구분 가능한 Take 이름을 입력한 뒤 Save를 선택합니다. 저장이 끝나면 Take 목록에서 새 항목을 확인할 수 있습니다." }],
          ["목록에서 불러오기", "Take 목록을 갱신하고 검토할 항목을 불러옵니다.", { src: "assets/46.%20load_record.png", alt: "Timeline의 Take 목록에 저장된 녹화 항목이 표시된 화면", caption: "Timeline의 Take 목록 버튼을 열어 이름, Frame 수와 FPS를 확인한 뒤 검토할 항목을 선택합니다. 목록에 방금 저장한 Take가 보이지 않으면 새로고침 버튼을 누르세요." }],
          ["목록 정리", "불필요한 항목은 context menu에서 삭제합니다. 기존에 저장된 Take의 이름은 목록에서 변경할 수 없습니다.", { src: "assets/47.%20delete_record.png", alt: "Timeline Take 목록에서 Delete 메뉴를 선택하는 화면", caption: "Take 목록에서 삭제할 항목의 context menu를 열고 Delete를 선택합니다. 삭제한 Take 파일은 화면에서 복원할 수 없으므로 이름과 Frame 수를 다시 확인한 뒤 진행하세요." }]
        ],
        result: "저장된 Take를 목록에서 다시 불러오거나 불필요한 파일을 삭제할 수 있습니다.",
        note: "삭제한 Take는 화면에서 복원할 수 없으므로 Export나 백업 여부를 먼저 확인하세요."
      },
      {
        id: "export",
        title: "Export와 저장 위치 관리",
        useCases: ["UC-019", "UC-031"],
        summary: "Take와 CSV Export 폴더를 지정하고 하단 Timeline에서 녹화 결과를 CSV로 내보냅니다.",
        covers: ["Take와 Export 폴더 선택", "하단 Timeline CSV Export", "CSV 폴더 열기와 경로 기본값 복원"],
        prerequisites: ["저장된 Timeline Take", "Export 폴더 쓰기 권한", "충분한 저장 공간"],
        steps: [
          ["저장 위치 설정", "Take 폴더와 Export 폴더를 선택하거나 기본 경로를 확인합니다.", { src: "assets/48.%20record_path.png", alt: "Timeline의 Take directory와 Export directory 설정 화면", caption: "Timeline의 Paths 버튼을 열어 Take directory와 Export directory를 확인합니다. 경로를 변경했다면 Browse로 폴더를 선택하고 Apply Paths를 누르며, 기본 저장 위치로 돌아가려면 Reset Paths를 사용합니다." }],
          ["대상 Take 선택", "목록에서 외부로 내보낼 Take를 불러옵니다.", { src: "assets/46.%20load_record.png", alt: "Timeline Take 목록에서 Export 대상을 선택하는 화면", caption: "Take 목록 버튼을 열고 이름, Frame 수와 FPS를 비교해 Export할 항목을 선택합니다. 선택한 Take가 Timeline에 불러와졌는지 이름과 전체 Frame 수를 확인하세요." }],
          ["CSV Export 확인", "Live View 하단 Timeline의 CSV Export 버튼을 실행하고 Open CSV Folder로 생성 파일을 확인합니다.", { src: "assets/49.%20export_popup.png", alt: "화면 중앙에 표시된 CSV Export 확인 팝업", caption: "CSV Export 버튼을 누르면 화면 중앙에 확인 팝업이 표시됩니다. Take 이름과 저장 폴더가 맞는지 확인한 뒤 Export를 누르고, 완료 후 Open CSV Folder 버튼으로 생성된 CSV 파일을 확인합니다. Cancel 또는 Esc를 누르면 추출하지 않습니다." }]
        ],
        result: "불러온 Take가 설정한 Export 폴더에 CSV 파일로 생성됩니다.",
        note: "Setup workflow의 Export 단계는 현재 예약 상태이며 사용할 수 없습니다. Take 폴더는 선택·적용·초기화할 수 있지만 화면에서 직접 여는 버튼은 없습니다."
      }
    ]
  },
  {
    id: "maintenance",
    title: "설정과 문제 해결",
    description: "환경 설정, 복원과 진단",
    icon: "settings",
    topics: [
      {
        id: "settings",
        title: "View Settings와 성능 설정",
        useCases: ["UC-022"],
        summary: "Viewport Settings에서 화면과 언어를 조정하고 Task Panel의 View 탭에서 렌더링 성능을 설정합니다.",
        covers: ["Grid·Actor와 장비 표시", "글러브 스켈레톤과 실험용 메쉬", "이동·회전·확대 감도와 성능 설정"],
        prerequisites: ["MOTI Studio 실행", "조정할 View 또는 성능 문제 파악", "현재 설정값 확인"],
        steps: [
          ["Settings 열기", "화면 상단의 Settings 버튼을 눌러 Scene, View Controls, Glove Render와 Language 설정 창을 엽니다.", { src: "assets/50.%20setting.png", alt: "MOTI Studio의 Viewport Settings 창", caption: "상단의 톱니바퀴 버튼을 누르면 Viewport Settings가 열립니다. 이 창에서 장면 표시, 카메라 조작 감도, 글러브 표현 방식과 언어를 설정할 수 있습니다." }],
          ["화면과 조작 조정", "장면 표시와 키보드·마우스 감도를 작업 환경에 맞춥니다. Glove Render는 기본 Skeleton을 사용하며 Mesh와 Both는 실험용 표시 옵션입니다.", [
            { src: "assets/51.%20view_control.png", alt: "Viewport Settings의 View Controls 설정", caption: "Keyboard Move, Mouse Pan, Mouse Rotate와 Mouse Zoom 값을 조정해 3D 화면의 이동·회전·확대 감도를 맞춥니다. 아래 초기화 버튼을 누르면 기본값으로 되돌릴 수 있습니다." },
            { src: "assets/52.%20glove_render_setting.png", alt: "Viewport Settings의 Glove Render 설정", caption: "Glove Render에서 Skeleton, Mesh 또는 Both를 선택합니다. 일반 사용에는 기본값인 Skeleton을 권장하며 Mesh와 Both는 미완성 실험 기능입니다." }
          ]],
          ["언어 설정", "Viewport Settings의 Language에서 English 또는 한국어를 선택합니다.", { src: "assets/53.%20language_setting.png", alt: "Viewport Settings의 Language 선택 항목", caption: "Language 목록에서 사용할 UI 언어를 선택합니다. 현재 적용된 언어는 아래 Current UI language에서 확인할 수 있습니다." }],
          ["성능 설정", "Task Panel의 View 탭에서 Performance 영역을 찾아 VSync와 Max FPS를 조정합니다.", { src: "assets/54.%20perf_setting.png", alt: "Task Panel View 탭의 Performance 설정", caption: "우측 Task Panel에서 View 탭을 열고 아래 Performance 영역에서 VSync를 켜거나 끄고 Max FPS 제한값을 설정합니다." }]
        ],
        result: "화면 표시와 조작 반응이 작업 환경에 맞게 적용되고 선택한 언어로 UI가 표시됩니다.",
        note: "손 메쉬는 미완성 실험 기능이므로 일반 사용에서는 Skeleton을 유지하세요. 언어는 앱을 다시 실행하면 English로 초기화됩니다. FPS/Tracking Overlay와 Performance log는 개발 빌드 전용이며 배포판에는 표시되지 않습니다."
      },
      {
        id: "state-restore",
        title: "프로그램 종료와 재실행",
        useCases: ["UC-021"],
        summary: "진행 중인 작업을 정리하고 프로그램을 정상 종료한 뒤 재실행 상태를 확인합니다.",
        covers: ["진행 작업 정리", "정상 종료와 확인 창", "재실행 후 주요 설정 확인"],
        prerequisites: ["저장할 설정과 바인딩 확인", "진행 중인 녹화 정리", "Streaming과 트래킹 상태 확인"],
        steps: [
          ["진행 작업 정리", "녹화와 Streaming을 먼저 종료한 뒤 앱을 닫습니다."],
          ["프로그램 종료", "창의 닫기 버튼을 누른 뒤 종료 확인 창에서 Exit를 선택해 MOTI Studio를 정상적으로 닫습니다.", { src: "assets/55.%20exit_popup.png", alt: "MOTI Studio 종료 확인 팝업", caption: "종료 확인 팝업이 화면 중앙에 표시되면 Tracking과 Capture 화면이 함께 닫히는지 확인하고 Exit를 누릅니다. 작업을 계속하려면 Cancel 또는 우측 상단의 닫기 버튼을 선택합니다." }],
          ["재실행 확인", "MOTI Studio를 다시 실행해 창, View 설정, 바인딩과 저장 경로가 유지되는지 확인합니다. 현재 페이지, 동작 모드와 언어 등의 session 상태는 기본값으로 시작합니다."]
        ],
        result: "프로그램이 정상 종료되고, 재실행 후 저장된 주요 설정을 다시 사용할 수 있습니다.",
        note: "현재 페이지, Camera/Tracker 모드, 언어와 Settings 열림 상태는 복원 대상이 아닙니다."
      },
      {
        id: "diagnostics",
        title: "로그, 진단과 오류 보고 (미구현)",
        useCases: ["UC-020", "UC-032"],
        summary: "이 항목은 향후 제공 예정인 진단 및 오류 보고 기능으로, 현재 배포판에서는 사용할 수 없습니다.",
        covers: ["향후 제공 예정인 진단 정보", "오류 보고서 생성과 확인", "기술 지원용 자료 준비"],
        prerequisites: ["현재 미구현 기능으로 별도의 사전 준비가 필요하지 않습니다."],
        steps: [
          ["구현 상태 확인", "로그 수집, 진단 정보 확인과 오류 보고서 생성 기능은 현재 배포판에서 제공되지 않습니다. 내부 진단용 Debug 탭은 개발 빌드에만 포함됩니다."]
        ],
        result: "현재 버전에서는 진단 보고서나 오류 보고서 파일이 생성되지 않습니다.",
        note: "배포판 기준 미구현 기능입니다. 기능이 정식으로 제공된 이후 실제 사용 절차와 화면을 업데이트할 예정입니다."
      }
    ]
  }
];

const topics = categories.flatMap((category) => category.topics.map((topic) => ({ ...topic, category })));
const topicById = new Map(topics.map((topic) => [topic.id, topic]));
const main = document.getElementById("main-content");
const sidebarNavigation = document.getElementById("sidebar-navigation");
const searchInput = document.getElementById("guide-search");
const searchResults = document.getElementById("search-results");

const topicHref = (id) => `index.html?page=${encodeURIComponent(id)}`;

function renderSidebar() {
  let topicNumber = 0;
  sidebarNavigation.innerHTML = `
    <a class="sidebar-home" href="index.html" data-home>${icon("home")}<span>가이드 홈</span></a>
    ${categories.map((category) => `
      <section class="nav-group">
        <h2 class="nav-group-title">${icon(category.icon)}<span>${category.title}</span></h2>
        ${category.topics.map((topic) => {
          topicNumber += 1;
          return `<a class="sidebar-topic" href="${topicHref(topic.id)}" data-page="${topic.id}"><span class="topic-index">${String(topicNumber).padStart(2, "0")}</span><span>${topic.title}</span></a>`;
        }).join("")}
      </section>
    `).join("")}
  `;
}

function renderHome() {
  document.title = "MOTI Studio 사용자 가이드";
  main.innerHTML = `
    <div class="view-container">
      <section class="home-hero">
        <div class="hero-copy">
          <span class="eyebrow">MOTI Studio Documentation</span>
          <h1>처음 연결부터<br>정확한 모션 데이터까지</h1>
          <p>장비 설정, 캘리브레이션, 실시간 트래킹과 데이터 출력까지 실제 작업 순서에 따라 안내합니다.</p>
          <div class="hero-actions">
            <a class="button primary" href="${topicHref("installation")}" data-page="installation">가이드 시작하기 ${icon("arrow")}</a>
            <a class="button" href="${topicHref("diagnostics")}" data-page="diagnostics">문제 해결</a>
          </div>
        </div>
        <aside class="hero-checklist" aria-label="시작 전 준비물">
          <h2>시작 전 준비</h2>
          <p>첫 트래킹 전에 확인하세요.</p>
          ${["MOTI Studio가 설치된 Windows PC", "MOTI Glove와 USB 동글", "지원 트래커", "장비를 움직일 수 있는 작업 공간"].map((item) => `<div class="check-item"><span class="check-icon">${icon("check")}</span>${item}</div>`).join("")}
        </aside>
      </section>

      <section aria-labelledby="quick-start-heading">
        <div class="section-heading">
          <div><h2 id="quick-start-heading">빠른 시작</h2><p>첫 트래킹과 녹화까지 핵심 흐름을 따라갑니다.</p></div>
        </div>
        <div class="quick-grid">
          ${[
            ["installation", "설치 및 실행", "프로그램을 설치하고 첫 화면을 확인합니다."],
            ["binding", "장비와 손 연결", "자동 인식된 글러브에 추적 장비를 연결합니다."],
            ["tracking", "트래킹 시작", "준비 상태를 확인하고 트래킹을 시작합니다."],
            ["recording", "첫 Take 녹화", "Timeline에서 동작을 녹화합니다."]
          ].map((item, index) => `<article class="quick-step"><span class="quick-number">${String(index + 1).padStart(2, "0")}</span><h3>${item[1]}</h3><p>${item[2]}</p><a class="text-link" href="${topicHref(item[0])}" data-page="${item[0]}">자세히 보기 ${icon("arrow")}</a></article>`).join("")}
        </div>
      </section>

      <section aria-labelledby="all-guides-heading">
        <div class="section-heading">
          <div><h2 id="all-guides-heading">전체 사용 가이드</h2><p>19개 문서를 6개 작업 영역으로 정리했습니다.</p></div>
        </div>
        <div class="category-grid">
          ${categories.map((category) => `
            <article class="category-card">
              <div class="category-header"><span class="category-icon">${icon(category.icon)}</span><div class="category-title"><h3>${category.title}</h3><span>${category.description} · ${category.topics.length}개 문서</span></div></div>
              <div class="category-links">${category.topics.map((topic) => `<a class="category-link" href="${topicHref(topic.id)}" data-page="${topic.id}">${topic.title}</a>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
  updateActiveNavigation(null);
}

function renderDocument(topic) {
  const index = topics.findIndex((item) => item.id === topic.id);
  const previous = topics[index - 1];
  const next = topics[index + 1];
  document.title = `${topic.title} · MOTI Studio Guide`;
  main.innerHTML = `
    <div class="document-view">
      <nav class="breadcrumb" aria-label="현재 위치"><a href="index.html" data-home>홈</a>${icon("chevron")}<span>${topic.category.title}</span>${icon("chevron")}<span>${topic.title}</span></nav>
      <div class="document-grid">
        <article class="document-main">
          <header>
            <div class="document-kicker"><span class="category-icon">${icon(topic.category.icon)}</span>${topic.category.title}</div>
            <h1>${topic.title}</h1>
            <p class="document-lead">${topic.summary}</p>
            <div class="uc-list">${topic.useCases.map((useCase) => `<span class="uc-badge">${useCase}</span>`).join("")}</div>
          </header>

          <section class="doc-section" id="overview"><h2>이 페이지에서 다룰 내용</h2><ul class="content-list">${topic.covers.map((item) => `<li>${item}</li>`).join("")}</ul></section>
          <section class="doc-section" id="prepare"><h2>사전 준비</h2><ul class="content-list">${topic.prerequisites.map((item) => `<li>${item}</li>`).join("")}</ul></section>
          <section class="doc-section" id="steps"><h2>사용 방법</h2><ol class="steps">${topic.steps.map((step) => {
            const stepImages = Array.isArray(step[2]) ? step[2] : step[2] ? [step[2]] : [];
            return `<li class="step-card"><strong>${step[0]}</strong><span>${step[1]}</span>${stepImages.length ? `<div class="step-images">${stepImages.map((image) => `<figure class="step-figure"><img class="step-image${image.compact ? " step-image-compact" : ""}" src="${image.src}" alt="${image.alt}" loading="lazy">${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}</li>`;
          }).join("")}</ol></section>
          <section class="doc-section" id="result"><h2>정상 결과</h2><div class="callout"><span class="callout-icon">${icon("check")}</span><div><strong>완료 확인</strong><p>${topic.result}</p></div></div></section>
          <section class="doc-section" id="note"><h2>주의사항</h2><div class="callout warning"><span class="callout-icon">${icon("alert")}</span><div><strong>작업 전 확인</strong><p>${topic.note}</p></div></div></section>

          <nav class="document-footer" aria-label="이전 및 다음 문서">
            ${previous ? `<a href="${topicHref(previous.id)}" data-page="${previous.id}">← 이전 문서<strong>${previous.title}</strong></a>` : '<span class="empty"></span>'}
            ${next ? `<a href="${topicHref(next.id)}" data-page="${next.id}">다음 문서 →<strong>${next.title}</strong></a>` : '<span class="empty"></span>'}
          </nav>
        </article>
        <aside class="page-toc" aria-label="이 페이지의 목차">
          <h2>이 페이지에서</h2>
          <a href="#overview">다룰 내용</a><a href="#prepare">사전 준비</a><a href="#steps">사용 방법</a><a href="#result">정상 결과</a><a href="#note">주의사항</a>
        </aside>
      </div>
    </div>
  `;
  updateActiveNavigation(topic.id);
}

function updateActiveNavigation(pageId) {
  document.querySelectorAll(".sidebar-home").forEach((link) => link.classList.toggle("active", !pageId));
  document.querySelectorAll(".sidebar-topic").forEach((link) => link.classList.toggle("active", link.dataset.page === pageId));
}

function currentPageId() {
  return new URLSearchParams(window.location.search).get("page");
}

function renderRoute() {
  const pageId = currentPageId();
  const topic = topicById.get(pageId);
  if (topic) renderDocument(topic);
  else renderHome();
}

function navigateTo(pageId) {
  closeSearch();
  closeMenu();
  const url = pageId ? topicHref(pageId) : "index.html";
  history.pushState({ page: pageId || null }, "", url);
  renderRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
  main.focus({ preventScroll: true });
}

function openMenu() {
  document.body.classList.add("menu-open");
  document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "false");
}

function renderSearch(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return closeSearch();
  const matches = topics.filter((topic) => `${topic.title} ${topic.summary} ${topic.category.title} ${topic.useCases.join(" ")}`.toLowerCase().includes(normalized)).slice(0, 8);
  searchResults.innerHTML = matches.length
    ? matches.map((topic) => `<a class="search-result" href="${topicHref(topic.id)}" data-page="${topic.id}"><strong>${topic.title}</strong><span>${topic.category.title} · ${topic.useCases.join(", ")}</span></a>`).join("")
    : '<div class="search-empty">일치하는 가이드가 없습니다.</div>';
  searchResults.hidden = false;
}

function closeSearch() {
  searchResults.hidden = true;
}

document.addEventListener("click", (event) => {
  const pageLink = event.target.closest("[data-page]");
  if (pageLink && event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    navigateTo(pageLink.dataset.page);
    return;
  }
  const homeLink = event.target.closest("[data-home]");
  if (homeLink) {
    event.preventDefault();
    navigateTo(null);
    return;
  }
  if (!event.target.closest(".global-search") && !event.target.closest(".search-results")) closeSearch();
});

searchInput.addEventListener("input", (event) => renderSearch(event.target.value));
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closeSearch(); searchInput.blur(); }
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); renderSearch(searchInput.value); }
  if (event.key === "Escape") { closeSearch(); closeMenu(); }
});
document.getElementById("mobile-menu-button").addEventListener("click", openMenu);
document.getElementById("sidebar-close").addEventListener("click", closeMenu);
document.getElementById("sidebar-scrim").addEventListener("click", closeMenu);
window.addEventListener("popstate", renderRoute);

renderSidebar();
renderRoute();
