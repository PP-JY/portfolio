# 박준용 — Portfolio

전기공학 전공, 고장 허용 제어와 로봇 시스템에 집중하는 포트폴리오 사이트입니다.

**Live: https://portfolio-app-nine-gules.vercel.app**

## 대표 프로젝트

- **Fault-Tolerant Robot Hand** — 손목의 전류 센서로 구동 전류를 감시하다 고장이 발생하면 대기 중이던 손가락이 0.08초 안에 보조 파지에 투입되는 분산 제어 로봇핸드. MediaPipe로 추출한 21개 손 랜드마크를 로봇 좌표계로 변환해 실시간 미러링 제어. 제3회 전국 소프트웨어 성과 공유 포럼 본선 진출.
- **B.SORI Project 시즌2** — AMR과 로봇팔을 결합해 이동과 조작을 동시에 수행하는 24시간 무인 간병 로봇. 부산권 대학 연합 캡스톤 프로젝트.

## Tech Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Motion

애니메이션 컴포넌트는 [Magic UI](https://github.com/magicuidesign/magicui) (MIT) 패턴을 참고해 직접 구현했습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 콘텐츠 수정

사이트 문구·프로젝트·수치는 전부 `src/data/content.ts` 한 파일에 모여 있습니다.

## Deploy

Vercel에 배포되어 있습니다.

```bash
npx vercel --prod
```
