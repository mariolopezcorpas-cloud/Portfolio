"use client"

import {
  Cpu,
  Database,
  FlaskConical,
  Layers,
  LayoutGrid,
  Network,
  Plug,
  Server,
  Settings,
  Users,
} from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { skills, techStack, type SkillCategory } from "@/lib/portfolio-data"

const icons: Record<SkillCategory["icon"], typeof Server> = {
  server: Server,
  layout: LayoutGrid,
  layers: Layers,
  database: Database,
  plug: Plug,
  settings: Settings,
  network: Network,
  flask: FlaskConical,
  cpu: Cpu,
  users: Users,
}

const levelColor: Record<string, string> = {
  Beginner: "from-muted-foreground to-muted-foreground",
  Intermediate: "from-neon-violet to-neon-violet",
  Advanced: "from-neon-cyan to-neon-violet",
  Expert: "from-neon-cyan to-emerald-400",
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02 — Skills"
          title="What I work with"
          subtitle="A practical skill set built through real internships, academic projects, and constant self-learning."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, i) => {
            const Icon = icons[skill.icon]
            return (
              <Reveal key={skill.category} delay={i * 0.05}>
                <div className="group rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-neon-cyan/40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                        <Icon className="size-4" />
                      </span>
                      <span className="font-medium text-foreground">
                        {skill.category}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {skill.level}
                    </span>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${levelColor[skill.level]}`}
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border/70 bg-card/40 p-6">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Tech Stack &amp; Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-neon-cyan/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
