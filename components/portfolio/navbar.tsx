"use client"

import { Languages, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const content = getPortfolioContent(language)
  const links = ["#about", "#skills", "#experience", "#projects", "#contact"]

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en")
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="text-neon-cyan">&lt;</span>
          Mario
          <span className="text-neon-cyan">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm text-muted-foreground md:flex">
          {links.map((href, index) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors hover:text-neon-cyan"
              >
                {content.nav[index]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs text-foreground transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
            aria-label={language === "en" ? "Cambiar idioma a español" : "Switch language to English"}
            title={language === "en" ? "Cambiar a español" : "Switch to English"}
          >
            <Languages className="size-4" />
            {language === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground md:hidden"
            aria-label={
              language === "en"
                ? open ? "Close menu" : "Open menu"
                : open ? "Cerrar menú" : "Abrir menú"
            }
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/80 bg-background/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm">
            {links.map((href, index) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground transition-colors hover:text-neon-cyan"
                >
                  {content.nav[index]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
