import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const contactInfo = [
  {
    label: 'Email',
    value: 'afif.putra224@gmail.com',
    href: 'mailto:afif.putra224@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone / WhatsApp',
    value: '+62 895-3757-06990',
    href: 'https://wa.me/62895375706990',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Kalikotes, Klaten, Jawa Tengah, Indonesia',
    href: 'https://maps.google.com/?q=Kalikotes,Klaten',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Muhammad Afif Saifuddin',
    href: 'https://www.linkedin.com/in/muhammad-afif-saifuddin-4a5259346/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <section id="contact" className="py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Left */}
          <div>
            <div data-aos="fade-up">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Mari Berkolaborasi</h2>
              <p className="text-[var(--text-muted)] text-[0.92rem] leading-[1.75] mb-8">
                Saya terbuka untuk peluang kerja, proyek freelance, atau sekadar berdiskusi tentang
                teknologi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="flex flex-col gap-[0.6rem]">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  data-aos="fade-up"
                  data-aos-delay={100 * i}
                  className="flex items-center gap-4 px-5 py-4 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-[250ms] no-underline hover:border-[var(--border-hover)] hover:bg-[var(--bg-3)] hover:translate-x-1 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-[var(--radius)] bg-[var(--accent-glow)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
                    <span className="text-[0.68rem] uppercase tracking-[0.08em] text-[var(--text-dim)]">{info.label}</span>
                    <span className="text-[0.82rem] text-[var(--text)] font-medium truncate">{info.value}</span>
                  </div>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="text-[var(--text-dim)] opacity-40 flex-shrink-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div
              className="p-8 rounded-[var(--radius)] border border-[rgba(79,142,247,0.2)] bg-gradient-to-br from-[var(--bg-card)] to-[rgba(79,142,247,0.03)] relative overflow-hidden flex flex-col gap-4"
            >
              {/* Glow */}
              <div
                className="absolute -top-[50px] -right-[50px] w-[180px] h-[180px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)' }}
              />

              <h3 className="font-display text-[1.25rem] font-bold text-[var(--text)] relative">Download CV Saya</h3>
              <p className="text-[0.82rem] text-[var(--text-muted)] leading-[1.7] relative">
                Dapatkan informasi lengkap tentang pengalaman, pendidikan, dan kemampuan saya
                dalam format PDF yang siap dibaca.
              </p>

              <a href="/CV_Muhammad_Afif_Saifuddin.pdf" download className="btn-primary w-full justify-center relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV (PDF)
              </a>

              <div className="cta-divider">atau</div>

              <a href="mailto:afif.putra224@gmail.com" className="btn-outline w-full justify-center relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Kirim Email
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}