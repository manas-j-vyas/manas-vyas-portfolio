import { Resend } from 'resend';

const limits = { name: 100, mobile: 30, email: 254, subject: 200, message: 5000, company: 200 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const indianMobilePattern = /^(?:\+91|0)?[6-9]\d{9}$/;

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function textValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validate(payload) {
  const fields = {
    name: textValue(payload.name),
    mobile: textValue(payload.mobile),
    email: textValue(payload.email),
    subject: textValue(payload.subject),
    message: textValue(payload.message),
    company: textValue(payload.company),
  };
  const errors = {};
  if (!fields.name || fields.name.length < 2) errors.name = 'Please enter your name.';
  if (fields.name.length > limits.name) errors.name = 'Please enter a shorter name.';
  if (!fields.mobile || !indianMobilePattern.test(fields.mobile.replace(/[\s-]/g, ''))) errors.mobile = 'Please enter a valid mobile number.';
  if (fields.mobile.length > limits.mobile) errors.mobile = 'Please enter a shorter mobile number.';
  if (!fields.email || !emailPattern.test(fields.email)) errors.email = 'Please enter a valid email address.';
  if (fields.email.length > limits.email) errors.email = 'Please enter a shorter email address.';
  if (!fields.subject) errors.subject = 'Please enter a subject.';
  if (fields.subject.length > limits.subject) errors.subject = 'Please enter a shorter subject.';
  if (!fields.message || fields.message.length < 10) errors.message = 'Please tell me how I can help you.';
  if (fields.message.length > limits.message) errors.message = 'Please keep your message under 5000 characters.';
  if (fields.company.length > limits.company) errors.company = 'Please enter a shorter company name.';
  return { fields, errors };
}

function renderRows(fields, submitted) {
  const row = (label, value) => `<tr><td style="padding:12px 0;color:#667085;width:150px;vertical-align:top"><strong>${label}</strong></td><td style="padding:12px 0;color:#101828;white-space:pre-wrap">${value || 'Not provided'}</td></tr>`;
  return `${row('Name', escapeHtml(fields.name))}${row('Mobile', escapeHtml(fields.mobile))}${row('Email', escapeHtml(fields.email))}${row('Subject', escapeHtml(fields.subject))}${fields.company ? row('Company', escapeHtml(fields.company)) : ''}${row('Message', escapeHtml(fields.message))}${row('Submitted', escapeHtml(submitted))}`;
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ success: false, message: 'Method not allowed.' });
  let payload;
  try {
    payload = typeof request.body === 'string' ? JSON.parse(request.body) : request.body || {};
  } catch {
    return response.status(400).json({ success: false, message: 'Please check the form fields.' });
  }
  if (textValue(payload.website)) return response.status(400).json({ success: false, message: 'Please check the form fields.' });

  const { fields, errors } = validate(payload);
  if (Object.keys(errors).length) return response.status(400).json({ success: false, message: 'Please check the form fields.', errors });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) return response.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });

  const submitted = new Intl.DateTimeFormat('en-IN', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date());
  const html = `<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#101828"><div style="background:#111317;padding:28px 30px;color:#f3f1eb"><h1 style="margin:0;font-size:24px">New Portfolio Contact Request</h1><p style="margin:8px 0 0;color:#ff9a87">Manas Vyas · WordPress Developer</p></div><div style="padding:20px 30px"><table style="width:100%;border-collapse:collapse">${renderRows(fields, submitted)}</table></div></div>`;
  const text = ['New Portfolio Contact Request', '', `Name: ${fields.name}`, `Mobile: ${fields.mobile}`, `Email: ${fields.email}`, `Subject: ${fields.subject}`, fields.company ? `Company: ${fields.company}` : '', `Message: ${fields.message}`, `Submitted: ${submitted}`].filter(Boolean).join('\n');

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: fields.email,
      subject: `New Portfolio Enquiry from ${fields.name}`,
      html,
      text,
    });
    return response.status(200).json({ success: true, message: 'Your message has been sent successfully.' });
  } catch {
    return response.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
  }
}
