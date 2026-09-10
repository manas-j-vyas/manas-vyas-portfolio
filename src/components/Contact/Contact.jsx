import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal.jsx';
import './Contact.css';

const initialForm = { name: '', mobile: '', email: '', subject: '', message: '', company: '', website: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const mobilePattern = /^(?:\+91[6-9]\d{9}|[6-9]\d{9})$/;

function filterMobileInput(value) {
  const filtered = value.replace(/[^\d+]/g, '');
  if (filtered.startsWith('+')) return `+${filtered.slice(1).replace(/\+/g, '')}`.slice(0, 13);
  return filtered.replace(/\+/g, '').slice(0, 10);
}

function validateForm(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!mobilePattern.test(values.mobile)) errors.mobile = 'Please enter a valid 10-digit mobile number.';
  if (!emailPattern.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please tell me how I can help you.';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [validationErrors, setValidationErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    const nextValue = name === 'mobile' ? filterMobileInput(value) : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    setValidationErrors((current) => ({ ...current, [name]: '' }));
    setStatus({ type: '', message: '' });
  };

  const blurField = (name) => {
    if (name !== 'email' && name !== 'mobile') return;
    const fieldErrors = validateForm({ ...form, [name]: form[name] });
    setValidationErrors((current) => ({ ...current, [name]: fieldErrors[name] || '' }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length) {
      setValidationErrors(errors);
      setStatus({ type: 'error', message: 'Please check the highlighted fields.' });
      return;
    }
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      setForm(initialForm);
      setValidationErrors({});
      setStatus({ type: 'success', message: "Thanks for reaching out! Your message has been sent successfully. I'll get back to you soon." });
    } catch {
      setStatus({ type: 'error', message: 'Unable to send your message right now. Please try again or contact me directly by email.' });
    } finally {
      setLoading(false);
    }
  };

  const fieldProps = (name) => ({
    name,
    value: form[name],
    onChange: update,
    onBlur: () => blurField(name),
    'aria-invalid': Boolean(validationErrors[name]),
    'aria-describedby': validationErrors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell section-block">
        <div className="section-kicker"><span>08</span><p>Get in touch</p></div>
        <div className="contact-heading">
          <ScrollReveal><h2>Let's Build Something <em>Together.</em></h2><p>Have a project in mind or need help with your WordPress website? Feel free to get in touch.</p></ScrollReveal>
        </div>
        <div className="contact-grid">
          <ScrollReveal>
            <div className="contact-info">
              <a href="mailto:manavvyas0205@gmail.com"><Mail size={17} /> manavvyas0205@gmail.com</a>
              <a href="tel:+919484646252"><Phone size={17} /> +91 9484646252</a>
              <span><MapPin size={17} /> Nallasopara, Mumbai, Maharashtra, India</span>
              <div className="availability-note"><i /> Currently open to new projects</div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={140}>
            <form className="contact-form" onSubmit={submit} noValidate aria-describedby="contact-form-note">
              <div className="form-row">
                <label htmlFor="contact-name">Name
                  <input id="contact-name" type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                  {validationErrors.name && <span id="name-error" className="field-error">{validationErrors.name}</span>}
                </label>
                <label htmlFor="contact-mobile">Mobile Number
                  <input id="contact-mobile" type="tel" inputMode="numeric" maxLength={13} autoComplete="tel" placeholder="9876543210 or +919876543210" {...fieldProps('mobile')} />
                  {validationErrors.mobile && <span id="mobile-error" className="field-error">{validationErrors.mobile}</span>}
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="contact-email">Email
                  <input id="contact-email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" {...fieldProps('email')} />
                  {validationErrors.email && <span id="email-error" className="field-error">{validationErrors.email}</span>}
                </label>
                <label htmlFor="contact-company">Company / Business <span className="optional">(optional)</span>
                  <input id="contact-company" type="text" autoComplete="organization" placeholder="Your business name" {...fieldProps('company')} />
                  {validationErrors.company && <span id="company-error" className="field-error">{validationErrors.company}</span>}
                </label>
              </div>
              <label htmlFor="contact-subject">Subject
                <input id="contact-subject" type="text" placeholder="What can I help with?" {...fieldProps('subject')} />
                {validationErrors.subject && <span id="subject-error" className="field-error">{validationErrors.subject}</span>}
              </label>
              <label htmlFor="contact-message">Message
                <textarea id="contact-message" rows="5" placeholder="Tell me a little about your project..." {...fieldProps('message')} />
                {validationErrors.message && <span id="message-error" className="field-error">{validationErrors.message}</span>}
              </label>
              <label className="honeypot" aria-hidden="true">Website
                <input tabIndex="-1" autoComplete="off" {...fieldProps('website')} />
              </label>
              {status.message && <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.message}</p>}
              <button className="button button-primary" type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'} <ArrowUpRight size={17} /></button>
              <small id="contact-form-note">Your message is sent securely. This form does not store enquiries in the browser.</small>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
