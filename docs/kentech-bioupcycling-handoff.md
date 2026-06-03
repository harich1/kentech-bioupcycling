# KENTECH 바이오업사이클링 웹사이트 개발·운영 핸드오프

작성일: 2026-06-03  
목적: 사람 또는 AI가 이 프로젝트의 구조, 디자인 방향, 작업 이력, 배포 상태를 빠르게 이해하고 이어서 수정할 수 있도록 정리한다.

## 1. 프로젝트 개요

KENTECH 바이오업사이클링 센터 홈페이지 MVP다. 기존 초안의 구식 구성과 낮은 가독성을 개선하고, BRIC 및 KENTECH 공식 홈페이지의 기관형 레이아웃을 참고해 연구센터 소개, 연구 도메인, 기술 플랫폼, 실증·파일럿, 산업협력, 시설, 교육·채용, 문의까지 연결되는 구조로 개편했다.

핵심 방향은 다음과 같다.

- 첫 화면에서 센터의 정체성, 연구 방향, 협력 문의 동선을 즉시 전달한다.
- 일러스트 위주가 아니라 KENTECH 공식 이미지, 실험실·파일럿 플랜트 느낌의 사실적 샘플 이미지, 그리네플 참고 자료를 조합한다.
- 과도한 무거운 효과 대신 스크롤 진입 시 텍스트와 카드가 부드럽게 나타나는 가벼운 애니메이션을 사용한다.
- 2026년 8월까지 웹사이트를 구축한다는 로드맵과 교수진·기관별 역할이 보이는 Research Concept Map을 포함한다.

## 2. 핵심 링크

- 운영 사이트: https://kentech-bioupcycling.vercel.app/
- GitHub 저장소: https://github.com/harich1/kentech-bioupcycling
- 로컬 작업 폴더: `C:\Users\wk799\Documents\Codex\kentech-bioupcycling`
- 기존 개발 노트: https://app.notion.com/p/2026-06-02-373de64ab72481199ae7cca6a9759249?source=copy_link
- 최신 확인 커밋: `dbf6bf5 Fix mobile hero title wrapping`

## 3. 기술 스택

- Next.js 16.2.7 App Router
- React 19.2.4
- Tailwind CSS v4
- TypeScript
- Vercel 배포
- Resend 기반 문의 메일 전송 API

주요 실행 명령:

```bash
npm run lint
npm run build
npm audit
```

## 4. 현재 사이트 구조

### 공통 구성

- `app/layout.tsx`: 메타데이터, 파비콘, 전역 Header/Footer 구성
- `components/Header.tsx`: 상단 네비게이션, 모바일 메뉴, 투명 배경 로고
- `components/Footer.tsx`: 푸터 로고, 주소, 연락처, 주요 링크
- `components/ScrollReveal.tsx`: IntersectionObserver 기반 스크롤 등장 애니메이션
- `components/ImagePlaceholder.tsx`: 로컬 이미지 렌더링과 오버레이 처리
- `components/PageHero.tsx`: 세부 페이지 상단 사진형 히어로

### 페이지

- `app/page.tsx`: 메인 페이지
- `app/about/page.tsx`: 센터 소개
- `app/research/page.tsx`: 연구 영역 및 연구 네트워크
- `app/technology/page.tsx`: 기술 플랫폼
- `app/pilot/page.tsx`: 파일럿·실증
- `app/projects/page.tsx`: 프로젝트
- `app/industry/page.tsx`: 산업협력
- `app/facilities/page.tsx`: 시설
- `app/education/page.tsx`: 교육·채용
- `app/contact/page.tsx`: 문의 페이지
- `app/contact/ContactForm.tsx`: 문의 폼 클라이언트 컴포넌트
- `app/api/contact/route.ts`: 문의 접수 API

## 5. 메인 페이지 구성

메인 페이지는 현재 MVP의 기준 화면이다.

### 히어로

문구:

```text
KENTECH BIO-UPCYCLING CENTER
바이오매스를 청정수소와
순환 탄소 솔루션으로
전환합니다
```

모바일에서는 줄맞춤 문제를 해결하기 위해 별도 제목을 사용한다.

```text
바이오매스를
청정수소와
순환 탄소 솔루션으로
전환합니다
```

히어로 우측에는 KENTECH 건물 이미지를 사용하고, 이미지 하단에 흰색 로고를 배치했다. 메인 좌측 상단 로고는 흰 배경이 보이지 않도록 `logo-transparent.png`를 사용한다.

