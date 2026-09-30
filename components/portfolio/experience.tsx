"use client"

import { Briefcase, MapPin } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

export function Experience() {
  const { language } = useLanguage()
  const content = getPortfolioContent(language)

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index={content.experienceCopy.index}
          title={content.experienceCopy.title}
          subtitle={content.experienceCopy.subtitle}
        />

        <div className="relative mt-14">
          <div
            className="absolute left-[15px] top-0 h-full w-px bg-gradient-to-b from-neon-cyan via-border to-transparent sm:left-[19px]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {content.experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.1}>
                <li className="relative pl-10 sm:pl-14">
                  <span
                    className={`absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border sm:size-10 ${
                      item.current
                        ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan glow-cyan"
                        : "border-border bg-card text-muted-foreground"
                    }`}
                  >
                    <Briefcase className="size-4" />
                  </span>

                  <div className="rounded-xl border border-border/70 bg-card/40 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.role} ·{" "}
                        <span className="text-neon-cyan">{item.company}</span>
                      </h3>
                      {item.current ? (
                        <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-neon-cyan">
                          {content.experienceCopy.current}
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                      <span>{item.period}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        {item.location}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-neon-violet" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
