import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Analytics from '@/components/Analytics'
import { GA_TRACKING_ID } from '@/lib/gtag'

export const metadata: Metadata = {
  title: '해피AI - AI 기반 빅데이터 분석의 새로운 기준',
  description: '국내 최상위 공공·연구기관, 대학, 대기업이 선택하는 AI 기반 빅데이터 분석 서비스. 단순한 결과 제공이 아닌 직접 배우는 분석 서비스.',
  keywords: 'AI, 빅데이터, 텍스트마이닝, LLM, 데이터 분석, 정책 분석, 연구 데이터',
  openGraph: {
    title: '해피AI - AI 기반 빅데이터 분석의 새로운 기준',
    description: '국내 최상위 공공·연구기관이 선택한 빅데이터 분석 서비스',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics 4 */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
