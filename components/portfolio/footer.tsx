import { personal } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with
          <span className="text-neon-cyan">Next.js</span>
          &amp;
          <span className="text-neon-violet">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
