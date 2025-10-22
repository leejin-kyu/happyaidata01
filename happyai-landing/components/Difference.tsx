'use client'

import { X, Check } from 'lucide-react'

export default function Difference() {
  const comparisons = [
    {
      category: '분석 품질',
      others: '단순 통계/결과',
      happyai: '전문가 맞춤형 고품질',
    },
    {
      category: '접근 방식',
      others: '결과 납품 중심',
      happyai: '분석+교육 병행',
    },
    {
      category: '기술 기반',
      others: '단순 텍스트마이닝',
      happyai: 'LLM·AI 융합분석',
    },
    {
      category: '신뢰도',
      others: '개인 위탁',
      happyai: '공공기관·대기업 검증',
    },
  ]

  return (
    <section id="difference" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">해피AI</span>만의 차별점
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              타 서비스와 비교할 수 없는 전문성과 신뢰성
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                      항목
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 border-b-2 border-gray-200">
                      타 서비스
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white border-b-2 border-purple-700">
                      해피AI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-purple-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-5 text-sm font-bold text-gray-900 border-b border-gray-100">
                        {item.category}
                      </td>
                      <td className="px-6 py-5 text-sm text-center border-b border-gray-100">
                        <div className="flex items-center justify-center gap-2 text-red-600">
                          <X className="w-5 h-5 flex-shrink-0" />
                          <span>{item.others}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-center bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                        <div className="flex items-center justify-center gap-2 text-purple-700 font-semibold">
                          <Check className="w-5 h-5 flex-shrink-0" />
                          <span>{item.happyai}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">깊은 통찰력</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                단순 분석 기법 적용이 아닌, 데이터 특성에 따른 유기적인 분석 파이프라인 설계로
                한 차원 높은 깊이 있는 결과물 제공
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">검증된 실적</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                7년간 300건 이상의 프로젝트 수행으로 축적된 경험과 노하우.
                국책연구기관, 대기업 등에서 검증된 전문성
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">교육 병행</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                모든 프로젝트에 실습용 강의영상 + 예시 데이터 + 분석리포트 제공.
                직접 배우고 활용할 수 있는 진정한 분석 서비스
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">최신 기술</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                전통적 텍스트마이닝부터 ChatGPT, LLaMA 등 최신 LLM 기반 분석까지.
                연구 목적에 최적화된 기술 적용
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
