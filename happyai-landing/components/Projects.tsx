'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Building2, CheckCircle } from 'lucide-react'

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      name: '한국보건의료연구원',
      description: 'AI기반 보건의료 기사 빅데이터 분석 연구',
      period: '2025.10~11',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '티에스케이',
      description: 'AI기반 문서 표준내역서 개발',
      period: '2025.10~12',
      type: 'AI LLM개발',
    },
    {
      name: '과학기술정책연구원',
      description: 'UN ESCAP 총회 및 CICTSTI 위원회 의제 분석',
      period: '2025.07~09',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '고려대학교 민족문화연구원',
      description: 'AI기반 빅데이터 분석을 통한 인문사회 연구 아젠다 및 사회적 기여 전략 도출',
      period: '2025.08',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '한국교육과정평가원',
      description: 'STM 기반 빅데이터 분석을 통한 수능 대입 관련 미디어 여론 분석',
      period: '2025.05',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '소프트웨어정책연구소',
      description: 'LLM 기반 빅데이터 분석 및 임베딩 기법을 활용한 SW기업 구조화 체계 개발',
      period: '2025.03~07',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '국립산림과학원',
      description: 'LLM 기반 텍스트 마이닝을 활용한 복원 관련 용어 분석',
      period: '2024.08~11',
      type: 'AI기반 빅데이터분석',
    },
    {
      name: '한국전력공사',
      description: 'Private LLM기반 RAG 챗봇 모델 구축',
      period: '2024.07~10',
      type: 'LLM개발',
    },
    {
      name: '한국전력기술',
      description: '기관 맞춤형 Private LLM 개발',
      period: '2024.07~',
      type: 'LLM개발',
    },
    {
      name: '경기도교육청',
      description: '교육정책 설문 데이터 분석',
      period: '2024.06~',
      type: '자연어처리',
    },
    {
      name: '법무부',
      description: 'AI 모델 기반 판결문 범죄사실 추출 서비스',
      period: '2023.07~11',
      type: '자연어처리(LLM개발)',
    },
    {
      name: '서울디지털재단',
      description: 'Instruction Fine-Tuning 및 강화학습 기반 LLM모델 연구',
      period: '2023.08~11',
      type: '자연어처리(LLM개발)',
    },
    {
      name: '삼성전자',
      description: 'AI언어모델 기반 헬스케어 서비스 리뷰 텍스트 분석',
      period: '2023.05~06',
      type: '자연어처리',
    },
    {
      name: '한국데이터산업진흥원',
      description: '데이터 산업 정책 분석',
      period: '2022.02~04',
      type: '텍스트마이닝 분석',
    },
    {
      name: '서울기술연구원',
      description: '안전사고 유형 빅데이터 분석',
      period: '2022.07',
      type: '텍스트마이닝 분석',
    },
    {
      name: '한국대기환경학회',
      description: '대기환경학회 연구동향 텍스트마이닝 분석',
      period: '2023.03',
      type: '자연어처리',
    },
    {
      name: '국립산림과학원',
      description: '산림휴양공간 수요예측 및 관리기술 개발',
      period: '2020',
      type: '빅데이터분석',
    },
    {
      name: '강릉시청소년상담복지센터',
      description: '강릉시 청소년 생활실태 조사 설문 통계분석',
      period: '2025.07~10',
      type: '통계분석',
    },
  ]

  const clients = [
    '과학기술정책연구원',
    '한국교육과정평가원',
    '삼성전자',
    '국립산림과학원',
    '한국전력공사',
    '경기도교육청',
    '서울디지털재단',
    '한국보건의료연구원',
    '경기연구원',
    '서울대학교',
    '고려대학교',
  ]

  const itemsPerSlide = 3
  const totalSlides = Math.ceil(projects.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full shadow-md mb-4">
              <Building2 className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">실제 프로젝트 사례</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              검증된 <span className="gradient-text">프로젝트 실적</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              7년간 300건 이상의 빅데이터 분석 프로젝트 수행
            </p>
            <p className="text-lg text-gray-500">
              국내 최상위 공공·연구기관, 대학, 대기업이 선택한 신뢰할 수 있는 서비스
            </p>
          </div>

          {/* Slider */}
          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6 px-2">
                      {projects
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((project, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                                {project.type}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {project.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                              {project.description}
                            </p>
                            <p className="text-xs text-gray-500">{project.period}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              주요 고객사 및 협력 기관
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-800 text-center">
                    {client}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 font-medium">
                이외에도 다수의 공공기관, 기업체, 개인 의뢰 등 <strong>총 300건 이상</strong> 프로젝트 진행
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
