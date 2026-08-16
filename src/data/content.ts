import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import BoltIcon from '@mui/icons-material/Bolt';
import MemoryIcon from '@mui/icons-material/Memory';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const projectsArray = [
    {
        title: 'Fault-Tolerant Robot Hand',
        img: '/images/hero-hand.jpg',
        description: '전류 센서로 각 손가락의 소모 전류를 실시간 모니터링하다가 고장을 감지하면, 0.08초 안에 인접 손가락이 대신 물체를 잡는 분산형 고장 허용 로봇핸드. MediaPipe로 21개 손 랜드마크를 추출해 실시간 미러링 제어. 제3회 전국 소프트웨어 성과 공유 포럼 본선 진출.',
        siteUrl: 'https://youtube.com/shorts/f4VqWtzXo70?si=y7pF0E3wiann5Esl',
        repoUrl: ''
    },
    {
        title: 'B.SORI Project — 시즌2',
        img: '',
        description: '"누워 계셔도, 혼자 살 수 있게." AMR과 로봇팔을 결합해 이동과 조작을 동시에 수행하는 24시간 무인 간병 로봇. 전류·온도·압력 센서 기반, 부산권 대학 연합 캡스톤 프로젝트로 팀 동전넷과 함께 개발 중.',
        siteUrl: '',
        repoUrl: ''
    }
]

export const iconsArray = [
    {title: 'PLC (XG5000/XGB)', Icon: SettingsInputComponentIcon, isBackend: false},
    {title: 'OpenCV / MediaPipe', Icon: VisibilityIcon, isBackend: false},
    {title: 'ESP32 / Raspberry Pi', Icon: DeveloperBoardIcon, isBackend: false},
    {title: 'PSIM 전력전자 시뮬레이션', Icon: BoltIcon, isBackend: false},
    {title: 'KiCad / EasyEDA (PCB)', Icon: MemoryIcon, isBackend: true},
    {title: '전류 기반 고장 감지', Icon: ReportProblemIcon, isBackend: true}
]
