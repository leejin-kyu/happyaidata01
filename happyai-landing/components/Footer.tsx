'use client'

import { Mail, Youtube, FileText, Award, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pb-24">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  해피AI
                </span>
              </h3>
              <p className="text-gray-300 mb-4 text-lg">
                AI LLM 기반 빅데이터 분석 전문
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                국내 최상위 공공·연구기관, 대학, 대기업이 선택하는
                신뢰할 수 있는 빅데이터 분석 및 연구지원 서비스
              </p>

              {/* Prime Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="text-sm font-bold">크몽 Prime 인증 서비스 (157개 중 1개)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">바로가기</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    프로젝트 사례
                  </a>
                </li>
                <li>
                  <a href="#difference" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    차별점
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    교육/강의
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-xl font-bold mb-4">문의 및 연락</h4>
              <p className="text-sm text-gray-400 mb-4">
                이메일/전화 문의 후 Google Meet 일정 조율 가능
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:leejinkyu0612@naver.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">이메일 문의</span>
                      <span className="text-xs text-gray-400">leejinkyu0612@naver.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:01099732113"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">전화 상담</span>
                      <span className="text-xs text-gray-400">010-9973-2113</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.naver.com/happynlp0612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-2">
                      해피AI 블로그
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@HappyAI_0612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-2">
                      해피AI Official
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://kmong.com/gig/345782"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-orange-700 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-2">
                      서비스 후기 보기
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">7년 경력</h5>
              <p className="text-gray-400 text-sm">300건 이상 프로젝트 수행 경험</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">고품질 보장</h5>
              <p className="text-gray-400 text-sm">만족하지 않으면 비용을 청구하지 않겠습니다</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">전문가 컨소시엄 팀</h5>
              <p className="text-gray-400 text-sm">연구지원 + 역량 강화</p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              공공기관, 연구기관, 대학, 기업을 대상으로 한 전문 데이터 분석 및 연구지원 서비스입니다.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              검증된 전문가 컨소시엄 팀이 기관의 빅데이터 분석과 함께 실무 교육 및 역량 강화를 지원합니다.
            </p>

            {/* Service Notice */}
            <div className="max-w-2xl mx-auto mb-6 bg-white/10 border border-white/20 rounded-lg p-4">
              <p className="text-xs text-gray-300">
                <span className="font-semibold text-white">※ 서비스 안내:</span> 본 서비스는 개인 논문 컨설팅, 논문 대필 서비스와 무관한 기관 대상 데이터 분석 서비스입니다.
              </p>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 해피AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

      {/* Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 py-4 shadow-2xl z-40 border-t-2 border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-0.5">지금 바로 시작하세요</h4>
              <p className="text-xs opacity-90">Google Meet 무료 상담을 바로 예약하세요</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3PgNY-n-AQ1BKdNnDRqOxd3NOcpY4Uy9ADRMV-X6c_rdscaRcSj0meSls4n89Hpb1HuK4yynWd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                상담 예약하기
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2.5 bg-white/90 text-gray-700 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                이메일 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
