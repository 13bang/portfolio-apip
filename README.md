# Portfolio — Tailwind CSS Version

Versi portfolio yang sudah dikonversi dari CSS native ke **Tailwind CSS**, tanpa mengubah layout, design, atau fungsi apapun.

## Perubahan

- Semua file `.css` per-komponen dihapus → styling dipindah langsung ke className di JSX
- `index.css` menggunakan `@tailwind base/components/utilities` + CSS variables tetap dipertahankan
- `tailwind.config.js` + `postcss.config.js` ditambahkan
- `package.json` ditambahkan devDependencies: `tailwindcss`, `autoprefixer`, `postcss`

## Setup

```bash
npm install
npm run dev
```

## Catatan

Beberapa hal yang tetap menggunakan CSS global di `index.css` karena tidak bisa dilakukan murni dengan Tailwind utility classes:
- CSS custom properties / variables (--accent, --bg, dll)
- Pseudo-elements (::before, ::after) untuk section-label, timeline, cta-divider, project-card top bar
- @keyframes animations
- `.reveal` scroll animation classes
- `.skill-bar-fill` animasi width
- `.photo-ring` animasi spin
- Tech badge category colors (cat-frontend, cat-backend, dll)
