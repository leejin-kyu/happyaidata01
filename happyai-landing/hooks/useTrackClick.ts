import { useCallback } from 'react'
import * as gtag from '@/lib/gtag'

/**
 * 클릭 이벤트 추적을 위한 커스텀 Hook
 *
 * 사용 예시:
 * const trackClick = useTrackClick()
 *
 * <button onClick={() => trackClick('상담 문의 버튼', 'cta_button')}>
 *   상담 문의
 * </button>
 */
export function useTrackClick() {
  return useCallback((elementName: string, elementType: string = 'button') => {
    gtag.trackClick(elementName, elementType)
  }, [])
}

/**
 * 외부 링크 클릭 추적을 위한 Hook
 */
export function useTrackOutboundLink() {
  return useCallback((url: string) => {
    gtag.trackOutboundLink(url)
  }, [])
}

/**
 * 폼 제출 추적을 위한 Hook
 */
export function useTrackFormSubmit() {
  return useCallback((formName: string) => {
    gtag.trackFormSubmit(formName)
  }, [])
}
