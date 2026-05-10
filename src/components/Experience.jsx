import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Anandam Computer',
    period: 'Nov 2025 – Mei 2026',
    type: 'Internship',
    color: 'accent',
    tasks: [
      'Merancang dan membangun website manajemen persediaan stok barang menggunakan PHP dan JavaScript, dilengkapi fitur pelaporan transaksi penjualan dan pembelian.',
      'Mengembangkan website company profile yang responsif untuk klien eksternal — supergaming.id dan mitragamacomputer.com berbasis PHP.',
      'Membangun website marketplace Anandam dengan arsitektur modern menggunakan React JS (Vite) pada frontend dan NestJS pada backend.',
      'Menjalankan infrastruktur deployment backend pada server lokal menggunakan PM2 dan Cloudflare Tunnel.',
    ],
    tags: ['React JS (Vite)', 'NestJS', 'PHP', 'JavaScript', 'PM2', 'Cloudflare Tunnel'],
  },
  {
    role: 'System Engineer Intern',
    company: 'PT Malifax Indonesia',
    period: 'Mei 2025 – Nov 2025',
    type: 'Internship',
    color: 'purple',
    tasks: [
      'Melakukan riset dan evaluasi produk open-source — mulai dari instalasi, konfigurasi sistem, hingga uji coba fungsionalitas fitur secara menyeluruh.',
      'Mengembangkan kapabilitas produk open-source melalui integrasi sistem dengan aplikasi atau layanan pihak ketiga.',
      'Menyusun dokumentasi teknis komprehensif (how-to document) mencakup panduan instalasi dan penjabaran operasional dari setiap fitur produk hasil riset.',
    ],
    tags: ['Open-Source Research', 'System Configuration', 'Technical Documentation', 'Integration'],
  },
]

const education = {
  school: 'SMK Negeri 2 Klaten',
  major: 'Sistem Informasi Jaringan dan Aplikasi (SIJA)',
  period: 'Jul 2022 – Mei 2026',
  desc: 'Program keahlian 4 tahun dengan fokus pada infrastruktur jaringan, administrasi sistem, dan pengembangan perangkat lunak.',
  highlights: ['Web Development', 'Network Infrastructure', 'System Administration', 'Software Engineering'],
}

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <section id="experience" className="py-12">
      <div className="container">

        <div className="mb-14" data-aos="fade-up">
          <p className="section-label">Career</p>
          <h2 className="section-title">Pengalaman & Pendidikan</h2>
          <p className="section-desc">
            Melalui pendidikan di SMK dan kesempatan magang di industri, saya banyak belajar mempraktikkan teori ke dalam proyek nyata, mulai dari pembuatan website hingga pengelolaan sistem.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-12">

          <div>
            <h3 
              data-aos="fade-up" 
              className="font-display text-[0.85rem] font-semibold text-[var(--text-muted)] uppercase tracking-[0.1em] mb-6 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
              Pengalaman Kerja
            </h3>

            <div className="timeline flex flex-col gap-6">
              {experiences.map((exp, i) => (
                <div 
                  key={i} 
                  className="flex gap-5 relative"
                  data-aos="fade-up"
                  data-aos-delay={200 * i}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 bg-[var(--bg)] flex-shrink-0 mt-1 relative z-10 ${
                      exp.color === 'accent' ? 'timeline-dot-accent' : 'timeline-dot-purple'
                    }`}
                  />
                  <div className="flex-1 p-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-[250ms] hover:border-[var(--border-hover)] hover:translate-x-0.5">
                    <div className="mb-[0.85rem]">
                      <div className="flex items-center justify-between mb-[0.4rem]">
                        <span className="text-[0.65rem] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold bg-[var(--accent-glow)] px-2 py-[0.15rem] rounded">
                          {exp.type}
                        </span>
                        <span className="text-[0.72rem] text-[var(--text-dim)]">{exp.period}</span>
                      </div>
                      <h4 className="font-display text-[1rem] font-bold text-[var(--text)] mb-[0.15rem]">{exp.role}</h4>
                      <p className="text-[0.8rem] text-[var(--text-muted)]">{exp.company}</p>
                    </div>
                    <ul className="mb-[0.85rem] pl-0">
                      {exp.tasks.map((t, j) => (
                        <li
                          key={j}
                          className="text-[0.8rem] text-[var(--text-muted)] leading-[1.65] pl-4 relative mb-[0.35rem] before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[0.7rem]"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-[0.35rem]">
                      {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 
              data-aos="fade-up"
              className="font-display text-[0.85rem] font-semibold text-[var(--text-muted)] uppercase tracking-[0.1em] mb-6 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Pendidikan
            </h3>

            <div 
              data-aos="fade-up"
              className="p-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] mb-6"
            >
              <div className="text-[0.72rem] text-[var(--text-dim)] mb-2">{education.period}</div>
              <h4 className="font-display text-[1.1rem] font-bold text-[var(--text)] mb-[0.25rem]">{education.school}</h4>
              <p className="text-[0.82rem] text-[var(--green)] font-medium mb-3">{education.major}</p>
              <p className="text-[0.8rem] text-[var(--text-muted)] leading-[1.65] mb-[0.85rem]">{education.desc}</p>
              <div className="flex flex-wrap gap-[0.35rem]">
                {education.highlights.map(h => <span key={h} className="tag">{h}</span>)}
              </div>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-5 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[0.68rem] text-[var(--text-dim)]">
                  <span>Jul 2022</span>
                  <span>Mei 2026</span>
                </div>
                <div className="flex h-2 rounded overflow-hidden bg-[var(--bg-3)] gap-[2px]">
                  <div className="flex-[4] bg-[var(--green)] opacity-70 rounded-l" title="SMKN 2 Klaten" />
                  <div className="flex-[0.1] bg-transparent" />
                  <div className="flex-[2] bg-[var(--accent-2)] opacity-80" title="PT Malifax" />
                  <div className="flex-[0.1] bg-transparent" />
                  <div className="flex-[2] bg-[var(--accent)] opacity-90 rounded-r" title="Anandam Computer" />
                </div>
                <div className="flex gap-5">
                  {[
                    { color: 'var(--green)', label: 'SMK' },
                    { color: 'var(--accent-2)', label: 'PT Malifax' },
                    { color: 'var(--accent)', label: 'Anandam' },
                  ].map(item => (
                    <span key={item.label} className="flex items-center gap-[0.35rem] text-[0.68rem] text-[var(--text-muted)]">
                      <i className="w-2 h-2 rounded-sm inline-block" style={{ background: item.color }} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}