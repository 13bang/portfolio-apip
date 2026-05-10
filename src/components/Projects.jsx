import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = [
  {
    title: 'Anandamid Marketplace',
    desc: 'Website marketplace modern dengan arsitektur fullstack — React JS (Vite) di frontend dan NestJS di backend. Dilengkapi sistem auth, product listing, dan cart.',
    tags: ['React JS', 'Vite', 'NestJS', 'REST API', 'PM2', 'Cloudflare Tunnel'],
    type: 'Fullstack',
    color: 'accent',
    highlight: true,
    role: 'Fullstack Developer',
    company: 'Anandam Computer',
    link: 'https://anandam.id',
  },
  {
    title: 'Sistem Manajemen Stok',
    desc: 'Aplikasi web manajemen persediaan barang dengan fitur pelaporan transaksi penjualan dan pembelian. Dikembangkan menggunakan PHP Native untuk frontend dan backend dengan styling CSS murni.',
    tags: ['PHP Native', 'JavaScript', 'CSS Native', 'MySQL'],
    type: 'Fullstack',
    color: 'green',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: '#',
  },
  {
    title: 'supergaming.id',
    desc: 'Website company profile badan usaha dari Anandam Computer.',
    tags: ['PHP', 'HTML', 'CSS', 'Responsive'],
    type: 'Frontend',
    color: 'purple',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: 'https://supergaming.id',
  },
  {
    title: 'mitragamacomputer.com',
    desc: 'Website company profile badan usaha dari Anandam Computer.',
    tags: ['PHP', 'HTML', 'CSS', 'Responsive'],
    type: 'Frontend',
    color: 'accent',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: 'https://mitragamacomputer.com',
  },
  {
    title: 'Open-Source Research & Integration',
    desc: 'Riset, evaluasi, dan integrasi berbagai produk open-source dengan layanan pihak ketiga.',
    tags: ['Open-Source', 'Docker', 'Linux', 'System Config', 'Documentation'],
    type: 'Research',
    color: 'orange',
    highlight: false,
    role: 'System Engineer',
    company: 'PT Malifax Indonesia',
    link: '#',
    researchProducts: [
      { name: 'Keycloak', image: '/keycloak.png' },
      { name: 'SafeLine', image: '/safeline.png' },
      { name: 'privacyIDEA', image: '/privacyidea.png' },
      { name: 'DFIR IRIS', image: '/dfir-iris.png' },
      { name: 'Vault', image: '/vault.png' },
      { name: 'Mailcow', image: '/mailcow.svg' },
    ]
  },
  {
    title: 'Personal Web Portfolio',
    desc: 'Website portofolio interaktif dengan antarmuka modern dan Dark Mode. Dibangun secara mandiri dari awal menggunakan ekosistem React dan styling CSS Native.',
    tags: ['React JS', 'Vite', 'Native CSS', 'Responsive UI'],
    type: 'Frontend',
    color: 'purple',
    highlight: false,
    role: 'Web Developer',
    company: 'Personal Project',
    link: '#',
  },
]

const colorMap = {
  accent: 'var(--accent)',
  green: 'var(--green)',
  purple: 'var(--accent-2)',
  orange: '#f59e0b',
}

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    })
  }, [])

  return (
    <section id="projects" className="py-12">
      <div className="container">

        <div data-aos="fade-up">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects &amp; Karya</h2>
          <p className="section-desc mb-12">
            Beberapa project yang telah saya kerjakan selama magang dan belajar mandiri.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={100 * (i % 3)}
              className={`project-card group relative flex flex-col gap-3 p-[1.4rem] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-[400ms] hover:border-[var(--border-hover)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                ${project.highlight
                  ? 'col-span-2 max-[900px]:col-span-2 max-[600px]:col-span-1 bg-gradient-to-br from-[var(--bg-card)] to-[rgba(79,142,247,0.04)] border-[rgba(79,142,247,0.2)] highlight'
                  : ''}
              `}
              style={{ '--card-color': colorMap[project.color] }}
            >
              {/* Floating Icons dinamis dari data researchProducts */}
              {project.researchProducts && (
                <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
                  {project.researchProducts.map((prod, idx) => (
                    <div 
                      key={idx}
                      className="w-7 h-7 p-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-xl flex items-center justify-center hover:scale-125 hover:bg-white/20 transition-all duration-300"
                      title={prod.name}
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col items-start gap-[0.15rem]">
                  <span className="text-[0.65rem] uppercase tracking-[0.1em] font-semibold" style={{ color: colorMap[project.color] }}>
                    {project.type}
                  </span>
                  <span className="text-[0.65rem] text-[var(--text-dim)]">{project.company}</span>
                </div>
              </div>

              <h3 className={`font-display font-bold text-[var(--text)] leading-[1.3] ${project.highlight ? 'text-[1.2rem]' : 'text-[1rem]'}`}>
                {project.title}
              </h3>

              <p className="text-[0.78rem] text-[var(--text-muted)] leading-[1.65] flex-1">{project.desc}</p>

              <div className="flex flex-wrap gap-[0.3rem]">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] mt-auto">
                <span className="flex items-center gap-[0.3rem] text-[0.7rem] text-[var(--text-dim)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  {project.role}
                </span>
                
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[0.25rem] text-[0.72rem] text-[var(--accent)] font-medium transition-all duration-200 hover:gap-[0.4rem]"
                  >
                    Visit Site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}