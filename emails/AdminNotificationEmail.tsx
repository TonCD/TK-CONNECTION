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
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  brand: string;
  industry: string;
  services: string[];
  budget?: string;
  message: string;
}

export default function AdminNotificationEmail({
  name,
  email,
  phone,
  brand,
  industry,
  services,
  budget,
  message,
}: AdminNotificationEmailProps) {
  const previewText = `Yêu cầu tư vấn mới từ ${brand} - ${industry}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>TK Connection</Heading>
            <Text style={headerSubtitle}>Thông báo yêu cầu tư vấn mới</Text>
          </Section>

          {/* Alert Box */}
          <Section style={alertBox}>
            <Text style={alertText}>
              🔔 Bạn có một yêu cầu tư vấn mới từ website
            </Text>
          </Section>

          {/* Customer Info */}
          <Section style={section}>
            <Heading style={h2}>📋 Thông tin khách hàng</Heading>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Thương hiệu:</Column>
              <Column style={infoValue}>{brand}</Column>
            </Row>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Ngành nghề:</Column>
              <Column style={infoValue}>{industry}</Column>
            </Row>
            
            <Hr style={divider} />
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Người liên hệ:</Column>
              <Column style={infoValue}>{name}</Column>
            </Row>
            
            <Row style={infoRow}>
              <Column style={infoLabel}>Email:</Column>
              <Column style={infoValue}>
                <a href={`mailto:${email}`} style={link}>{email}</a>
              </Column>
            </Row>
            
            {phone && (
              <Row style={infoRow}>
                <Column style={infoLabel}>Điện thoại:</Column>
                <Column style={infoValue}>
                  <a href={`tel:${phone}`} style={link}>{phone}</a>
                </Column>
              </Row>
            )}
          </Section>

          {/* Services & Budget */}
          <Section style={section}>
            <Heading style={h2}>💼 Nhu cầu hợp tác</Heading>
            
            {services && services.length > 0 && (
              <Row style={infoRow}>
                <Column style={infoLabel}>Dịch vụ quan tâm:</Column>
                <Column style={infoValue}>
                  {services.map((service, index) => (
                    <Text key={index} style={serviceTag}>• {service}</Text>
                  ))}
                </Column>
              </Row>
            )}
            
            {budget && (
              <Row style={infoRow}>
                <Column style={infoLabel}>Ngân sách dự kiến:</Column>
                <Column style={infoValue}>{budget}</Column>
              </Row>
            )}
          </Section>

          {/* Message */}
          <Section style={section}>
            <Heading style={h2}>💬 Nội dung tin nhắn</Heading>
            <Text style={messageBox}>{message}</Text>
          </Section>

          {/* Footer */}
          <Hr style={divider} />
          <Section style={footer}>
            <Text style={footerText}>
              <strong>TK Connection Vietnam</strong><br />
              24 Đường PNĐT 2, An Phú, Thủ Đức, TP.HCM<br />
              Email: vietnam@tkconnection.vn<br />
              Phone: +84 28 xxxx xxxx
            </Text>
            <Text style={footerNote}>
              Email này được gửi tự động từ form liên hệ trên website TK Connection.
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
};

const header = {
  padding: '32px 40px',
  backgroundColor: '#54bbff',
  borderRadius: '8px 8px 0 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  padding: '0',
  lineHeight: '1.2',
};

const headerSubtitle = {
  color: '#ffffff',
  fontSize: '14px',
  margin: '0',
  opacity: 0.9,
};

const alertBox = {
  backgroundColor: '#fff3cd',
  border: '1px solid #ffecb5',
  borderRadius: '6px',
  padding: '16px',
};

const alertText = {
  color: '#856404',
  fontSize: '14px',
  margin: '0',
  textAlign: 'center' as const,
  fontWeight: '500',
};

const section = {
  padding: '0 40px',
  margin: '24px 0',
};

const h2 = {
  color: '#0a0a0a',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const infoRow = {
  marginBottom: '12px',
};

const infoLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  width: '40%',
  verticalAlign: 'top' as const,
};

const infoValue = {
  color: '#0a0a0a',
  fontSize: '14px',
  fontWeight: '400',
  width: '60%',
};

const link = {
  color: '#54bbff',
  textDecoration: 'none',
};

const serviceTag = {
  margin: '4px 0',
  fontSize: '14px',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '16px',
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#e5e7eb',
};

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0 0 8px',
};

const footerNote = {
  color: '#9ca3af',
  fontSize: '11px',
  lineHeight: '1.4',
  margin: '0',
};
