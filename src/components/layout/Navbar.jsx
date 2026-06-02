import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 sm:top-6">
      <div className="container-wide">
        <nav
          className={`flex flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3 transition-all sm:px-6 ${
            scrolled ? 'nav-blur shadow-soft' : 'border border-white/10 bg-white/5'
          }`}
        >
          <a href="#hero" className="text-base font-semibold tracking-[0.2em] sm:text-lg">
            FAUZAN.
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-all hover:border-white/40 sm:text-xs sm:tracking-[0.3em]"
          >
            Lets Talk
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
