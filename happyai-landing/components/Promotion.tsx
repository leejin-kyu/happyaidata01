'use client'

import { Gift, Calendar, CheckCircle, Video, Mail, Phone, Sparkles } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Promotion() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Left Column - Orange Background with Info */}
              <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 p-8 md:p-12 text-white">
                {/* Decorative circle */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Video className="w-8 h-8" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  화상 상담 예약
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Google Meet으로 간편하게
                </p>

                {/* Subtitle */}
                <p className="text-base mb-8 opacity-95 leading-relaxed">
                  전문가와 1:1 화상 미팅으로 프로젝트에 대해 자세히 상담받으세요.
                </p>

                {/* Checklist */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI 솔루션 도입 전략 상담</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">맞춤형 견적 및 일정 논의</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">실시간 데모 시연 가능</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30분 무료 컨설팅</span>
                  </div>
                </div>

                {/* Tip Box */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-sm">
                    <span className="font-bold">💡 Tip:</span> Google Calendar에 자동으로 추가되며, Google Meet 링크가 생성됩니다.
                  </p>
                </div>
              </div>

              {/* Right Column - White Background with Booking */}
              <div className="p-8 md:p-12 bg-gray-50 flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    지금 바로 예약하기
                  </h3>
                  <p className="text-gray-600">
                    원하는 날짜와 시간을 선택하세요
                  </p>
                </div>

                {/* Google Meet Button */}
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3PgNY-n-AQ1BKdNnDRqOxd3NOcpY4Uy9ADRMV-X6c_rdscaRcSj0meSls4n89Hpb1HuK4yynWd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Google Meet 예약하기</span>
                </a>

                {/* Available Time */}
                <p className="text-center text-sm text-gray-500 mb-8">
                  평일 09:00 - 18:00 예약 가능
                </p>

                {/* Divider */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-gray-50 text-sm font-semibold text-gray-600">
                      또는 다른 방법으로 문의하기
                    </span>
                  </div>
                </div>

                {/* Other Contact Methods */}
                <div className="space-y-3">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    <span>이메일로 문의</span>
                  </button>
                  <a
                    href="tel:01099732113"
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>전화로 문의</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                학습 자료 무료 제공
              </h3>
              <p className="text-gray-600 text-sm">
                활용법 강의 + 실시 가이드 + 분석 리포트 모두 포함
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                고품질 보장
              </h3>
              <p className="text-gray-600 text-sm">
                "고품질 결과" 제공을 위해 매달 제한된 양의 주문만 받고 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                신속한 시작
              </h3>
              <p className="text-gray-600 text-sm">
                3~7일 내 프로젝트 착수 가능
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
