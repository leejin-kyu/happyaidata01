import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, organization, message } = body

    // 이메일 내용 구성
    const emailContent = `
새로운 문의가 접수되었습니다.

성함: ${name}
이메일: ${email}
연락처: ${phone}
기관명: ${organization || '미입력'}

문의 내용:
${message}
    `

    // nodemailer 설정 (환경 변수 필요)
    // 실제 운영 환경에서는 SMTP 설정이나 이메일 서비스(SendGrid, AWS SES 등) 사용 필요

    const transporter = nodemailer.createTransport({
      service: 'gmail', // 또는 다른 이메일 서비스
      auth: {
        user: process.env.EMAIL_USER, // 발신자 이메일
        pass: process.env.EMAIL_PASSWORD, // 앱 비밀번호
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'leejinkyu0612@naver.com',
      subject: `[해피AI 문의] ${name}님의 문의`,
      text: emailContent,
      replyTo: email,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
