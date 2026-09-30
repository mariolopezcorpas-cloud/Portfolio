"use client"

import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const content = getPortfolioContent(language)

  return (
    <footer className="relative border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {content.personal.name}. {content.footer.rights}
        </p>
        <p className="flex items-center gap-1.5">
          {content.footer.built}
          <span className="text-neon-cyan">Next.js</span>
          &amp;
          <span className="text-neon-violet">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
