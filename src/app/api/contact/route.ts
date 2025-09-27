import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resendのデフォルトドメイン
      to: [process.env.CONTACT_EMAIL!],
      subject: `LAIVサイトからのお問い合わせ - ${name}様`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">LAIVサイトからお問い合わせがありました</h2>

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
            このメールは LAIVコーポレートサイト のお問い合わせフォームから送信されました。<br>
            返信先: ${email}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メールの送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'お問い合わせありがとうございます。確認次第ご連絡いたします。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}