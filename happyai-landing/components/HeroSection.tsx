'use client'

import { ArrowRight, Sparkles, Award, Users } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <a
            href="https://kmong.com/gig/345782"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">
              크몽 Prime 인증 서비스
            </span>
          </a>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="block text-gray-900 mb-2">AI 기반 빅데이터 분석의</span>
            <span className="block gradient-text">새로운 기준, 해피AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            <span className="font-bold text-purple-600">공공기관 · 연구기관 · 대학 · 기업</span>을 위한
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-400">
            AI LLM 기반 전문 빅데이터 분석 및 연구지원 서비스
          </p>

          {/* Special Offer Box */}
          <div className="mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-500">
            <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6 shadow-lg">
              <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
                🎁 지금 무료 상담을 예약하시면<br />
                <span className="text-orange-600">기관 데이터로 간단한 샘플 분석 리포트 + 1시간 컨설팅</span>을 제공합니다.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-600">
            {/* Primary Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3PgNY-n-AQ1BKdNnDRqOxd3NOcpY4Uy9ADRMV-X6c_rdscaRcSj0meSls4n89Hpb1HuK4yynWd"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Google Meet 무료 상담 예약
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                이메일 문의
              </button>
            </div>

            {/* Services Link */}
            <a
              href="#services"
              className="px-8 py-3 bg-white/80 text-gray-800 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-300"
            >
              서비스 둘러보기
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-800">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">7년</div>
              <div className="text-sm text-gray-600">빅데이터 분석 경력</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">300+</div>
              <div className="text-sm text-gray-600">프로젝트 수행</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">고객 만족도</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-md">
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-700 block mb-2">✓ 기관 전용 서비스</span>
                  공공기관 · 연구기관 · 대학 · 기업 대상 전문 데이터 분석 및 연구지원 서비스
                  <br />
                  <span className="text-xs text-gray-600">검증된 전문가 컨소시엄 팀 운영</span>
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">※ 서비스 안내</span>
                    <br />
                    개인 논문 컨설팅 · 논문 대필 서비스와 무관함
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">법적 고지 (변호사 자문 완료)</span>
                    <br />
                    허위사실 유포 · 비방 · 명예훼손 등은 법적 책임 대상
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
    </>
  )
}
