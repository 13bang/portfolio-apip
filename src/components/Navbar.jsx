import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] transition-all duration-[400ms] ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 right-0 z-[1001] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-[16px] border-b border-[var(--border)] py-3'
            : 'py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-display text-[1.1rem] font-bold text-[var(--text)] flex-shrink-0 tracking-[0.03em] relative z-[1100]">
            <span className="logo-bracket text-[var(--accent)]">&lt;</span>
            <span className="logo-text">Apip</span>
            <span className="logo-bracket text-[var(--accent)]">/&gt;</span>
          </a>

          {/* Desktop nav links */}
          <ul
            className={`
              flex items-center gap-1
              max-[768px]:fixed max-[768px]:top-0 max-[768px]:right-0 max-[768px]:w-[280px] max-[768px]:h-[100dvh]
              max-[768px]:bg-[var(--bg-2)] max-[768px]:border-l max-[768px]:border-[var(--border)]
              max-[768px]:flex-col max-[768px]:justify-start max-[768px]:items-start
              max-[768px]:pt-24 max-[768px]:px-6 max-[768px]:gap-2 max-[768px]:m-0
              max-[768px]:transition-transform max-[768px]:duration-[400ms] max-[768px]:ease-[cubic-bezier(0.4,0,0.2,1)]
              max-[768px]:z-[1050] max-[768px]:shadow-[-10px_0_30px_rgba(0,0,0,0.5)]
              ${menuOpen ? 'max-[768px]:translate-x-0' : 'max-[768px]:translate-x-full'}
            `}
          >
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className="max-[768px]:w-full"
                style={{
                  transitionDelay: menuOpen ? `${i * 0.05}s` : '0s',
                  opacity: menuOpen || window.innerWidth > 768 ? 1 : 0,
                  transform: menuOpen || window.innerWidth > 768 ? 'translateX(0)' : 'translateX(20px)',
                  transition: 'all 0.4s ease'
                }}
              >
                <a
                  href={link.href}
                  className={`
                    font-body text-[0.85rem] font-normal px-3 py-[0.4rem] rounded-[var(--radius)] transition-all duration-200 tracking-[0.02em]
                    max-[768px]:text-base max-[768px]:py-[0.8rem] max-[768px]:px-4 max-[768px]:w-full max-[768px]:text-left max-[768px]:flex
                    ${
                      active === link.href.slice(1)
                        ? 'text-[var(--accent)] bg-[var(--accent-glow)]'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-3)]'
                    }
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center gap-4 relative z-[1100]">
            <a
              href="mailto:afif.putra224@gmail.com"
              className="btn-primary text-[0.78rem] py-2 px-[1.1rem] flex-shrink-0 max-[768px]:hidden"
            >
              Hire Me
            </a>

            {/* Hamburger Button - Fixed at top right on mobile */}
            <button
              className="hidden max-[768px]:flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-[var(--radius)] bg-[var(--bg-3)] border border-[var(--border)] transition-all duration-200 active:scale-95"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[18px] h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                  menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-[var(--text)] transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-[18px] h-[1.5px] bg-[var(--text)] transition-all duration-300 origin-center ${
                  menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}