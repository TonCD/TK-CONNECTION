import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  // Send to admin
  await resend.emails.send({
    from: 'TK Connection <onboarding@resend.dev>',
    to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@tkconnection.vn',
    subject: `Yêu cầu tư vấn mới từ ${data.name}`,
    html: `
      <h2>Yêu cầu tư vấn mới</h2>
      <p><strong>Họ tên:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Điện thoại:</strong> ${data.phone}</p>
      <p><strong>Dịch vụ quan tâm:</strong> ${data.service}</p>
      ${data.budget ? `<p><strong>Ngân sách:</strong> ${data.budget}</p>` : ''}
      <p><strong>Tin nhắn:</strong></p>
      <p>${data.message}</p>
    `,
  });

  // Auto-reply to customer
  await resend.emails.send({
    from: 'TK Connection <onboarding@resend.dev>',
    to: data.email,
    subject: 'Cảm ơn bạn đã liên hệ TK Connection',
    html: `
      <h2>Xin chào ${data.name},</h2>
      <p>Cảm ơn bạn đã quan tâm đến dịch vụ của TK Connection.</p>
      <p>Chúng tôi đã nhận được yêu cầu tư vấn của bạn và sẽ liên hệ lại trong vòng 24 giờ.</p>
      <p>Trân trọng,<br/>Đội ngũ TK Connection</p>
    `,
  });
}