### 센터 개요

2026년 8월 플랫폼 공개 목표와 센터가 다루는 연구·실증 흐름을 요약한다.

### Research Concept Map

교수진 연구 방향과 외부 기관 실증 역할을 하나의 네트워크로 보여준다.

교수진:

- 안수명 교수: AX
- 김우열 교수: 실시간 분석
- 탄제완 교수: CCU
- 유근제 교수, 한국해양대: Metabolomics
- 이창수 교수, UNIST: Anaerobic Digestion

기관 역할:

- 한국전력: 전력공급 및 IDPP
- 롯데건설: EPC
- 한국수자력원자력: CHP

### Research Areas

6대 통합 연구 도메인을 카드 형태로 보여준다. 데스크톱에서 설명 문장의 마지막 글자가 어색하게 줄바꿈되지 않도록 폭과 문구를 조정했다.

### Technology Platform

제목은 다음과 같이 두 줄로 맞춘다.

```text
자원에서 전력·열·수소까지
이어지는 순환 에너지 흐름
```

오른쪽 박스에는 Feedstock, Biogas, Hydrogen, Digital Control, Carbon Loop 흐름을 정리한다.

### Pilot Scale-up

제목 `벤치 스케일에서 산업 실증까지`는 어두운 배경에서 보이도록 흰색으로 처리했다. 이미지는 로컬 활용 이미지 폴더의 `bg_1.jpg`를 기반으로 `public/pilot-campus-energy.jpg`로 반영했다.

### 푸터

주소는 다음으로 정리했다.

```text
전라남도 나주시 켄텍길 21 한국에너지공과대학교
```

## 6. 이미지 및 에셋

### 로고·파비콘

- `public/logo.png`: 기본 로고
- `public/logo-transparent.png`: 흰 배경이 제거된 헤더용 로고
- `public/logo-white.png`: 어두운 배경용 흰색 로고
- `public/favicon.ico`: KENTECH 공식 favicon 참고 반영
- `app/favicon.ico`: Next.js app favicon

### KENTECH 참고 이미지

- `public/kentech-sub-visual.jpg`
- `public/kentech-campus-1.png`
- `public/kentech-campus-2.png`
- `public/kentech-campus-3.png`

### 사실적 샘플 이미지

- `public/photo-lab-reactors.png`
- `public/photo-pilot-plant.png`
- `public/photo-partner-meeting.png`
- `public/photo-analysis-lab.png`

### 그리네플 참고 자료 기반 이미지

- `public/greeneple-ados-innovation.png`
- `public/greeneple-ados-roadmap.png`
- `public/greeneple-circular-rng.png`
- `public/greeneple-technology-features.png`

### 파일럿 섹션 이미지

- `public/pilot-campus-energy.jpg`

## 7. 문의 폼 상태

초기에는 보안상 정적 이메일 안내만 두었으나, 사용자가 “문의는 그냥 받으면 안되나?”라고 요청해 실제 문의 폼을 추가했다.

구성:

- `app/contact/ContactForm.tsx`: 이름, 소속, 이메일, 연락처, 문의 유형, 메시지 입력
- `app/api/contact/route.ts`: 문의 내용을 Resend로 이메일 전송

보호 장치:

- 필수값 검증
- 이메일 형식 검증
- 입력 길이 제한
- 숨김 honeypot 필드
- IP 기준 간단 rate limit, 10분에 5회
- Resend API 키가 없으면 503으로 안내

