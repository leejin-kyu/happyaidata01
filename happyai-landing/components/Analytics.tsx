'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as gtag from '@/lib/gtag'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname + searchParams.toString())
    }
  }, [pathname, searchParams])

  // 스크롤 깊이 추적
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      // 25%, 50%, 75%, 100% 도달 시에만 추적
      if (scrollPercentage === 25 || scrollPercentage === 50 || scrollPercentage === 75 || scrollPercentage === 100) {
        gtag.trackScroll(scrollPercentage)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 페이지 체류 시간 추적
  useEffect(() => {
    const startTime = Date.now()

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      // 5초 이상 머문 경우에만 추적
      if (timeOnPage >= 5) {
        gtag.trackTimeOnPage(timeOnPage)
      }
    }
  }, [pathname])

  return null
}
