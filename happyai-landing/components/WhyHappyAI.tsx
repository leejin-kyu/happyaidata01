'use client'

import { CheckCircle2, Star, Award, GraduationCap, ShieldCheck } from 'lucide-react'

export default function WhyHappyAI() {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: '국내 최상위 연구기관이 선택',
      description: '과학기술정책연구원, 한국교육과정평가원, 삼성전자 등 국책연구기관과 대기업이 신뢰하는 빅데이터 분석 서비스',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'AI LLM 기반 전문 분석',
      description: 'ChatGPT, LLaMA, BERT 등 최신 AI 언어모델을 활용한 텍스트마이닝 및 데이터 분석 전문가',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: '전문가 컨소시엄 팀 운영',
      description: '검증된 전문가들로 구성된 컨소시엄 팀이 기관 맞춤형 분석 및 교육을 제공. 기관 내부 역량 강화 지원',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: '고품질 결과물 보장제',
      description: '만족하지 않으면 비용을 청구하지 않겠습니다. 7년간 300건 이상 프로젝트 수행 경험으로 고품질 보장',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              왜 <span className="gradient-text">해피AI</span>인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              국내 최상위 연구기관이 선택한 빅데이터 분석 서비스
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              해피AI의 핵심 강점
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '7년간 300건 이상 빅데이터 분석 프로젝트 수행',
                '기관 고객 만족도 100% 유지',
                'AI LLM 기반 최신 분석 기법 적용',
                '공공기관 · 대기업 검증 완료',
                '검증된 전문가 컨소시엄 팀 운영',
                '데이터 특성에 맞는 맞춤형 분석 파이프라인 설계',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-1">고품질 보장</h4>
                  <p className="text-yellow-700 text-sm">
                    "고품질 결과" 제공을 위해 <strong>매달 제한된 양의 주문만</strong> 받고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 mb-1">법적 보호 (변호사 자문 완료)</h4>
                  <p className="text-blue-700 text-sm">
                    본 서비스에 대한 허위사실 유포 · 비방 · 명예훼손 등은 <strong>법적 조치</strong> 대상입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
