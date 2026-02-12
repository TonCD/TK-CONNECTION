import { Resend } from 'resend';
import { type NextRequest, NextResponse } from 'next/server';
import AdminNotificationEmail from '@/emails/AdminNotificationEmail';
import CustomerReplyEmail from '@/emails/CustomerReplyEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, brand, industry, services, budget, message } = body;

    // Validate required fields
    if (!name || !email || !brand || !industry || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email addresses
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(e => e.trim()) || ['vietnam@tkconnection.vn'];
    const replyToEmail = process.env.REPLY_TO_EMAIL || 'vietnam@tkconnection.vn';

    // Send email to admin(s)
    const adminEmailPromise = resend.emails.send({
      from: fromEmail,
      to: adminEmails,
      reply_to: email, // Khách hàng có thể reply trực tiếp
      subject: `🔔 Yêu cầu tư vấn mới từ ${brand}`,
      react: AdminNotificationEmail({
        name,
        email,
        phone,
        brand,
        industry,
        services: services || [],
        budget,
        message,
      }),
    });

    // Send auto-reply to customer
    const customerEmailPromise = resend.emails.send({
      from: fromEmail,
      to: email,
      reply_to: replyToEmail,
      subject: 'Cảm ơn bạn đã liên hệ TK Connection',
      react: CustomerReplyEmail({
        name,
        brand,
      }),
    });

    // Send both emails in parallel
    const [adminResult, customerResult] = await Promise.all([
      adminEmailPromise,
      customerEmailPromise,
    ]);

    return NextResponse.json({
      success: true,
      adminEmailId: adminResult.data?.id,
      customerEmailId: customerResult.data?.id,
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
