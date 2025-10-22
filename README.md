# 해피AI 랜딩 페이지

AI 기반 빅데이터 분석의 새로운 기준, 해피AI 공식 랜딩 페이지

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Animations + Framer Motion

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 결과를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
happyai-landing/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx            # 루트 레이아웃
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Header.tsx            # 헤더 컴포넌트
│   ├── HeroSection.tsx       # 히어로 섹션
│   ├── WhyHappyAI.tsx        # 왜 해피AI인가 섹션
│   ├── Services.tsx          # 서비스 소개 섹션
│   ├── Projects.tsx          # 프로젝트 사례 섹션
│   ├── Difference.tsx        # 차별점 비교 섹션
│   ├── Education.tsx         # 교육/강의 섹션
│   ├── Promotion.tsx         # 프로모션 배너 섹션
│   └── Footer.tsx            # 푸터 컴포넌트
├── public/                   # 정적 파일
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 부드러운 애니메이션 효과
- ✅ 자동 슬라이드 프로젝트 사례
- ✅ 스크롤 기반 네비게이션
- ✅ 최신 디자인 트렌드 적용
- ✅ SEO 최적화

## 섹션 설명

1. **Header**: 고정 헤더, 모바일 메뉴
2. **Hero Section**: 메인 비주얼, CTA 버튼, 주요 통계
3. **Why HappyAI**: 핵심 강점 4가지 소개
4. **Services**: 제공 서비스 3가지 카테고리
5. **Projects**: 주요 프로젝트 사례 슬라이더
6. **Difference**: 타 서비스와의 비교 테이블
7. **Education**: 교육/강의 실적 및 강좌 소개
8. **Promotion**: 프로모션 배너 (44% 할인)
9. **Footer**: 연락처, 소셜 링크, 추가 정보

## 커스터마이징

### 색상 변경
`tailwind.config.ts` 파일에서 색상 테마를 수정할 수 있습니다.

### 콘텐츠 수정
각 컴포넌트 파일에서 텍스트, 이미지, 링크 등을 수정하세요.

### 섹션 추가/제거
`app/page.tsx` 파일에서 원하는 섹션을 추가하거나 제거할 수 있습니다.

## 배포

### Vercel
```bash
vercel
```

### Netlify
```bash
npm run build
# out 폴더를 Netlify에 업로드
```

## 라이선스

© 2025 해피AI. All rights reserved.
