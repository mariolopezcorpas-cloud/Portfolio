"use client"

import Image from "next/image"
import { useRef, type ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { GithubIcon } from "@/components/portfolio/icons"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"
import styles from "./projects.module.css"

type ProjectTrajectory = { x: number[]; y: number[]; rotate: number[] }

const projectTrajectories: ProjectTrajectory[] = [
  { x: [7, -2, -8], y: [-12, 2, 12], rotate: [1.2, -0.4, -1.4] },
  { x: [-8, 2, 8], y: [-10, 1, 11], rotate: [-1.1, 0.5, 1.4] },
  { x: [6, -4, -5], y: [-11, -1, 12], rotate: [1.4, -0.8, -1.1] },
  { x: [-6, 4, 7], y: [-12, 3, 11], rotate: [-1.4, 0.9, 1.2] },
]

function ScrollProject({ children, index }: { children: ReactNode; index: number }) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.45,
  })
  const movement = projectTrajectories[index] ?? projectTrajectories[0]
  const reduceMotion = useReducedMotion()
  const zero = [0, 0, 0]
  const x = useTransform(easedProgress, [0, 0.5, 1], reduceMotion ? zero : movement.x)
  const y = useTransform(easedProgress, [0, 0.5, 1], reduceMotion ? zero : movement.y)
  const rotate = useTransform(
    easedProgress,
    [0, 0.5, 1],
    reduceMotion ? zero : movement.rotate,
  )

  return (
    <motion.div
      ref={targetRef}
      className={styles.parallax}
      style={{ x, y, rotate }}
    >
      {children}
    </motion.div>
  )
}

const projectImages: Record<string, string[]> = {
  "personal-portfolio": ["/portfolio1.PNG"],
  "villar-practicas": ["/villar1.PNG", "/villar2.PNG"],
  proyecto0616: ["/proyecto1.PNG", "/proyecto2.PNG"],
}

function ProjectArtwork({ slug, title }: { slug: string; title: string }) {
  const images = projectImages[slug] ?? []

  if (images.length === 1) {
    return (
      <div className={`${styles.artwork} ${styles.portfolioArtwork}`}>
        <div className={styles.windowBar}>
          <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
          <span>app / portfolio.tsx</span>
          <span className={styles.windowLanguage}>TSX</span>
        </div>
        <div className={`${styles.capture} ${styles.singleCapture}`}>
          <Image src={images[0]} alt={`${title} preview`} width={1200} height={800} />
        </div>
      </div>
    )
  }

  if (images.length === 2) {
    const isVillar = slug === "villar-practicas"
    return (
      <div className={`${styles.artwork} ${isVillar ? styles.villarArtwork : styles.laravelArtwork}`}>
        <div className={styles.windowBar}>
          <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
          <span>{isVillar ? "resources / views" : "proyecto0616 / app"}</span>
          <span className={styles.windowLanguage}>{isVillar ? "BLADE" : "LARAVEL"}</span>
        </div>
        <div className={`${styles.capture} ${styles.layeredCaptures}`}>
          <div className={`${styles.layer} ${styles.backLayer}`}>
            <Image src={images[1]} alt={`${title} second screen`} width={1200} height={800} />
          </div>
          <div className={`${styles.layer} ${styles.frontLayer}`}>
            <Image src={images[0]} alt={`${title} main screen`} width={1200} height={800} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.artwork} ${styles.codeArtwork}`} aria-label={`${title} code preview`}>
      <div className={styles.editorBar}>
        <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.editorTab}>index.html</span>
        <span className={styles.windowLanguage}>HTML</span>
      </div>
      <div className={styles.editorBody}>
        <div className={styles.fileRail} aria-hidden="true">
          <span>EXPLORER</span><b>⌄</b>
          <small>⌄ portfolio</small><small className={styles.activeFile}>▤ index.html</small><small>▤ styles.css</small><small>▤ README.md</small>
        </div>
        <div className={styles.codeLines} aria-hidden="true">
          <p><span>1</span><code><i>&lt;main</i> class=<em>"portfolio"</em><i>&gt;</i></code></p>
          <p><span>2</span><code>  <i>&lt;section</i> id=<em>"about"</em><i>&gt;</i></code></p>
          <p><span>3</span><code>    <b>Building</b> with care<span className={styles.codeCaret} /></code></p>
          <p><span>4</span><code>  <i>&lt;/section&gt;</i></code></p>
          <p><span>5</span><code>  <i>&lt;section</i> id=<em>"projects"</em><i>&gt;</i></code></p>
          <p><span>6</span><code>    <b>Ideas into the web.</b></code></p>
          <p><span>7</span><code>  <i>&lt;/section&gt;</i></code></p>
          <p><span>8</span><code><i>&lt;/main&gt;</i></code></p>
        </div>
      </div>
      <div className={styles.editorStatus}><span>main</span><span>HTML · UTF-8</span><span>Ln 8, Col 1</span></div>
    </div>
  )
}

export function Projects() {
  const { language } = useLanguage()
  const content = getPortfolioContent(language)

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index={content.projectsCopy.index}
          title={content.projectsCopy.title}
          subtitle={content.projectsCopy.subtitle}
        />

        <div className={`${styles.grid} mt-12 grid gap-6 md:grid-cols-2`}>
          {content.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={styles.reveal}>
              <ScrollProject index={i}>
              <article className={`${styles.card} group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6`}>
                <ProjectArtwork slug={project.slug} title={project.title} />
                <div className="flex items-center justify-between">
                  <span className="mt-5 rounded-full border border-border/70 bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={
                        language === "en"
                          ? `${project.title} on GitHub`
                          : `${project.title} en GitHub`
                      }
                      className="text-muted-foreground transition-colors hover:text-neon-cyan"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title}: ${content.projectsCopy.demo}`}
                        className="text-muted-foreground transition-colors hover:text-neon-cyan"
                      >
                        <ExternalLink className="size-5" />
                      </a>
                    ) : null}
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                  {project.longDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon-violet/20 bg-neon-violet/5 px-2.5 py-1 font-mono text-[11px] text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1" />

                <div className="mt-4 flex gap-3 border-t border-border/60 pt-4">
                  <Button
                    render={
                      <a href={project.github} target="_blank" rel="noreferrer" />
                    }
                    nativeButton={false}
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 border-border bg-transparent hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
                  >
                    <GithubIcon className="size-4" /> {content.projectsCopy.code}
                  </Button>
                </div>
              </article>
              </ScrollProject>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border/70 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              {content.projectsCopy.more}
            </p>
            <Button
              render={
                <a href={content.personal.github} target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
              variant="outline"
              className="gap-2 border-border bg-transparent hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
            >
              <GithubIcon className="size-4" /> {content.projectsCopy.github}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
