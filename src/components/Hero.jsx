import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-afif-saifuddin-4a5259346/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/13bang',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:afif.putra224@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Grid BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)',
        }}
      />
      {/* Gradient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '-10%',
          width: '50%', height: '70%',
          background: 'radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container grid grid-cols-[1fr_auto] gap-16 items-center pt-8 max-[900px]:grid-cols-1">
        {/* Content */}
        <div className="max-w-[620px]">
          {/* Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="inline-flex items-center gap-2 px-[0.9rem] py-[0.35rem] rounded-[var(--radius)] border border-[rgba(62,207,142,0.25)] bg-[rgba(62,207,142,0.06)] text-[0.75rem] text-[var(--green)] tracking-[0.04em] mb-6"
          >
            <span className="badge-dot" />
            Available for opportunities
          </div>

          {/* Title */}
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="font-display font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 flex flex-col"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            <span className="text-[var(--text-muted)] text-[0.45em] font-normal tracking-[0.05em] uppercase mb-[0.3rem]">
              Muhammad Afif Saifuddin
            </span>
            <span className="text-[var(--text)]">Full Stack</span>
            <span className="text-[var(--accent)]">Web Developer</span>
          </h1>

          {/* Desc */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[var(--text-muted)] text-[0.95rem] leading-[1.75] mb-8"
          >
            Siswa SIJA SMK Negeri 2 Klaten dengan pengalaman praktis membangun website
            menggunakan <strong className="text-[var(--text)] font-medium">PHP, JavaScript, React JS</strong>, dan{' '}
            <strong className="text-[var(--text)] font-medium">NestJS</strong>.
            Memiliki ketertarikan besar pada pengembangan frontend, backend, hingga deployment infrastruktur.
          </p>

          {/* Actions */}
          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="flex items-center gap-3 mb-8 flex-wrap"
          >
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
              View Projects
            </a>
            <a href="/CV_Muhammad_Afif_Saifuddin.pdf" download className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex items-center gap-2"
          >
            {socials.map((s, index) => (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[0.4rem] px-[0.85rem] py-[0.45rem] rounded-[var(--radius)] border border-[var(--border)] text-[var(--text-muted)] text-[0.78rem] transition-all duration-200 bg-[var(--bg-2)] hover:border-[var(--border-hover)] hover:text-[var(--text)] hover:bg-[var(--bg-3)] hover:-translate-y-px"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div 
          className="relative max-[900px]:hidden"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="relative w-[300px]">
            <div className="photo-ring" />
            <div
              className="w-[260px] h-[300px] rounded-[var(--radius)] overflow-hidden border border-[var(--border)] bg-[var(--bg-3)] relative mx-auto mt-4"
            >
              <img 
                src="/pas-foto-apip.svg" 
                alt="Muhammad Afif Saifuddin" 
                className="w-full h-full object-cover object-top block" 
              />
            </div>

            {/* Badge 1 */}
            <div
              className="float-anim absolute top-6 -right-5 flex items-center gap-[0.35rem] px-[0.85rem] py-[0.4rem] rounded-[var(--radius)] border border-[rgba(62,207,142,0.2)] bg-[rgba(10,10,10,0.9)] backdrop-blur-[10px] text-[0.72rem] text-[var(--green)] whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              React & NestJS
            </div>

            {/* Badge 2 */}
            <div
              className="float-anim-delay absolute bottom-6 -left-5 flex items-center gap-[0.35rem] px-[0.85rem] py-[0.4rem] rounded-[var(--radius)] border border-[rgba(79,142,247,0.2)] bg-[rgba(10,10,10,0.9)] backdrop-blur-[10px] text-[0.72rem] text-[var(--accent)] whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              System Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}