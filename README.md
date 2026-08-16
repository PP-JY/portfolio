# 박준용 — Portfolio

전기공학 전공, 고장 허용 제어와 로봇 시스템에 집중하는 포트폴리오 사이트입니다.

**Live: https://portfolio-app-nine-gules.vercel.app**

## 대표 프로젝트

- **Fault-Tolerant Robot Hand** — 손가락별 전류를 실시간 감시하다 고장을 감지하면 0.08초 안에 인접 손가락이 대신 파지하는 분산형 고장 허용 로봇핸드. MediaPipe로 21개 손 랜드마크를 추출해 실시간 미러링 제어. 제3회 전국 소프트웨어 성과 공유 포럼 본선 진출.
- **B.SORI Project 시즌2** — AMR과 로봇팔을 결합해 이동과 조작을 동시에 수행하는 24시간 무인 간병 로봇. 부산권 대학 연합 캡스톤 프로젝트.

## Tech Stack

Next.js · React · TypeScript · MUI · GSAP

## 로컬 실행

```bash
npm install
npm run dev
```

## Deploy

```bash
npx vercel build --prod --yes
npx vercel deploy --prebuilt --prod --yes
```

---

[VitoMedlej/free-developer-portfolio-template](https://github.com/VitoMedlej/free-developer-portfolio-template) (MIT) 기반으로 제작했습니다.
