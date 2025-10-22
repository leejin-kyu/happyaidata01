'use client'

import { Video, Users, BookOpen, Award } from 'lucide-react'

export default function Education() {
  const courses = [
    {
      title: 'KT LLM/sLLM 애플리케이션 개발 교육',
      organization: 'KT',
      period: '2025.06~',
      topics: '파인튜닝, RAG, Agent',
    },
    {
      title: '삼성SDS LLM프로그래밍 교육',
      organization: '삼성U 멀티캠퍼스',
      period: '2024.09~10',
      topics: 'LLM 프로그래밍',
    },
    {
      title: 'RAG 및 LLM 트렌드 강의',
      organization: '마소캠퍼스',
      period: '2024.07',
      topics: 'RAG, LLM',
    },
    {
      title: '빅데이터 분석 기초 강의',
      organization: '렛유인에듀',
      period: '2023.08~',
      topics: '빅데이터 분석',
    },
    {
      title: '파이썬을 활용한 텍스트 분석',
      organization: '서울과학기술대학교 외',
      period: '2023.08~',
      topics: '텍스트마이닝, Python',
    },
    {
      title: 'ChatGPT를 활용한 파이썬 기초강의',
      organization: '경기대학교',
      period: '2023.09~11',
      topics: 'ChatGPT, Python',
    },
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full shadow-md mb-4">
              <Video className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-green-700">함께 배우는 AI 분석</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              교육과 <span className="gradient-text">함께하는 분석</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              모든 프로젝트에 실습용 강의영상 + 예시 데이터 + 분석리포트 제공
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2000+</div>
              <div className="text-gray-600 font-medium">누적 수강생 수</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">개설 강의 수</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">7년</div>
              <div className="text-gray-600 font-medium">교육 경력</div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              주요 교육 및 강의 실적
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1 leading-tight">
                        {course.title}
                      </h4>
                      <p className="text-xs text-gray-500">{course.period}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{course.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{course.topics}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <Video className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                기관 맞춤형 AI 분석 및 교육
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                공공기관, 연구기관, 대학, 기업을 위한 전문 빅데이터 분석 서비스.
                검증된 전문가 컨소시엄 팀이 연구지원과 역량 강화 교육을 함께 제공합니다
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                기관 분석 및 교육 상담하기
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
              교육 플랫폼
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                '인프런',
                '탈잉',
                '렛유인에듀',
                '마소캠퍼스',
                '삼성U 멀티캠퍼스',
                '단국대학교',
                '경기대학교',
                '서울과학기술대학교',
              ].map((platform, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 font-medium text-sm"
                >
                  {platform}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              이외에도 다수의 개인 강의 및 기업 교육 진행
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
