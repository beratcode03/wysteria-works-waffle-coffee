import { useState, FormEvent } from 'react';

import { Mail, Phone, Clock, MapPin, Instagram, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

import { siteConfig } from '@/data/site';

import { useLanguage } from '@/i18n/useLanguage';

import PageHeader from '@/components/PageHeader';

import MapFallback from '@/components/MapFallback';

import Reveal from '@/components/Reveal';

import { OrnamentalRule, Eyebrow } from '@/components/SectionHeading';

type FormData = {

  name: string;

  email: string;

  subject: string;

  message: string;

};

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });

  const [errors, setErrors] = useState<Errors>({});

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { t } = useLanguage();

  const validate = (): boolean => {

    const e: Errors = {};

    if (!form.name.trim()) e.name = t.contact.errName;

    if (!form.email.trim()) e.email = t.contact.errEmail;

    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.contact.errEmailValid;

    if (!form.subject.trim()) e.subject = t.contact.errSubject;

    if (!form.message.trim()) e.message = t.contact.errMessage;

    else if (form.message.trim().length < 10) e.message = t.contact.errMessageMin;

    setErrors(e);

    return Object.keys(e).length === 0;

  };

  const handleSubmit = (ev: FormEvent) => {

    ev.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setSubmitted(true);

    }, 1200);

  };

  const handleChange = (field: keyof FormData, value: string) => {

    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));

  };

  const inputClass = (hasError?: string) =>

    `w-full rounded-xl border bg-ivory px-4 py-3 text-espresso placeholder:text-mauve/60 focus:outline-none focus:ring-2 focus:ring-brass/40 transition-all ${

      hasError ? 'border-red-400' : 'border-ivory-300'

    }`;

  return (

    <>

      <PageHeader

        eyebrow={t.contact.headerEyebrow}

        title={t.contact.headerTitle}

        subtitle={t.contact.headerSubtitle}

        crumb={t.contact.crumb}

      />

      <section className="bg-ivory px-6 py-24 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            {}

            <Reveal className="lg:col-span-5">

              <Eyebrow>{t.contact.infoEyebrow}</Eyebrow>

              <h2 className="mt-4 text-3xl font-light leading-tight text-espresso sm:text-4xl lg:text-5xl">

                {t.contact.infoTitle}

              </h2>

              <OrnamentalRule className="mt-6" />

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <MapPin className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                  <div>

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.contact.address}</p>

                    <p className="mt-1 text-base leading-relaxed text-espresso/70">{siteConfig.address}</p>

                    <a href={siteConfig.directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm text-brass-dark hover:text-plum">

                      {t.contact.directions} <ArrowRight size={14} />

                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Phone className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                  <div>

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.contact.phone}</p>

                    <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-base text-espresso/70 transition-colors hover:text-brass-dark">{siteConfig.phoneDisplay}</a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Mail className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                  <div>

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.contact.email}</p>

                    <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-base text-espresso/70 transition-colors hover:text-brass-dark">{siteConfig.email}</a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Clock className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                  <div>

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">{t.contact.hours}</p>

                    <div className="mt-1 space-y-1">

                      {siteConfig.hours.map((h, i) => (

                        <div key={h.day} className="flex justify-between gap-8 text-base text-espresso/70">

                          <span>{t.visit.days[i] ?? h.day}</span>

                          <span className="text-brass-dark">{h.time}</span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

                <div className="flex gap-4">

                  <Instagram className="mt-1 flex-shrink-0 text-brass-dark" size={20} />

                  <div>

                    <p className="text-sm font-medium uppercase tracking-wide-2 text-plum-200">Instagram</p>

                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-base text-espresso/70 transition-colors hover:text-brass-dark">{siteConfig.instagram}</a>

                  </div>

                </div>

              </div>

            </Reveal>

            {}

            <Reveal delay={1} className="lg:col-span-6 lg:col-start-7">

              <div className="rounded-2xl bg-ivory-200/70 p-6 sm:p-8 lg:p-10">

                {submitted ? (

                  <div className="flex flex-col items-center justify-center py-16 text-center">

                    <CheckCircle className="text-brass-dark" size={48} />

                    <h3 className="mt-4 text-2xl font-light text-espresso">{t.contact.thanks}</h3>

                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/60">

                      {t.contact.thanksCopy}

                    </p>

                    <button

                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}

                      className="mt-6 rounded-full border border-plum/30 px-6 py-3 text-sm font-medium text-plum transition-all hover:bg-plum hover:text-ivory"

                    >

                      {t.contact.newMessage}

                    </button>

                  </div>

                ) : (

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">

                    <div>

                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-espresso">

                        {t.contact.nameLabel} <span className="text-brass-dark">*</span>

                      </label>

                      <input id="name" type="text" autoComplete="name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass(errors.name)} placeholder={t.contact.namePh} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />

                      {errors.name && <p id="name-error" className="mt-1 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14} /> {errors.name}</p>}

                    </div>

                    <div>

                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-espresso">

                        {t.contact.emailLabel} <span className="text-brass-dark">*</span>

                      </label>

                      <input id="email" type="email" autoComplete="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass(errors.email)} placeholder={t.contact.emailPh} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />

                      {errors.email && <p id="email-error" className="mt-1 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14} /> {errors.email}</p>}

                    </div>

                    <div>

                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-espresso">

                        {t.contact.subjectLabel} <span className="text-brass-dark">*</span>

                      </label>

                      <input id="subject" type="text" value={form.subject} onChange={(e) => handleChange('subject', e.target.value)} className={inputClass(errors.subject)} placeholder={t.contact.subjectPh} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} />

                      {errors.subject && <p id="subject-error" className="mt-1 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14} /> {errors.subject}</p>}

                    </div>

                    <div>

                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-espresso">

                        {t.contact.messageLabel} <span className="text-brass-dark">*</span>

                      </label>

                      <textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className={`${inputClass(errors.message)} resize-none`} placeholder={t.contact.messagePh} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />

                      {errors.message && <p id="message-error" className="mt-1 flex items-center gap-1 text-sm text-red-600"><AlertCircle size={14} /> {errors.message}</p>}

                    </div>

                    <button

                      type="submit"

                      disabled={loading}

                      className="sheen group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:bg-plum-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"

                    >

                      {loading ? (

                        <>

                          <Loader2 size={15} className="animate-spin" />

                          {t.contact.sending}

                        </>

                      ) : (

                        <>

                          {t.contact.send}

                          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />

                        </>

                      )}

                    </button>

                  </form>

                )}

              </div>

            </Reveal>

          </div>

          {}

          <Reveal className="mt-20">

            <MapFallback />

          </Reveal>

        </div>

      </section>

    </>

  );

}
