// Google Analytics 설정 및 이벤트 추적 함수

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// 페이지뷰 추적
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// 이벤트 추적
type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 클릭 이벤트 추적
export const trackClick = (elementName: string, elementType: string = 'button') => {
  event({
    action: 'click',
    category: elementType,
    label: elementName,
  })
}

// 스크롤 깊이 추적
export const trackScroll = (scrollPercentage: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${scrollPercentage}%`,
    value: scrollPercentage,
  })
}

// 폼 제출 추적
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  })
}

// 외부 링크 클릭 추적
export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'outbound_link',
    label: url,
  })
}

// 파일 다운로드 추적
export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'file',
    label: fileName,
  })
}

// 사용자 체류 시간 추적
export const trackTimeOnPage = (timeInSeconds: number) => {
  event({
    action: 'time_on_page',
    category: 'engagement',
    label: 'page_duration',
    value: timeInSeconds,
  })
}