Vercel 환경변수 설정이 필요하다.

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=bioupcycling@kentech.ac.kr
CONTACT_FROM_EMAIL="KENTECH Bio-Upcycling <verified-sender@example.com>"
```

주의:

- `CONTACT_FROM_EMAIL`은 Resend에서 인증된 발신 주소 또는 도메인이어야 한다.
- API 키가 설정되지 않은 현재 상태에서는 문의 API가 503을 반환하지만, 사이트 자체는 정상 동작한다.
- 실제 개인정보를 받기 시작하면 개인정보 처리방침 또는 수집 동의 문구를 추가하는 것이 좋다.

## 8. 보안 강화 내역

`next.config.ts`에서 다음 보안 헤더를 적용했다.

- Content-Security-Policy
- X-Content-Type-Options: `nosniff`
- X-Frame-Options: `DENY`
- Referrer-Policy: `strict-origin-when-cross-origin`
- Permissions-Policy
- Strict-Transport-Security
- `poweredByHeader: false`

의존성 보안:

- `package.json`에 `postcss: 8.5.15` override 적용
- `npm audit` 기준 취약점 0개 확인

추가 참고:

- 현재 CSP에는 Next.js 호환성을 위해 `unsafe-inline`, `unsafe-eval`이 포함되어 있다.
- 더 강한 CSP가 필요하면 nonce/hash 기반으로 재설계해야 한다.
- 문의 API의 메모리 기반 rate limit은 서버리스 환경에서 최선의 방어일 뿐 전역 방어가 아니다. 운영 단계에서는 Vercel WAF, Turnstile, reCAPTCHA 등 추가 보호를 검토할 수 있다.

## 9. 작업 이력

주요 커밋:

- `47997ee Revamp homepage MVP`: 홈페이지 MVP 재구성
- `2aa4cb5 Add motion and sample visuals`: 스크롤 애니메이션 및 샘플 비주얼 추가
- `4d21f04 Polish hero image loading`: 히어로 이미지 로딩 개선
- `eb78e3b Use KENTECH photo references`: KENTECH 공식 참고 이미지 반영
- `1ec1af4 Add realistic visuals across detail pages`: 세부 페이지 전체에 사실적 이미지 적용
- `ec4ea1d Add research network concept sections`: 교수진·기관 역할 Research Concept Map 추가
- `e42f536 Fix logo image aspect warning`: 로고 이미지 비율 경고 개선
- `b4d24bf Polish homepage layout and branding`: 메인 문구, 주소, favicon, 파일럿 이미지, 줄바꿈 보정
- `cb45618 Harden security headers and dependencies`: 보안 헤더 및 의존성 보안 강화
- `1ef3357 Add contact form submission endpoint`: 문의 폼 및 이메일 전송 API 추가
- `dbf6bf5 Fix mobile hero title wrapping`: 모바일 히어로 제목 줄맞춤 수정

## 10. 배포 및 검증 상태

Vercel 배포는 GitHub push 이후 자동으로 진행된다.

최근 검증:

- `npm run lint`: 통과
- `npm run build`: 통과
- `npm audit`: 취약점 0개
- 운영 사이트 모바일 히어로 줄바꿈 확인
- 운영 사이트 보안 헤더 확인
- 문의 API는 환경변수 미설정 상태에서 503 안내 반환 확인

최신 운영 기준:

- `dbf6bf5 Fix mobile hero title wrapping`
- 운영 주소: https://kentech-bioupcycling.vercel.app/

## 11. 앞으로의 우선순위

1. Vercel에 Resend 환경변수를 설정해 문의 폼을 실제 수신 가능 상태로 전환한다.
2. 개인정보 수집 동의 문구 또는 개인정보 처리방침 링크를 문의 폼에 추가한다.
3. `bioupcycling@kentech.ac.kr` 외 실제 대표 연락처와 전화번호를 확정한다.
4. 교수진·기관별 명칭과 역할 문구를 공식 문서 기준으로 한 번 더 검수한다.
5. 실제 센터 사진, 실험실 사진, 장비 사진이 확보되면 현재 샘플 이미지를 교체한다.
6. 모바일에서 각 세부 페이지의 이미지 높이, 제목 줄바꿈, 버튼 폭을 추가 QA한다.
7. 운영 전 최종 접근성 점검: 대비, 키보드 포커스, 이미지 alt, 폼 오류 안내.

## 12. AI 작업자 주의사항

- 이 저장소는 이미 Vercel과 GitHub가 연결되어 있다. 커밋 후 push하면 운영 배포가 진행된다.
- 사용자가 만든 변경사항을 되돌리지 않는다.
- 파일을 읽을 때 PowerShell 인코딩 문제로 한글이 깨져 보일 수 있다. 필요하면 Node.js 또는 UTF-8이 확실한 편집기를 사용한다.
- 웹 확인은 gstack `/browse` 계열 도구를 사용한다.
- 모바일 히어로 제목은 데스크톱과 별도 마크업이다. 줄맞춤을 고칠 때 둘을 함께 확인한다.
- 문의 폼은 API 키가 없어도 빌드되지만, 실제 메일 전송은 Vercel 환경변수 설정 후 가능하다.
- 디자인 톤은 KENTECH 공식 사이트처럼 기관형, 신뢰감, 여백 있는 레이아웃을 유지한다.
- 과도한 장식, 그라데이션 의존, 카드 중첩, 무거운 애니메이션은 피한다.
