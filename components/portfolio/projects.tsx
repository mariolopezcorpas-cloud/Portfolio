"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { ExternalLink } from "lucide-react"
import {
  motion,
  useReducedMotion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { GithubIcon } from "@/components/portfolio/icons"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"
import styles from "./projects.module.css"

function ProjectSlide({
  children,
  index,
  activeIndex,
  stageWidth,
}: {
  children: ReactNode
  index: number
  activeIndex: MotionValue<number>
  stageWidth: number
}) {
  const reduceMotion = useReducedMotion()
  const distance = useTransform(activeIndex, (value) => index - value)
  const spacing = Math.max(280, Math.min(stageWidth * 0.74, 820))
  const x = useTransform(distance, (value) => value * spacing)
  const y = useTransform(distance, (value) =>
    reduceMotion ? 0 : Math.sin(value * Math.PI * 0.5) * 14,
  )
  const rotate = useTransform(distance, (value) =>
    reduceMotion ? 0 : Math.max(-1, Math.min(1, value)) * 5.5,
  )
  const scale = useTransform(distance, (value) => Math.max(0.64, 1 - Math.abs(value) * 0.2))
  const opacity = useTransform(distance, (value) => Math.max(0.22, 1 - Math.abs(value) * 0.58))
  const filter = useTransform(distance, (value) =>
    `blur(${reduceMotion ? 0 : Math.min(8, Math.abs(value) * 4)}px)`,
  )
  const zIndex = useTransform(distance, (value) => 20 - Math.round(Math.abs(value) * 2))
  const pointerEvents = useTransform(distance, (value) =>
    Math.abs(value) < 0.5 ? "auto" : "none",
  )

  return (
    <motion.div
      className={styles.slide}
      style={{ x, y, rotate, scale, opacity, filter, zIndex, pointerEvents }}
    >
      {children}
    </motion.div>
  )
}

function ProgressMark({ index, activeIndex }: { index: number; activeIndex: MotionValue<number> }) {
  const opacity = useTransform(activeIndex, (value) =>
    Math.max(0.28, 1 - Math.abs(index - value) * 0.7),
  )
  const scaleX = useTransform(activeIndex, (value) =>
    Math.abs(index - value) < 0.5 ? 1.7 : 1,
  )

  return <motion.span className={styles.progressMark} style={{ opacity, scaleX }} />
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
  const scrollTrackRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const [stageWidth, setStageWidth] = useState(0)
  const [frameActive, setFrameActive] = useState(false)
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start end", "end start"],
  })
  const rawActiveIndex = useTransform(
    scrollYProgress,
    [0, 0.04, 0.25, 0.5, 0.75, 1],
    [0, 0, 1, 2, 3, 3],
  )
  const frameOpacity = useTransform(scrollYProgress, [0, 0.04, 0.99, 1], [0, 1, 1, 0])
  const framePointerEvents = useTransform(
    scrollYProgress,
    [0, 0.01, 0.999, 1],
    ["none", "auto", "auto", "none"],
  )
  const activeIndex = useSpring(rawActiveIndex, {
    stiffness: 82,
    damping: 24,
    mass: 0.55,
  })

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextFrameActive = progress > 0 && progress < 1
    setFrameActive((current) => current === nextFrameActive ? current : nextFrameActive)
  })

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const observer = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width)
    })
    observer.observe(stage)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className={styles.section}>
      <div ref={scrollTrackRef} className={styles.scrollTrack}>
        <motion.div
          className={styles.stickyFrame}
          style={{ opacity: frameOpacity, pointerEvents: framePointerEvents }}
          aria-hidden={!frameActive}
          inert={!frameActive}
        >
          <div className={styles.frameContent}>
            <div className={styles.heading}>
              <SectionHeading
                index={content.projectsCopy.index}
                title={content.projectsCopy.title}
                subtitle={content.projectsCopy.subtitle}
              />
            </div>

            <div ref={stageRef} className={styles.stage}>
              {content.projects.map((project, i) => (
                <ProjectSlide
                  key={project.slug}
                  index={i}
                  activeIndex={activeIndex}
                  stageWidth={stageWidth}
                >
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
                </ProjectSlide>
              ))}
            </div>

            <div className={styles.progress} aria-hidden="true">
              {content.projects.map((project, index) => (
                <ProgressMark key={project.slug} index={index} activeIndex={activeIndex} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal delay={0.15}>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border/70 p-8 text-center">
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
