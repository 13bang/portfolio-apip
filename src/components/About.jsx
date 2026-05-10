import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const approaches = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Problem Solver',
    desc: 'Selalu mencari solusi terbaik untuk setiap tantangan teknis yang dihadapi.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Terstruktur & Rapi',
    desc: 'Berusaha menulis baris kode yang rapi dan terorganisir agar mudah dibaca oleh rekan satu tim.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Team Player',
    desc: 'Kolaboratif, komunikatif, dan siap bekerja dalam tim lintas divisi.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Fast Learner',
    desc: 'Cepat beradaptasi dengan teknologi baru dan antusias mengikuti perkembangan industri.',
  },
]

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <section id="about" className="py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Left */}
          <div data-aos="fade-right">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Dari Baris Kode<br />Hingga Deployment</h2>
            <p className="text-[var(--text-muted)] text-[0.92rem] leading-[1.8] mb-4">
              Saya adalah siswa jurusan <strong className="text-[var(--text)] font-medium">Sistem Informasi Jaringan dan Aplikasi (SIJA)</strong> di
              SMK Negeri 2 Klaten yang menaruh minat besar pada pengembangan teknologi web.
              Melalui pengalaman magang di dua tempat berbeda, saya berkesempatan untuk ikut serta membangun
              aplikasi nyata, mulai dari sistem manajemen stok hingga marketplace.
            </p>
            <p className="text-[var(--text-muted)] text-[0.92rem] leading-[1.8] mb-4">
              Dalam proses pengembangannya, saya memiliki pengalaman praktis menggunakan <strong className="text-[var(--text)] font-medium">React JS (Vite), NestJS, dan PHP</strong>.
              Selain itu, saya juga pernah mempraktikkan tahap deployment menggunakan <strong className="text-[var(--text)] font-medium">Docker, PM2</strong>, serta <strong className="text-[var(--text)] font-medium">Cloudflare Tunnel</strong>.
              Saya sangat antusias untuk terus belajar dan mengeksplorasi hal-hal baru.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-7 max-[480px]:grid-cols-1">
              {[
                { label: 'Lokasi', value: 'Klaten, Jawa Tengah' },
                { label: 'Institusi', value: 'SMK Negeri 2 Klaten' },
                { label: 'Program', value: 'SIJA (2022–2026)' },
                { label: 'Email', value: 'afif.putra224@gmail.com' },
                { label: 'Phone', value: '+62 895-3757-06990' },
                {
                  label: 'Status',
                  value: (
                    <span className="flex items-center gap-[0.4rem] text-[var(--green)]">
                      <span className="status-dot" />
                      Available
                    </span>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={100 * (i + 1)}
                  className="flex flex-col gap-[0.15rem] p-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-2)]"
                >
                  <span className="text-[0.68rem] uppercase tracking-[0.1em] text-[var(--text-dim)]">{item.label}</span>
                  <span className="text-[0.82rem] text-[var(--text)] font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - approach cards */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {approaches.map((a, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={200 * (i + 1)}
                  className="approach-card p-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-[250ms] hover:border-[var(--border-hover)] hover:bg-[var(--bg-3)] hover:-translate-y-0.5"
                >
                  <div className="w-9 h-9 rounded-[var(--radius)] bg-[var(--accent-glow)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center text-[var(--accent)] mb-[0.85rem]">
                    {a.icon}
                  </div>
                  <h4 className="font-display text-[0.9rem] font-semibold text-[var(--text)] mb-[0.4rem]">{a.title}</h4>
                  <p className="text-[0.78rem] text-[var(--text-muted)] leading-[1.6]">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}