import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateMessageContent, isSpamName, isSpamCompany } from '../../../../utils/spamValidation';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const serviceNames: { [key: string]: string } = {
  'furusona': 'ふるそな',
  'weekend-president': 'Weekend President',
  'ai-kurabe': 'AIくらべ'
};

export async function POST(request: NextRequest) {
  try {
    const { service, name, email, company, message } = await request.json();

    // バリデーション
    if (!service || !name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // スパムバリデーション
    const messageError = validateMessageContent(message);
    if (messageError) {
      return NextResponse.json(
        { error: messageError },
        { status: 400 }
      );
    }

    if (isSpamName(name)) {
      return NextResponse.json(
        { error: '入力内容をご確認ください' },
        { status: 400 }
      );
    }

    if (company && isSpamCompany(company)) {
      return NextResponse.json(
        { error: '入力内容をご確認ください' },
        { status: 400 }
      );
    }

    const serviceName = serviceNames[service] || service;

    // メール送信
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `【${serviceName}】サービスお問い合わせ - ${name}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">【${serviceName}】サービスへのお問い合わせがありました</h2>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin: 0 0 15px 0;">お問い合わせサービス</h3>
            <p style="font-size: 18px; font-weight: bold; color: #1e40af;">${serviceName}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin: 0 0 15px 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            ${company ? `<p><strong>会社名・組織名:</strong> ${company}</p>` : ''}
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin: 0 0 15px 0;">お問い合わせ内容</h3>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

          <p style="color: #666; font-size: 12px;">
            このメールは LAIVコーポレートサイト のサービスお問い合わせフォームから送信されました。
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'お問い合わせありがとうございます。確認次第ご連絡いたします。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    );
  }
}
