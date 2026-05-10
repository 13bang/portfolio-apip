export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-2)] py-8">
      <div className="container flex items-center justify-between gap-4 flex-wrap max-[600px]:flex-col max-[600px]:items-center max-[600px]:text-center">
        <div className="font-display text-[1rem] font-bold text-[var(--text)]">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Apip</span>
          <span className="logo-bracket">/&gt;</span>
        </div>

        <p className="text-[0.75rem] text-[var(--text-dim)]">
          © {year} Muhammad Afif Saifuddin.
        </p>

        <div className="flex gap-4 flex-wrap">
          {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[0.75rem] text-[var(--text-dim)] capitalize transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
