'use client'

import { Network, BarChart3, GraduationCap, Brain } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Network className="w-12 h-12 text-blue-600" />,
      title: '정책·공공기관 분석',
      items: [
        '정책 의제·이해관계자 네트워크 분석',
        '여론 및 담론 분석 (언론/SNS 기반)',
        'AI LLM 기반 의제 탐지 및 트렌드 추적',
        '시계열 기반 정책 변화 분석',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: '기관 연구 데이터 분석',
      items: [
        '연구기관 학술데이터 텍스트마이닝',
        'LDA, STM, BERTopic 등 고급 분석기법',
        'ChatGPT·LLaMA 기반 최신 AI분석',
        '기관 맞춤형 데이터 분석 파이프라인 설계',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-600" />,
      title: '기관 맞춤형 교육 및 연구지원',
      items: [
        '공공·연구기관 내부 실습 세션',
        'LLM·RAG·LangChain 기관 교육',
        '대학·기업·공공기관 강의 다수 진행',
        '전문가 컨소시엄 팀 연구지원',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">제공 서비스</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              전문적인 <span className="gradient-text">AI 분석 서비스</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              공공기관, 연구기관, 대학, 기업을 위한 맞춤형 빅데이터 분석 및 교육
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Target Audience Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              서비스 적합 대상
            </h3>
            <p className="text-center text-indigo-600 font-semibold text-lg mb-10">(기관 전용)</p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* 공공·정책 연구기관 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🏛️</span>
                  <span>공공·정책 연구기관</span>
                </h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span>정책 기획·여론·사회이슈 등 정책 기반 데이터 분석이 필요한 기관</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span>소셜 네트워크 분석(SNA), AI 의제 탐지, 시계열 분석 등 국책·지자체 과제 수행 부서</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-0.5">•</span>
                    <span>정책평가·행정혁신·복지·문화·환경 등 정책 데이터 분석 담당 기관</span>
                  </li>
                </ul>
              </div>

              {/* 연구기관 및 대학 연구소 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🧪</span>
                  <span>연구기관 및 대학 연구소</span>
                </h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>학술·정책 연구용 비정형 데이터 분석 및 텍스트마이닝이 필요한 연구소</span>
                  </li>
                </ul>
              </div>

              {/* 교육·연구 지원 기관 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🎓</span>
                  <span>교육·연구 지원 기관</span>
                </h4>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-600 font-bold mt-0.5">•</span>
                    <span>AI 도구·파이썬 등을 활용해 직접 분석이 가능한 AI 빅데이터 분석 교육이 필요한 기관</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Notice */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-center">
              <p className="text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2 flex-wrap">
                <span>📌</span>
                <span>본 서비스는 기관 프로젝트 전용이며, 개인 논문 대필·컨설팅 서비스와 무관합니다.</span>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              상세 분석 기법
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-600 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  기본 텍스트마이닝
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 빈도(TF), TF-IDF, DoV, 워드 클라우드</li>
                  <li>• 네트워크 분석 (동시출현, N-gram)</li>
                  <li>• 중심성 분석 (근접, 연결, 매개, 위세)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  AI/머신러닝 기반
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• LDA, DTM, STM 토픽모델링</li>
                  <li>• BERTopic, LLM 임베딩 고급 기법</li>
                  <li>• BERT, LSTM, ChatGPT 감성분석</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  감성분석
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 감성사전 기반 (KNU, VADER 등)</li>
                  <li>• 맞춤형 감성사전 제작</li>
                  <li>• 최신 AI 기반 감성분석</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-pink-600 font-bold">4</span>
                  </div>
                  최신 LLM 분석
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• ChatGPT, LLaMA, Falcon 활용</li>
                  <li>• RAG, LangChain 기반 분석</li>
                  <li>• 맞춤형 프롬프트 설계</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
