'use client'

import { Building2, FlaskConical, BookOpen } from 'lucide-react'

export default function TargetAudience() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              서비스 적합 대상
            </h2>
            <p className="text-xl text-indigo-600 font-semibold">
              (기관 전용)
            </p>
          </div>

          {/* Target Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 공공·정책 연구기관 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🏛️</span>
                <span>공공·정책 연구기관</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>정책 기획·여론·사회이슈 등 정책 기반 데이터 분석이 필요한 기관</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>소셜 네트워크 분석(SNA), AI 의제 탐지, 시계열 분석 등 국책·지자체 과제 수행 부서</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-1">•</span>
                  <span>정책평가·행정혁신·복지·문화·환경 등 정책 데이터 분석 담당 기관</span>
                </li>
              </ul>
            </div>

            {/* 연구기관 및 대학 연구소 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🧪</span>
                <span>연구기관 및 대학 연구소</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span>학술·정책 연구용 비정형 데이터 분석 및 텍스트마이닝이 필요한 연구소</span>
                </li>
              </ul>
            </div>

            {/* 교육·연구 지원 기관 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🎓</span>
                <span>교육·연구 지원 기관</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold mt-1">•</span>
                  <span>AI 도구·파이썬 등을 활용해 직접 분석이 가능한 AI 빅데이터 분석 교육이 필요한 기관</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Notice Box */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-3 text-white">
              <span className="text-2xl">📌</span>
              <p className="text-lg md:text-xl font-semibold">
                본 서비스는 기관 프로젝트 전용이며, 개인 논문 대필·컨설팅 서비스와 무관합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
