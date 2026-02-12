import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components';
import * as React from 'react';

interface CustomerReplyEmailProps {
  name: string;
  brand: string;
}

export default function CustomerReplyEmail({
  name,
  brand,
}: CustomerReplyEmailProps) {
  const previewText = `Cảm ơn ${brand} đã liên hệ TK Connection`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Heading style={h1}>TK Connection</Heading>
            <Text style={headerTagline}>
              Đối tác dịch vụ được TikTok Shop chứng nhận chính thức
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={section}>
            <Heading style={h2}>Xin chào {name},</Heading>
            
            <Text style={text}>
              Cảm ơn <strong>{brand}</strong> đã quan tâm đến dịch vụ của TK Connection!
            </Text>
            
            <Text style={text}>
              Chúng tôi đã nhận được yêu cầu tư vấn của bạn và sẽ phản hồi trong vòng <strong>1-2 ngày làm việc</strong>.
            </Text>
            
            <Text style={text}>
              Đội ngũ chuyên gia của chúng tôi sẽ liên hệ trực tiếp để tư vấn giải pháp phù hợp nhất cho thương hiệu của bạn.
            </Text>
          </Section>

          {/* Info Box */}
          <Section style={infoBox}>
            <Text style={infoTitle}>🚀 Trong thời gian chờ đợi</Text>
            <Text style={infoText}>
              Bạn có thể tìm hiểu thêm về các dịch vụ và case studies thành công của chúng tôi:
            </Text>
            <Button style={button} href="https://tkconnection.vn">
              Khám phá TK Connection
            </Button>
          </Section>

          {/* Contact Info */}
          <Section style={section}>
            <Heading style={h3}>📞 Liên hệ trực tiếp</Heading>
            <Text style={contactText}>
              <strong>Văn phòng Việt Nam</strong><br />
              📍 24 Đường PNĐT 2, An Phú, Thủ Đức, TP.HCM<br />
              📧 vietnam@tkconnection.vn<br />
              📱 +84 28 xxxx xxxx<br />
              💬 WeChat ID: tkconnection_vn
            </Text>
          </Section>

          {/* Why Choose Us */}
          <Section style={section}>
            <Heading style={h3}>✨ Tại sao chọn TK Connection?</Heading>
            
            <Text style={featureItem}>
              ✓ <strong>Chứng nhận chính thức</strong> - TAP/TSP từ TikTok Shop
            </Text>
            <Text style={featureItem}>
              ✓ <strong>Hệ sinh thái toàn chuỗi</strong> - Từ tư vấn đến vận hành
            </Text>
            <Text style={featureItem}>
              ✓ <strong>Đội ngũ bản địa</strong> - Am hiểu thị trường Việt Nam
            </Text>
            <Text style={featureItem}>
              ✓ <strong>300-500+ KOL/KOC</strong> - Nguồn lực mỗi tháng
            </Text>
            <Text style={featureItem}>
              ✓ <strong>40+ thương hiệu</strong> - Đối tác tin cậy
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={divider} />
          <Section style={footer}>
            <Text style={footerText}>
              <strong>TK Connection Vietnam</strong><br />
              Đơn vị vận hành tích hợp toàn chuỗi thương mại điện tử
            </Text>
            <Text style={socialLinks}>
              <a href="#" style={socialLink}>TikTok</a>  •  
              <a href="#" style={socialLink}>Facebook</a>  •  
              <a href="#" style={socialLink}>Instagram</a>
            </Text>
            <Text style={footerNote}>
              Email này được gửi tự động từ hệ thống TK Connection.<br />
              Vui lòng không trả lời trực tiếp email này.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '20px auto',
  marginBottom: '64px',
  maxWidth: '600px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  padding: '40px 40px 32px',
  background: 'linear-gradient(135deg, #54bbff 0%, #4a9ee0 100%)',
  borderRadius: '8px 8px 0 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  padding: '0',
  lineHeight: '1.2',
  letterSpacing: '-0.5px',
};

const headerTagline = {
  color: '#ffffff',
  fontSize: '13px',
  margin: '0',
  opacity: 0.95,
  fontWeight: '400',
};

const section = {
  padding: '24px 40px',
};

const h2 = {
  color: '#0a0a0a',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  lineHeight: '1.3',
};

const h3 = {
  color: '#0a0a0a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px',
};

const text = {
  color: '#374151',
  fontSize: '15px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const infoBox = {
  backgroundColor: '#f0f9ff',
  border: '2px solid #54bbff',
  borderRadius: '8px',
  padding: '24px',
  textAlign: 'center' as const,
};

const infoTitle = {
  color: '#0a0a0a',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 8px',
};

const infoText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0 0 16px',
};

const button = {
  backgroundColor: '#54bbff',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
  cursor: 'pointer',
};

const contactText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.7',
  margin: '8px 0',
};

const featureItem = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.8',
  margin: '6px 0',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '32px 40px',
};

const footer = {
  padding: '0 40px 32px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7280',
  fontSize: '13px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const socialLinks = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0 0 12px',
};

const socialLink = {
  color: '#54bbff',
  textDecoration: 'none',
  padding: '0 8px',
};

const footerNote = {
  color: '#9ca3af',
  fontSize: '11px',
  lineHeight: '1.5',
  margin: '0',
};
