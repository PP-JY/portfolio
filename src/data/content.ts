export const profile = {
  name: "박준용",
  nameEn: "Park Junyong",
  role: "Fault-Tolerant Control / Robotics",
  affiliation: "동아대학교 전기공학과 4학년",
  email: "russiaassa63@naver.com",
  headline: "고장 나도\n멈추지 않는 시스템을\n만듭니다",
  summary:
    "전류 기반 고장 감지와 분산 제어로 로봇이 멈추지 않게 만드는 일을 합니다. 임베디드부터 PCB, 제어 알고리즘까지 직접 설계하고 구현합니다.",
};

/** Hero stat row. `value` counts up from 0; `suffix` stays static. */
export const stats = [
  { value: 0.08, suffix: "s", decimals: 2, label: "고장 대응 재구성", note: "주입 → 보조 파지 지령" },
  { value: 5, suffix: "", decimals: 0, label: "독립 구동 손가락", note: "서보 개별 제어" },
  { value: 3, suffix: "", decimals: 0, label: "분산 제어 노드", note: "인지 · 좌완 · 우완" },
  { value: 1, suffix: "B", decimals: 0, label: "통신 페이로드", note: "비트 인코딩 프로토콜" },
];

/** Layered control architecture, rendered as an animated node graph. */
export const architecture = {
  title: "계층을 나눠 장애를 가둡니다",
  body: "인지·판단과 실시간 구동을 물리적으로 분리했습니다. 좌우 팔의 제어기와 배터리 계통을 나누고 소프트웨어도 거기 맞춰 분산시켜, 한 노드의 장애가 전체로 번지지 않게 했습니다.",
  nodes: {
    perception: { label: "인지 계층", sub: "Raspberry Pi · MediaPipe" },
    left: { label: "좌완 제어", sub: "ESP32" },
    right: { label: "우완 제어", sub: "ESP32" },
    hand: { label: "로봇핸드", sub: "서보 5축 + 손목" },
    sensor: { label: "전류 센서", sub: "합산 측정" },
  },
};

export const projects = [
  {
    id: "robot-hand",
    title: "Fault-Tolerant Robot Hand",
    subtitle: "분산 제어 기반 고장 허용 로봇핸드",
    period: "2026",
    award: "제3회 전국대학 소프트웨어 성과 공유 포럼 본선 발표",
    description:
      "손목의 전류 센서로 구동 전류를 실시간 감시하다가 고장이 발생하면, 대기 중이던 손가락이 0.08초 안에 보조 파지에 투입되어 물체를 놓지 않습니다. MediaPipe로 추출한 21개 손 랜드마크를 로봇 좌표계로 변환해 실시간 미러링 제어를 구현했습니다.",
    highlights: [
      "인지 계층과 실시간 제어 계층을 물리적으로 분리한 분산 구조",
      "손가락 5개 상태를 1바이트에 비트 인코딩 — 부분 적용이 구조적으로 불가능",
      "보간 알고리즘으로 떨림 제거 및 돌입 전류 저감",
      "전류 실측(무부하 18mA / 3점 파지 40mA)으로 재구성 동작 검증",
    ],
    stack: ["Raspberry Pi", "ESP32", "MediaPipe", "Python", "C++"],
    images: [
      { src: "/images/hero-hand.jpg", alt: "고장 허용 로봇핸드 전체" },
      { src: "/images/forum-presentation.jpg", alt: "제3회 전국대학 소프트웨어 성과 공유 포럼 발표 현장" },
      { src: "/images/hand-peace.jpg", alt: "로봇핸드 손가락 구동" },
      { src: "/images/mediapipe-demo.jpg", alt: "MediaPipe 손 인식 데모" },
    ],
    links: [
      { href: "https://youtu.be/xnEoqGTqkqM", label: "포럼 발표 영상" },
      { href: "https://youtube.com/shorts/f4VqWtzXo70?si=y7pF0E3wiann5Esl", label: "시연 영상" },
    ],
  },
  {
    id: "bsori",
    title: "B.SORI Project — 시즌2",
    subtitle: "24시간 무인 간병 로봇",
    period: "2026 — 진행 중",
    award: "부산권 대학 연합 캡스톤 · 팀 동전넷",
    description:
      "“누워 계셔도, 혼자 살 수 있게.” AMR과 로봇팔을 결합해 이동과 조작을 동시에 수행하는 간병 로봇입니다. 전류·온도·압력 센서를 기반으로 상태를 감시하며, 현재 팀 동전넷과 함께 개발 중입니다.",
    highlights: [
      "AMR 주행부와 6축 로봇팔 조작부 통합 제어",
      "전류 · 온도 · 압력 다중 센서 기반 상태 감시",
    ],
    stack: ["AMR", "6-axis Arm", "Sensor Fusion"],
    images: [],
    links: [],
  },
];

export const strengths = [
  {
    title: "고장 감지 · 대응 설계",
    body: "전류 파형을 분석해 이상을 감지하고, 0.08초 안에 남은 구동부로 작업을 이어가는 대응 로직을 설계합니다. 문제를 회피하지 않고 견디는 시스템을 만드는 게 목표입니다.",
  },
  {
    title: "임베디드 · 하드웨어",
    body: "ESP32와 라즈베리파이로 실시간 제어를 구현하고, KiCad/EasyEDA로 PCB를 직접 설계합니다. 아이디어를 손으로 만질 수 있는 물건으로 끝까지 완성합니다.",
  },
  {
    title: "팀 협업 · 발표",
    body: "캡스톤과 대학 연합 프로젝트에서 설계를 나누고 발표해왔습니다. 2026년 제3회 전국대학 소프트웨어 성과 공유 포럼(부산) 본선에서 팀 대표로 직접 발표했습니다.",
  },
];

export const stack = [
  { name: "ESP32 / Raspberry Pi", note: "실시간 제어 · 분산 노드" },
  { name: "OpenCV / MediaPipe", note: "비전 · 랜드마크 추출" },
  { name: "KiCad / EasyEDA", note: "회로 · PCB 설계" },
  { name: "PLC (XG5000 / XGB)", note: "산업 제어 로직" },
  { name: "PSIM", note: "전력전자 시뮬레이션" },
  { name: "전류 기반 고장 감지", note: "제어 알고리즘" },
];

export const about = {
  paragraphs: [
    "동아대학교 전기공학과 4학년(GPA 3.9, 직전 학기 4.5)으로, 전류 기반 고장 감지와 분산 제어를 중심으로 로봇 시스템을 설계합니다. 임베디드, PCB 설계, 제어 알고리즘까지 직접 구현하는 걸 좋아합니다.",
    "고장 허용 로봇핸드로 제3회 전국대학 소프트웨어 성과 공유 포럼(2026, 부산) 본선에 진출해 팀 대표로 발표했고, 현재는 팀 동전넷과 함께 무인 간병 로봇 B.SORI 프로젝트를 진행하고 있습니다.",
    "OPIc IM2를 보유하고 있고, 고장 허용 로봇핸드 관련 특허 출원을 준비 중입니다. 새로운 프로젝트나 협업 제안은 언제든 편하게 연락 주세요.",
  ],
  image: { src: "/images/circuit-diagram.jpg", alt: "회로 및 배선 설계 작업" },
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#architecture", label: "Architecture" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
