# Google Analytics 4 (GA4) 설정 가이드

## 📊 개요

이 랜딩페이지에는 Google Analytics 4가 통합되어 있어 다음과 같은 사용자 행동 데이터를 자동으로 수집합니다:

### 자동 수집 데이터
- ✅ **페이지뷰**: 어떤 페이지를 방문했는지
- ✅ **유입 경로**: 어떤 사이트에서 유입되었는지 (referrer)
- ✅ **체류 시간**: 각 페이지에 얼마나 머물렀는지
- ✅ **스크롤 깊이**: 페이지를 얼마나 스크롤했는지 (25%, 50%, 75%, 100%)
- ✅ **클릭 이벤트**: 어떤 버튼을 클릭했는지
- ✅ **폼 제출**: 문의 폼 제출 추적
- ✅ **외부 링크 클릭**: 외부 사이트로 이동 추적

---

## 🚀 설정 방법

### 1단계: Google Analytics 4 계정 생성

1. [Google Analytics](https://analytics.google.com/) 접속
2. 계정이 없다면 **무료로 시작하기** 클릭
3. **계정 생성** → **속성 생성** 진행
4. 플랫폼 선택에서 **웹** 선택
5. 웹사이트 URL 입력 (예: `https://your-domain.com`)

### 2단계: 측정 ID 확인

1. Google Analytics 관리 페이지 접속
2. **관리** (톱니바퀴 아이콘) 클릭
3. **속성** 열에서 **데이터 스트림** 클릭
4. 생성한 웹 스트림 클릭
5. **측정 ID** 확인 (형식: `G-XXXXXXXXXX`)

### 3단계: 환경 변수 설정

1. 프로젝트 루트 폴더의 `.env.local` 파일 열기
2. 측정 ID 입력:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. 파일 저장

### 4단계: 개발 서버 재시작

```bash
# 개발 서버가 실행 중이라면 중지 (Ctrl + C)
# 다시 시작
npm run dev
```

---

## 📈 통계 확인 방법

### 실시간 데이터 확인

1. [Google Analytics](https://analytics.google.com/) 접속
2. 왼쪽 메뉴에서 **보고서** → **실시간** 클릭
3. 현재 사이트에 접속 중인 사용자 수와 활동 확인

### 주요 보고서

#### 1. 사용자 유입 경로
**위치**: 보고서 → 수명 주기 → 획득 → 트래픽 획득

**확인 가능한 정보**:
- 검색 엔진 (Google, Naver 등)
- 소셜 미디어 (Facebook, Instagram 등)
- 직접 방문
- 추천 사이트 (다른 웹사이트 링크)

#### 2. 페이지 조회수 및 체류 시간
**위치**: 보고서 → 수명 주기 → 참여도 → 페이지 및 화면

**확인 가능한 정보**:
- 각 페이지별 조회수
- 평균 체류 시간
- 이탈률

#### 3. 사용자 행동 (이벤트)
**위치**: 보고서 → 수명 주기 → 참여도 → 이벤트

**확인 가능한 정보**:
- 버튼 클릭
- 스크롤 깊이
- 폼 제출
- 외부 링크 클릭

#### 4. 사용자 정보
**위치**: 보고서 → 사용자 → 사용자 속성

**확인 가능한 정보**:
- 위치 (국가, 도시)
- 기기 (데스크톱, 모바일, 태블릿)
- 브라우저
- 운영체제

---

## 🎯 클릭 추적 사용 예시

컴포넌트에서 클릭 이벤트를 추적하려면 `useTrackClick` Hook을 사용하세요:

```tsx
'use client'

import { useTrackClick } from '@/hooks/useTrackClick'

export default function MyComponent() {
  const trackClick = useTrackClick()

  return (
    <button
      onClick={() => trackClick('상담 문의 버튼', 'cta_button')}
      className="..."
    >
      상담 문의
    </button>
  )
}
```

### 폼 제출 추적 예시

```tsx
'use client'

import { useTrackFormSubmit } from '@/hooks/useTrackClick'

export default function ContactForm() {
  const trackFormSubmit = useTrackFormSubmit()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 폼 제출 추적
    trackFormSubmit('문의 폼')

    // 실제 폼 제출 로직
    // ...
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## 🔍 디버깅

### Chrome DevTools에서 확인

1. Chrome 브라우저에서 사이트 열기
2. F12 키 (개발자 도구 열기)
3. **Console** 탭 선택
4. 다음 코드 입력하여 GA4가 로드되었는지 확인:

```javascript
console.log(window.gtag)
```

5. 페이지 이동 시 Network 탭에서 `collect?v=2` 요청 확인

### Google Tag Assistant 사용

1. Chrome 웹스토어에서 **Tag Assistant** 확장 프로그램 설치
2. 사이트 접속 후 Tag Assistant 아이콘 클릭
3. **Connect** 클릭
4. Google Analytics 4 태그가 정상적으로 작동하는지 확인

---

## 📊 추적되는 이벤트 목록

| 이벤트 이름 | 카테고리 | 설명 |
|------------|---------|------|
| `click` | `button` | 버튼 클릭 |
| `click` | `link` | 링크 클릭 |
| `click` | `outbound_link` | 외부 링크 클릭 |
| `scroll` | `engagement` | 스크롤 깊이 (25%, 50%, 75%, 100%) |
| `submit` | `form` | 폼 제출 |
| `time_on_page` | `engagement` | 페이지 체류 시간 (5초 이상) |
| `page_view` | - | 페이지 뷰 (자동) |

---

## ⚠️ 주의사항

1. **개발 환경에서 테스트 시**:
   - GA4는 개발 환경(localhost)에서도 데이터를 수집합니다
   - 테스트 데이터가 실제 통계에 포함되지 않도록 주의하세요
   - 필요시 개발 환경에서는 GA4를 비활성화할 수 있습니다

2. **프로덕션 배포 시**:
   - `.env.local` 파일을 `.gitignore`에 추가 (이미 추가되어 있음)
   - 배포 플랫폼(Vercel, Netlify 등)의 환경 변수 설정에 `NEXT_PUBLIC_GA_ID` 추가

3. **GDPR 준수**:
   - EU 사용자 대상 서비스인 경우 쿠키 동의 배너 추가 권장
   - Google Analytics의 데이터 보관 설정 확인

---

## 📞 문의

GA4 설정 중 문제가 발생하면 다음을 확인하세요:

1. `.env.local` 파일에 측정 ID가 올바르게 입력되었는지
2. 개발 서버를 재시작했는지
3. 브라우저의 광고 차단 확장 프로그램이 GA를 차단하고 있지 않은지

---

## 🎉 완료!

GA4가 정상적으로 설정되었습니다. 이제 사용자 행동 데이터를 실시간으로 확인할 수 있습니다!

**데이터 수집 시작**: 사이트에 방문자가 있으면 자동으로 데이터가 수집됩니다.
**실시간 확인**: Google Analytics → 보고서 → 실시간
