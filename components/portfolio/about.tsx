"use client"

import { GraduationCap, Heart, MapPin, Sparkles } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

export function About() {
  const { language } = useLanguage()
  const content = getPortfolioContent(language)

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index={content.about.index} title={content.about.title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {content.personal.bio}
            </p>

            <div className="mt-8 flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <MapPin className="size-4 text-neon-cyan" />
              {content.personal.location}
            </div>

            <div className="mt-8">
              <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                <GraduationCap className="size-4 text-neon-cyan" />
                {content.about.education}
              </h3>
              <ul className="mt-4 space-y-4">
                {content.education.map((item) => (
                  <li
                    key={item.degree}
                    className="rounded-lg border border-border/70 bg-card/40 p-4"
                  >
                    <p className="font-medium text-foreground">
                      {item.degree}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {item.school} · {item.location} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="left">
            <div className="rounded-2xl border border-border/70 bg-card/40 p-6">
              <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                <Sparkles className="size-4 text-neon-violet" />
                {content.about.languages}
              </h3>
              <ul className="mt-4 space-y-4">
                {content.languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {lang.level}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                <Heart className="size-4 text-neon-violet" />
                {content.about.beyondCode}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border/70 bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
