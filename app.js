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
    id: "safety",
    title: "안전 및 주의사항",
    description: "사용 전 반드시 확인",
    icon: "alert",
    topics: [
      {
        id: "safety-guidelines",
        title: "안전 지침",
        useCases: [],
        summary: "MOTI 제품의 손상과 오작동을 예방하고 안전하게 착용·충전·보관하기 위한 필수 지침입니다.",
        hideOverview: true,
        prepareTitle: "사용 전 확인",
        resultTitle: "사용을 중단해야 하는 경우",
        resultLabel: "사용 중단 기준",
        noteTitle: "추가 주의사항",
        noteLabel: "제품 안내",
        criticalWarningLabel: "이상이 있으면 즉시 사용을 중단하십시오",
        criticalWarning: "제품이 비정상적으로 뜨겁거나 부풀고, 연기·이상한 냄새·액체 누출·소음이 발생하거나 제품과 충전 포트가 물에 젖은 경우 즉시 사용과 충전을 중단하고 전원을 끄십시오. 손상된 제품을 다시 충전하거나 임의로 분해하지 마십시오.",
        stepsTitle: "안전 수칙",
        covers: ["사용 전 제품과 작업 공간 점검", "안전한 착용과 사용 방법", "충전·보관·폐기 및 이상 발생 시 조치"],
        prerequisites: ["제품을 사용하거나 충전하기 전에 본 지침 전체 읽기", "제품 본체, 글러브 원단, 손목 고정부와 USB Type-C 포트 상태 확인", "주변 사람이나 물체와 충돌하지 않는 작업 공간 확보"],
        steps: [
          ["사용 전 점검", "제품 본체, 글러브 원단, 손목 고정부와 USB Type-C 포트에 손상이 없는지 확인합니다. 포트와 연결 단자에 이물질이나 습기가 없어야 하며, 지정된 글러브·동글·트래커와 부속품만 사용하십시오. 연결 장치를 탈착할 때는 먼저 제품 전원을 끄십시오."],
          ["착용 및 사용", "손목 고정부를 지나치게 조이지 마십시오. 손 저림, 통증 또는 피부색 변화가 나타나면 즉시 제품을 벗으십시오. 제품을 물, 습기, 직사광선, 화기 또는 고온 환경에 노출시키지 말고, 착용 중 불편함이나 어지러움이 발생하면 사용을 중단하고 휴식을 취하십시오."],
          ["사용 공간과 충돌 예방", "사용하기 전에 주변 사람, 장애물과 케이블을 정리하고 손과 팔을 움직일 수 있는 충분한 공간을 확보하십시오. 트래킹 중에는 주변 물체와 충돌하거나 케이블에 걸리지 않도록 주의하고, 장비 상태를 확인할 때는 움직임을 멈춘 뒤 화면을 확인하십시오."],
          ["충전과 배터리", "상태가 양호한 일반 USB Type-C 케이블과 MOTI 제품의 정격에 맞는 전원 공급 장치를 사용하십시오. 별도의 전용 충전 케이블은 필요하지 않습니다. 충전 중인 제품을 장시간 방치하거나 불에 타기 쉬운 물체 위와 밀폐된 공간에서 충전하지 마십시오. 제품이 젖었거나 손상된 상태에서는 충전하지 말고, 충전이 끝나면 케이블을 분리하십시오."],
          ["보관 및 폐기", "직사광선과 고온·다습한 장소를 피해 어린이나 반려동물이 만질 수 없는 곳에 보관하십시오. 장기간 사용하지 않을 때는 배터리가 완전히 방전되지 않도록 정기적으로 상태를 확인하고, 제품과 배터리는 지역 전자제품 및 배터리 수거 규정에 따라 지정된 장소에 폐기하십시오."]
        ],
        result: "사용 전 점검이 완료되고 제품과 작업 공간에 손상, 습기, 과열 또는 충돌 위험이 없어야 합니다. 하나라도 이상이 있으면 제품을 사용하지 마십시오.",
        note: "제품 라벨과 함께 제공된 MOTI 공식 설명서의 정격 전압, 사용·충전 온도 및 보관 조건을 우선하십시오. 이상이 발견되면 제품을 임의로 수리하거나 분해하지 말고 Quester 지원팀에 문의하십시오."
      }
    ]
  },
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
        prerequisites: ["MOTI Studio 설치 파일", "관리자 권한을 사용할 수 있는 PC", "연결할 장비와 사용 가능한 USB 포트"],
        steps: [
          ["시스템 요구사항 확인", "운영체제, 그래픽 환경과 연결할 장비가 요구사항을 만족하는지 확인합니다."],
          ["프로그램 설치", "설치 파일을 실행하고 안내에 따라 설치를 완료합니다.", { src: "assets/1.%20download.png", alt: "MOTI Studio 설치 프로그램의 추가 작업 선택 화면" }],
          ["첫 실행 확인", "MOTI Studio를 실행해 Hand Metrics 기본 화면과 상단의 Hand Metrics, Live View, Teleoperation 탭이 표시되는지 확인합니다.", { src: "assets/2.%20hand_matrics.png", alt: "MOTI Studio 첫 실행 시 표시되는 Hand Metrics 화면" }]
        ],
        result: "MOTI Studio가 오류 없이 실행되고 Hand Metrics 기본 화면이 표시됩니다.",
        note: "실행 직후 오류가 발생하면 Quester 팀에 문의바랍니다."
      },
      {
        id: "interface-modes",
        title: "화면 구성과 동작 모드",
        useCases: ["UC-002"],
        summary: "주요 페이지를 이해하고 현재 지원되는 Tracker mode에서 작업을 시작합니다.",
        hideOverview: true,
        hidePrerequisites: true,
        hideResult: true,
        stepsTitle: "화면 및 동작 모드",
        noteTitle: "지원 상태",
        noteLabel: "현재 제공 범위",
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
            { src: "assets/8.%20wear_glove.png", alt: "MOTI 글러브를 손에 착용한 모습", caption: "손가락 부분과 손목 고정부가 느슨하지 않도록 글러브를 밀착해 착용하고 센서 모듈이 안정적으로 고정되었는지 확인합니다." }
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
        title: "Teleoperation 설정과 송신",
        useCases: ["UC-028"],
        summary: "한 손 또는 두 손의 트래킹 데이터를 로봇 핸드 동작으로 변환해 확인하고, 손별로 설정한 UDP Endpoint 또는 ROS 2 Topic으로 송신합니다.",
        covers: ["한 손·두 손 입력과 Robot View 선택", "로봇 핸드 모델 선택과 동작 확인", "좌우 UDP·ROS Endpoint 저장", "UDP·ROS 송신 시작과 중지"],
        prerequisites: ["글러브 연결과 유효한 손 트래킹", "수신 프로그램 또는 ROS 2 Subscriber 실행", "사용할 UDP IP·Port 또는 ROS Topic 확인"],
        steps: [
          ["입력과 화면 모드 선택", "상단의 Teleoperation 페이지를 열고 오른쪽 Teleop 탭에서 Mode를 선택합니다. One Hand에서는 Left 또는 Right 입력과 Current·Wrist Fixed 뷰를 선택합니다. Two Hands에서는 양손 입력 상태가 모두 LIVE인지 확인하고 Dual Robot·Dual Fixed 뷰를 선택합니다. 양손 모드에서는 입력 스켈레톤을 숨기고 좌우 로봇 핸드만 표시합니다.", [
            { src: "assets/56.%20teleop_onehand.png", alt: "One Hand 모드에서 왼손 입력 스켈레톤과 로봇 핸드 Target이 표시된 Teleoperation 화면", caption: "One Hand를 선택한 뒤 Input Hand에서 Left 또는 Right를 지정합니다. 왼쪽 Input이 LIVE이고 오른쪽 Robot Hand가 TARGET으로 표시되며 실제 손 움직임에 따라 로봇 핸드가 반응하는지 확인합니다." },
            { src: "assets/57.%20teleop_twohand.png", alt: "Two Hands와 Dual Fixed가 선택되어 좌우 로봇 핸드가 표시된 Teleoperation 화면", caption: "Two Hands에서는 Left Hand와 Right Hand가 모두 LIVE인지 확인한 뒤 Dual Robot 또는 Dual Fixed를 선택합니다. 입력 스켈레톤은 숨겨지고 좌우 로봇 핸드만 각각 표시됩니다." }
          ]],
          ["로봇 핸드 선택", "Robot Mesh 영역에서 Open Gallery를 눌러 Robot Hand Gallery를 엽니다. 사용할 모델 카드를 선택해 Preview와 DOF 정보를 확인한 뒤 Apply Selection을 누릅니다. 실제 손을 천천히 움직여 선택한 로봇 핸드가 자연스럽게 반응하는지 확인합니다.", { src: "assets/58.%20hand_gallery.png", alt: "OmniHand와 DG5F-S 및 XHand1을 선택할 수 있는 Robot Hand Gallery", caption: "Robot Hand Gallery에서 OmniHand, DG5F-S 20·15 또는 XHand1 카드를 선택합니다. 오른쪽 Selected details에서 상태와 DOF를 확인하고 Apply Selection을 눌러 적용합니다. None을 선택하면 로봇 핸드 모델이 숨겨집니다." }],
          ["송신 대상 입력", "Teleoperation Output의 Destination에서 왼손과 오른손에 사용할 UDP host, UDP port와 ROS topic을 각각 입력합니다. UDP host에는 IPv4 주소를, UDP port에는 1~65535 범위의 포트를 입력하고 ROS topic은 /로 시작하도록 입력합니다. 입력을 마친 뒤 아래의 저장 아이콘을 누릅니다.", { src: "assets/59.%20teleop_save_endpoint.png", alt: "Teleoperation Output의 좌우 UDP host와 port 및 ROS topic 입력 영역", caption: "Left hand와 Right hand에 사용할 UDP host·port와 ROS topic을 각각 입력합니다. 아래의 저장 아이콘을 누른 뒤 상단에 Teleoperation output endpoints saved 상태가 표시되는지 확인합니다." }],
          ["Endpoint 저장 확인", "저장 아이콘을 누른 뒤 Teleoperation Endpoints Saved 팝업이 표시되면 설정이 정상적으로 저장된 것입니다. OK를 눌러 팝업을 닫습니다. One Hand에서는 선택한 손의 설정을 사용하고 Two Hands에서는 왼손과 오른손 설정을 각각 사용합니다.", { src: "assets/60.%20teleop_save_popup.png", alt: "Teleoperation Endpoints Saved 저장 완료 팝업", caption: "Teleoperation endpoints were saved 메시지가 표시되면 저장이 완료된 것입니다. OK를 눌러 작업 화면으로 돌아갑니다." }],
          ["송신 시작과 중지", "로봇 핸드 동작과 수신 프로그램 준비를 확인한 뒤 UDP Send 또는 ROS Send를 누릅니다. UDP 또는 ROS 2 상태가 Sending으로 바뀌고 설정한 수신 대상에 데이터가 도착하는지 확인합니다. 작업을 마칠 때는 활성화된 UDP Stop 또는 ROS Stop을 누릅니다.", { src: "assets/61.%20send_teleop_udp.png", alt: "UDP Sending 상태와 활성화된 UDP Stop 버튼", caption: "UDP Send를 누르면 상태가 UDP: Sending으로 바뀌고 UDP Stop 버튼이 활성화됩니다. 수신 프로그램에서 데이터 도착을 확인한 뒤 UDP Stop을 눌러 송신을 종료합니다." }]
        ],
        result: "선택한 한 손 또는 두 손의 움직임이 로봇 핸드에 시각화되고, 변환된 데이터가 저장된 UDP Endpoint 또는 ROS 2 Topic으로 전송됩니다.",
        packetFormatTitle: "데이터 패킷 형식",
        packetFormatBody: "<strong><br>기본 형식</strong><br>UDP 송신 데이터는 little-endian 바이너리 패킷이며,<br><b>\"MQP1\" | sequence_id | count | side | qpos[0] ... qpos[N-1]</b> 순서로 구성됩니다.<br><br><strong>필드 의미</strong><br>\"MQP1\"은 4바이트 헤더입니다.<br>sequence_id와 count는 uint32, side와 qpos는 float32입니다.<br>count는 side를 포함한 전체 float 개수이므로 qpos 개수 + 1 값을 사용합니다.<br>side는 <b>left=0.0, right=1.0</b>입니다.<br>qpos 순서는 선택한 로봇 핸드 모델의 <b>URDF</b>에서 <b>mimic이 아닌 revolute joint 순서</b>를 따릅니다.<br><br><strong>OmniHand 예시</strong><br>OmniHand는 qpos가 10개이므로 count는 11이고 총 패킷 크기는 56 bytes입니다.<br><br>q0 = L_thumb_roll_joint<br>q1 = L_thumb_abad_joint<br>q2 = L_thumb_mcp_joint<br><br>q3 = L_index_abad_joint<br>q4 = L_index_pip_joint<br><br>q5 = L_middle_pip_joint<br><br>q6 = L_ring_abad_joint<br>q7 = L_ring_pip_joint<br><br>q8 = L_pinky_abad_joint<br>q9 = L_pinky_pip_joint<br><br>왼손은 L_, 오른손은 R_ 접두사를 붙여 같은 순서를 사용합니다.",
        note: "Teleoperation Output의 UDP 설정은 UDP Streaming 탭의 Endpoint와 별도로 저장됩니다. ROS 송신은 Linux ROS2 빌드에서만 활성화되며 Windows에서는 ROS Topic을 입력하고 저장할 수 있지만 송신 버튼은 사용할 수 없습니다. 기본 UDP Endpoint는 양손 모두 127.0.0.1:5000입니다. 실제 로봇을 연결하기 전에는 비상 정지 수단과 로봇의 안전 범위를 먼저 확인하세요."
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
        packetFormatTitle: "데이터 패킷 형식",
        packetFormatBody: "<br><strong>기본 형식</strong><br>UDP 송신 데이터는 little-endian 바이너리 패킷이며,<br><b>sequence_id | count | body ... | CRC32</b> 순서로 구성됩니다.<br><br><strong>필드 의미</strong><br>sequence_id는 uint32(byte 0~3)이며 사용하지 않으면 건너뜁니다.<br>count는 uint8(byte 4)이며 body 개수를 의미합니다.<br>body 데이터는 한 개당 32 bytes이고, 마지막 4 bytes는 CRC32이며 사용하지 않으면 무시할 수 있습니다.<br><br><strong>Body 데이터 구성</strong><br>body 시작 + 0 : body_id (int32)<br>body 시작 + 4 : position.x (float32)<br>body 시작 + 8 : position.y (float32)<br>body 시작 + 12 : position.z (float32)<br>body 시작 + 16 : quaternion.x (float32)<br>body 시작 + 20 : quaternion.y (float32)<br>body 시작 + 24 : quaternion.z (float32)<br>body 시작 + 28 : quaternion.w (float32)<br><br><strong>Body Index / 명칭</strong><br>0: Wrist<br>1: Thumb_CMC<br>2: Index_MCP<br>3: Middle_MCP<br>4: Ring_MCP<br>5: Pinky_MCP<br>6: Thumb_MCP<br>7: Index_PIP<br>8: Middle_PIP<br>9: Ring_PIP<br>10: Pinky_PIP<br>11: Thumb_IP<br>12: Index_DIP<br>13: Middle_DIP<br>14: Ring_DIP<br>15: Pinky_DIP<br><br><strong>좌우 구분</strong><br>moti_udp 패킷 내부에는 side 값이 없습니다.<br>좌우는 수신 포트로 구분하며, 왼손은 <b>UDP port 9000</b>, 오른손은 <b>UDP port 9002</b>가 기본으로 설정되어 있습니다.",
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
        hideOverview: true,
        hidePrerequisites: true,
        hideResult: true,
        stepsTitle: "현재 지원 상태",
        noteTitle: "업데이트 안내",
        noteLabel: "향후 제공 예정",
        covers: ["향후 제공 예정인 진단 정보", "오류 보고서 생성과 확인", "기술 지원용 자료 준비"],
        prerequisites: ["현재 미구현 기능으로 별도의 사전 준비가 필요하지 않습니다."],
        steps: [
          ["구현 상태 확인", "로그 수집, 진단 정보 확인과 오류 보고서 생성 기능은 현재 배포판에서 제공되지 않습니다. 내부 진단용 Debug 탭은 개발 빌드에만 포함됩니다."]
        ],
        result: "현재 버전에서는 진단 보고서나 오류 보고서 파일이 생성되지 않습니다.",
        note: "배포판 기준 미구현 기능입니다. 기능이 정식으로 제공된 이후 실제 사용 절차와 화면을 업데이트할 예정입니다."
      }
    ]
  },
  {
    id: "legal",
    title: "법적 고지",
    description: "사용권과 제3자 소프트웨어",
    icon: "info",
    topics: [
      {
        id: "software-license",
        title: "소프트웨어 라이선스",
        useCases: [],
        summary: "MOTI Studio의 소유권과 허용된 사용 범위, 제3자 소프트웨어에 적용되는 조건을 안내합니다.",
        hideOverview: true,
        hidePrerequisites: true,
        hideResult: true,
        stepsTitle: "라이선스 안내",
        noteTitle: "적용 기준",
        noteLabel: "문서 우선순위",
        covers: ["MOTI Studio의 저작권과 소유권", "허용된 사용 범위와 제한되는 행위", "제3자 소프트웨어 고지와 라이선스 문의"],
        prerequisites: ["MOTI Studio와 함께 제공된 계약서, 주문서 또는 사용권 증서 확인", "설치 패키지의 LICENSE 및 THIRD-PARTY-LICENSE 문서 확인"],
        steps: [
          ["소유권", "MOTI Studio와 이에 포함된 주식회사 퀘스터의 소프트웨어, 문서, 디자인 및 기타 자료는 주식회사 퀘스터의 독점 자산입니다. 저작권과 기타 지식재산권은 주식회사 퀘스터 또는 정당한 권리자에게 귀속됩니다."],
          ["허용된 사용", "사용자는 주식회사 퀘스터가 제공한 서면 계약서, 주문서 또는 사용권 증서에 명시된 목적과 범위 안에서만 MOTI Studio를 사용할 수 있습니다. 해당 문서에서 정한 사용자, 장치, 사업장 및 사용 기간 등의 조건이 적용됩니다."],
          ["사용 제한", "주식회사 퀘스터의 사전 서면 동의 없이 MOTI Studio를 복제, 수정, 판매, 대여, 배포, 재사용권 설정하거나 제3자에게 제공할 수 없습니다. 사용권 인증이나 기술적 보호조치를 회피하거나 소스 코드를 알아내기 위한 역설계, 디컴파일 및 역어셈블도 제한됩니다."],
          ["법령상 허용되는 이용", "관련 법령에서 특정 이용을 명시적으로 허용하고 계약으로 제한할 수 없는 경우에는 해당 법령이 정한 범위가 우선합니다."],
          ["제3자 소프트웨어", "MOTI Studio에 포함된 제3자 소프트웨어에는 각 권리자가 정한 별도의 라이선스가 적용됩니다. 자세한 저작권 고지와 조건은 설치 패키지에 포함된 THIRD-PARTY-LICENSE 문서를 확인하십시오."]
        ],
        result: "MOTI Studio는 사용권 문서에 명시된 범위에서 이용하고, LICENSE와 THIRD-PARTY-LICENSE 문서를 제품과 함께 보관해야 합니다.",
        note: "이 페이지는 라이선스 조건의 요약입니다. 별도의 계약서, 주문서, 사용권 증서 또는 설치 패키지에 포함된 라이선스 문서와 내용이 다른 경우 해당 문서의 조건이 우선합니다. 문의: redruka1@quester.kr"
      },
      {
        id: "third-party-software",
        title: "제3자 소프트웨어",
        useCases: [],
        summary: "MOTI Studio 1.5 출시 패키지에서 확인한 주요 제3자 구성요소와 상용 배포 전에 확인해야 할 라이선스 조건을 안내합니다.",
        hideOverview: true,
        hidePrerequisites: true,
        hideResult: true,
        criticalWarningLabel: "현재 패키지는 상용 출시 전 라이선스 정리가 필요합니다",
        criticalWarning: "CPD 생성 코드에는 상업적 이용을 허용하지 않는 Academic License 문구가 있으며, Harfang은 여러 라이브러리와 함께 정적으로 링크되어 있습니다. 해당 코드의 상용 이용 권리와 Harfang 라이선스 경로를 확정하기 전에는 현재 패키지를 비공개 상용 소프트웨어로 출시하지 마십시오.",
        stepsTitle: "배포 전 확인 절차",
        noteTitle: "검토 기준",
        noteLabel: "출시 빌드 기준",
        covers: ["주요 제3자 구성요소와 적용 라이선스", "허용적 오픈소스와 공급사 SDK의 차이", "비공개 상용 배포 전 필수 확인 사항"],
        prerequisites: ["실제 출시 빌드에 포함되는 DLL·라이브러리 목록 확정", "각 구성요소의 정확한 버전과 원본 LICENSE·NOTICE 확보", "Harfang에 적용할 라이선스 경로 및 공급사 SDK 재배포 권한 확인"],
        licenseComponents: [
          { name: "OpenVR", version: "2.15.6", release: "포함 · openvr_api.dll", license: "BSD-3-Clause", action: "저작권과 라이선스 원문을 배포 문서에 포함", status: "고지 필요", source: "https://github.com/ValveSoftware/openvr/blob/master/LICENSE" },
          { name: "Eigen", version: "3.4.0", release: "포함 · 헤더 코드", license: "MPL-2.0 중심", action: "사용한 모듈과 함께 제공된 개별 COPYING 파일을 확인", status: "고지 필요", source: "https://eigen.tuxfamily.org/index.php?title=Main_Page#License" },
          { name: "spdlog / fmt", version: "1.17.0 / 12.1.0", release: "포함 · 헤더 코드", license: "MIT", action: "spdlog과 번들된 fmt의 저작권 및 MIT 고지를 포함", status: "고지 필요", source: "https://github.com/gabime/spdlog/blob/v1.x/LICENSE" },
          { name: "toml11", version: "3.7.0", release: "포함 · 헤더 코드", license: "MIT", action: "저작권과 MIT 라이선스 원문을 포함", status: "고지 필요", source: "https://github.com/ToruNiina/toml11/blob/main/LICENSE" },
          { name: "Boost", version: "1.82.0", release: "포함 · 헤더 코드", license: "Boost Software License 1.0", action: "사용한 Asio와 circular_buffer 모듈의 저작권 및 라이선스를 확인", status: "고지 확인", source: "https://www.boost.org/LICENSE_1_0.txt" },
          { name: "Harfang", version: "3.2.7", release: "포함 · 정적 링크", license: "GPLv3 / LGPLv3 / 상용", action: "상용 라이선스 또는 LGPLv3 준수 경로를 확정하고 정적 링크 방식을 검토", status: "출시 차단", source: "https://github.com/harfang3d/harfang3d#license" },
          { name: "Harfang 하위 구성요소", version: "출시 SDK 포함 버전", release: "포함 · 정적 링크 및 DLL", license: "구성요소별 상이", action: "GLFW, Lua, bgfx/bx/bimg, ImGui, OpenAL, OpenXR Loader, Bullet, Recast/Detour, meshoptimizer, stb 등의 원문 고지를 복원", status: "고지 누락", source: "https://github.com/harfang3d/harfang3d" },
          { name: "CPD 생성 코드", version: "저장소 포함본", release: "포함 · moti.dll", license: "MathWorks Academic License 표기", action: "상용 이용 권리를 증명하거나 상용 배포 가능한 구현으로 교체", status: "출시 차단", source: "https://www.mathworks.com/pricing-licensing.html" },
          { name: "CFR-Sync", version: "저장소 포함본", release: "헤더 포함 여부 확인", license: "라이선스 파일 없음", action: "권리자와 사용 조건을 문서화하고 제3자 코드라면 배포 허가를 확보", status: "권리 확인", source: "" },
          { name: "Open3D", version: "0.19.0", release: "현재 패키지 미포함", license: "MIT", action: "Open3D 옵션을 켜는 출시 빌드에서만 하위 종속성 고지까지 포함", status: "미포함", source: "https://github.com/isl-org/Open3D/blob/main/LICENSE" },
          { name: "OpenCV", version: "출시 패키지 미사용", release: "현재 패키지 미포함", license: "버전에 따라 Apache-2.0 또는 BSD-3-Clause", action: "Vision 또는 RealSense 옵션을 켤 때 버전과 NOTICE를 다시 확인", status: "미포함", source: "https://opencv.org/license/" },
          { name: "RealSense SDK", version: "출시 패키지 미사용", release: "현재 패키지 미포함", license: "Apache-2.0", action: "RealSense 옵션을 켤 때 realsense2.dll과 LICENSE·NOTICE를 확인", status: "미포함", source: "https://github.com/realsenseai/librealsense/blob/master/LICENSE" },
          { name: "ZED SDK", version: "출시 패키지 미사용", release: "현재 패키지 미포함", license: "Stereolabs SDK 약관", action: "Vision 빌드를 출시할 때 해당 SDK EULA의 재배포 범위를 확인", status: "미포함", source: "https://www.stereolabs.com/developers" },
          { name: "CUDA Toolkit", version: "출시 패키지 미사용", release: "현재 패키지 미포함", license: "NVIDIA SDK EULA", action: "Vision 빌드를 출시할 때 지정된 재배포 가능 런타임만 포함", status: "미포함", source: "https://docs.nvidia.com/cuda/eula/" },
          { name: "TensorRT", version: "출시 패키지 미사용", release: "현재 패키지 미포함", license: "NVIDIA TensorRT SLA", action: "Vision 빌드를 출시할 때 허용된 런타임 DLL과 약관 조건을 확인", status: "미포함", source: "https://docs.nvidia.com/deeplearning/tensorrt/latest/reference/sla.html" }
        ],
        steps: [
          ["출시 구성 확정", "개발 PC에 설치되어 있기만 한 SDK와 실제 설치 패키지에 포함되는 DLL·라이브러리를 구분합니다. 사용하지 않거나 배포하지 않는 선택 기능은 고지 목록에서 별도로 표시합니다."],
          ["원문 고지 구성", "THIRD-PARTY-LICENSE 문서에 구성요소 이름, 버전, 저작권자, 라이선스 식별자와 원문을 연결합니다. Apache-2.0 구성요소에 NOTICE 파일이 있으면 해당 고지도 함께 유지합니다."],
          ["차단 항목 해소", "CPD 생성 코드의 상용 이용 권리를 증명하거나 코드를 교체하고, Harfang은 상용 라이선스 또는 LGPLv3 준수 경로를 확정해야 합니다. CFR-Sync의 권리 관계와 Harfang 하위 구성요소의 고지도 함께 정리합니다."]
        ],
        result: "출시 패키지의 모든 제3자 바이너리가 구성요소별 고지와 연결되고, 계약형 SDK는 재배포 권한과 허용 파일이 확인되어야 합니다.",
        note: "2026년 7월 20일 생성된 MOTI-Studio-Setup-1.5.exe와 build_dist 설정을 기준으로 확인했습니다. 현재 소스가 변경된 뒤 다시 빌드하면 포함 결과가 달라질 수 있으므로 실제 출시 직전에 동일한 검사를 반복해야 합니다."
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
          <h1>Everything You Need to Get Started</h1>
          <p>장비 설정부터 캘리브레이션, 실시간 트래킹과 데이터 출력까지 전체 사용 과정을 담고 있습니다.</p>
          <div class="hero-actions">
            <a class="button primary" href="${topicHref("safety-guidelines")}" data-page="safety-guidelines">안전 지침부터 보기 ${icon("arrow")}</a>
            <a class="button" href="${topicHref("diagnostics")}" data-page="diagnostics">문제 해결</a>
          </div>
        </div>
        <aside class="hero-checklist" aria-label="시작 전 준비물">
          <h2>시작 전 준비</h2>
          <p>첫 트래킹 전에 확인하세요.</p>
          ${["MOTI Studio가 설치된 PC", "MOTI Glove와 USB 동글", "지원 트래커", "장비를 움직일 수 있는 작업 공간"].map((item) => `<div class="check-item"><span class="check-icon">${icon("check")}</span>${item}</div>`).join("")}
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
          <div><h2 id="all-guides-heading">전체 사용 가이드</h2><p>22개 문서를 8개 작업 영역으로 정리했습니다.</p></div>
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

          ${topic.criticalWarning ? `<div class="callout warning document-alert"><span class="callout-icon">${icon("alert")}</span><div><strong>${topic.criticalWarningLabel || "중요 경고"}</strong><p>${topic.criticalWarning}</p></div></div>` : ""}

          ${topic.hideOverview ? "" : `<section class="doc-section" id="overview"><h2>이 페이지에서 다룰 내용</h2><ul class="content-list">${topic.covers.map((item) => `<li>${item}</li>`).join("")}</ul></section>`}
          ${topic.licenseComponents ? `<section class="doc-section" id="components"><h2>구성요소별 라이선스</h2><div class="license-table-wrap"><table class="license-table"><thead><tr><th>구성요소</th><th>확인 버전</th><th>출시 패키지</th><th>라이선스</th><th>배포 전 조치</th><th>상태</th></tr></thead><tbody>${topic.licenseComponents.map((component) => `<tr><td>${component.source ? `<a href="${component.source}" target="_blank" rel="noopener noreferrer">${component.name}</a>` : component.name}</td><td>${component.version}</td><td>${component.release}</td><td>${component.license}</td><td>${component.action}</td><td><span class="license-status">${component.status}</span></td></tr>`).join("")}</tbody></table></div></section>` : ""}
          ${topic.hidePrerequisites ? "" : `<section class="doc-section" id="prepare"><h2>${topic.prepareTitle || "사전 준비"}</h2><ul class="content-list">${topic.prerequisites.map((item) => `<li>${item}</li>`).join("")}</ul></section>`}
          <section class="doc-section" id="steps"><h2>${topic.stepsTitle || "사용 방법"}</h2><ol class="steps">${topic.steps.map((step) => {
            const stepImages = Array.isArray(step[2]) ? step[2] : step[2] ? [step[2]] : [];
            return `<li class="step-card"><strong>${step[0]}</strong><span>${step[1]}</span>${stepImages.length ? `<div class="step-images">${stepImages.map((image) => `<figure class="step-figure"><img class="step-image${image.compact ? " step-image-compact" : ""}" src="${image.src}" alt="${image.alt}" loading="lazy">${image.caption ? `<figcaption>${image.caption}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}</li>`;
          }).join("")}</ol></section>
          ${topic.hideResult ? "" : `<section class="doc-section" id="result"><h2>${topic.resultTitle || "정상 결과"}</h2><div class="callout"><span class="callout-icon">${icon("check")}</span><div><strong>${topic.resultLabel || "완료 확인"}</strong><p>${topic.result}</p></div></div></section>`}
          ${topic.packetFormatTitle ? `<section class="doc-section" id="packet-format"><h2>${topic.packetFormatTitle}</h2><div class="callout"><span class="callout-icon">${icon("check")}</span><div><strong>${topic.packetFormatTitle}</strong><p>${topic.packetFormatBody}</p></div></div></section>` : ""}
          <section class="doc-section" id="note"><h2>${topic.noteTitle || "주의사항"}</h2><div class="callout warning"><span class="callout-icon">${icon("alert")}</span><div><strong>${topic.noteLabel || "작업 전 확인"}</strong><p>${topic.note}</p></div></div></section>

          <nav class="document-footer" aria-label="이전 및 다음 문서">
            ${previous ? `<a href="${topicHref(previous.id)}" data-page="${previous.id}">← 이전 문서<strong>${previous.title}</strong></a>` : '<span class="empty"></span>'}
            ${next ? `<a href="${topicHref(next.id)}" data-page="${next.id}">다음 문서 →<strong>${next.title}</strong></a>` : '<span class="empty"></span>'}
          </nav>
        </article>
        <aside class="page-toc" aria-label="이 페이지의 목차">
          <h2>이 페이지에서</h2>
          ${topic.hideOverview ? "" : `<a href="#overview">다룰 내용</a>`}${topic.licenseComponents ? `<a href="#components">구성요소별 라이선스</a>` : ""}${topic.hidePrerequisites ? "" : `<a href="#prepare">${topic.prepareTitle || "사전 준비"}</a>`}<a href="#steps">${topic.stepsTitle || "사용 방법"}</a>${topic.hideResult ? "" : `<a href="#result">${topic.resultTitle || "정상 결과"}</a>`}${topic.packetFormatTitle ? `<a href="#packet-format">데이터 패킷 형식</a>` : ""}<a href="#note">${topic.noteTitle || "주의사항"}</a>
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
