import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'accent',
    skills: [
      { name: 'React JS (Vite)', level: 85, note: 'Tampilan UI Marketplace' },
      { name: 'JavaScript', level: 82, note: 'Interaktivitas Website' },
      { name: 'HTML & CSS', level: 90, note: 'Desain Responsif' },
      { name: 'PHP Native', level: 80, note: 'Web Profile & Stok Barang' },
    ],
  },
  {
    category: 'Backend & Infrastruktur',
    color: 'green',
    skills: [
      { name: 'NestJS', level: 75, note: 'API Backend Marketplace' },
      { name: 'PHP Backend', level: 78, note: 'Logika Transaksi & Laporan' },
      { name: 'Docker', level: 70, note: 'Deployment Aplikasi' },
      { name: 'PM2', level: 72, note: 'Manajemen Local Server' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'purple',
    skills: [
      { name: 'Ubuntu OS', level: 75, note: 'Konfigurasi Server' },
      { name: 'Cloudflare Tunnel', level: 68, note: 'Publikasi Server Lokal' },
      { name: 'Git & GitHub', level: 80, note: 'Manajemen Versi Kode' },
      { name: 'Microsoft Office', level: 80, note: 'Penyusunan Dokumen' },
    ],
  },
  {
    category: 'Soft Skills',
    color: 'orange',
    skills: [
      { name: 'Problem Solving', level: 85, note: 'Troubleshooting Sistem' },
      { name: 'Technical Docs', level: 88, note: 'Pembuatan How-To Doc' },
      { name: 'Fast Learner', level: 85, note: 'Riset Produk Open-Source' },
      { name: 'Team Collaboration', level: 90, note: 'Kerja Sama Tim Magang' },
    ],
  },
]

const categoryColors = {
  frontend: 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/5',
  backend: 'border-[var(--green)] text-[var(--green)] bg-[var(--green)]/5',
  devops: 'border-[var(--accent-2)] text-[var(--accent-2)] bg-[var(--accent-2)]/5',
  research: 'border-[#f59e0b] text-[#f59e0b] bg-[#f59e0b]/5',
  tools: 'border-[var(--text-muted)] text-[var(--text-muted)] bg-[var(--text-muted)]/5',
}

const techStack = [
  { name: 'React', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'PHP', category: 'frontend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Docker', category: 'devops' },
  { name: 'PM2', category: 'devops' },
  { name: 'Ubuntu', category: 'devops' },
  { name: 'Cloudflare', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'Open-Source', category: 'research' },
  { name: 'Technical Docs', category: 'research' },
  { name: 'MS Office', category: 'tools' },
]

const colorBorderTop = {
  accent: 'border-t-[var(--accent)]',
  green: 'border-t-[var(--green)]',
  purple: 'border-t-[var(--accent-2)]',
  orange: 'border-t-[#f59e0b]',
}

const barColorClass = {
  accent: '',
  green: 'skill-bar-green',
  purple: 'skill-bar-purple',
  orange: 'skill-bar-orange',
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const categories = ['all', 'frontend', 'backend', 'devops', 'research', 'tools']
  const filtered = active === 'all' ? techStack : techStack.filter(t => t.category === active)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <section id="skills" className="py-12">
      <div className="container">

        <div data-aos="fade-up">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-desc mb-12">
            Teknologi dan alat yang saya gunakan dalam membangun solusi web yang berkualitas.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-2 gap-5 mb-12 max-[700px]:grid-cols-1">
          {skillGroups.map((group, gi) => (
            <div
              key={gi}
              data-aos="fade-up"
              data-aos-delay={100 * gi}
              className={`p-6 rounded-[var(--radius)] border-t-2 border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-[250ms] hover:border-[var(--border-hover)] ${colorBorderTop[group.color]}`}
            >
              <div className="flex items-center gap-[0.6rem] mb-5">
                <h3 className="font-display text-[0.95rem] font-bold text-[var(--text)]">{group.category}</h3>
              </div>
              <div className="flex flex-col gap-[0.85rem]">
                {group.skills.map((skill, si) => (
                  <div key={si} className="grid grid-cols-[1fr_auto_auto] gap-2 items-center">
                    <div className="flex flex-col min-w-0">
                      <span className="text-[0.82rem] text-[var(--text)] font-medium truncate">{skill.name}</span>
                      <span className="text-[0.68rem] text-[var(--text-dim)]">{skill.note}</span>
                    </div>
                    <div className="w-[100px] h-1 bg-[var(--bg-3)] rounded overflow-hidden max-[700px]:w-[70px]">
                      <div
                        className={`skill-bar-fill ${barColorClass[group.color]}`}
                        style={{ '--target-width': `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-[0.68rem] text-[var(--text-dim)] min-w-[28px] text-right">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack section */}
        <div 
          className="pt-8 border-t border-[var(--border)]"
          data-aos="fade-up"
        >
          <h3 className="font-display text-[1rem] font-bold text-[var(--text)] mb-4">Technology Stack</h3>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-[0.35rem] mb-5">
            {categories.map(c => (
              <button
                key={c}
                className={`px-3 py-[0.3rem] rounded-[var(--radius)] border text-[0.73rem] capitalize tracking-[0.03em] transition-all duration-200 ${
                  active === c
                    ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                    : 'bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--text)]'
                }`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {filtered.map((t, i) => (
              <span
                key={`${active}-${i}`}
                data-aos="zoom-in"
                data-aos-delay={30 * i}
                className={`tech-badge px-[0.85rem] py-[0.35rem] rounded-[var(--radius)] border text-[0.78rem] font-medium transition-all duration-200 hover:-translate-y-px cursor-default ${categoryColors[t.category] || 'border-[var(--border)]'}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}