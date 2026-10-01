"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/icons"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

function TypedRoles({ roles }: { roles: string[] }) {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = deleting ? 40 : 70

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex, roles])

  return (
    <span className="text-neon-cyan">
      {text}
      <span className="animate-caret text-neon-cyan">_</span>
    </span>
  )
}

export function Hero() {
  const { language } = useLanguage()
  const [hasPortrait, setHasPortrait] = useState(true)
  const content = getPortfolioContent(language)
  const { personal, stats, hero } = content

  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-xs text-neon-cyan"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-glow rounded-full bg-neon-cyan" />
            </span>
            {hero.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {hero.greeting}{" "}
            <span className="text-glow bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
              {personal.firstName}
            </span>
            <br />
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl">
              <TypedRoles roles={personal.roles} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.tagline} {hero.basedIn} {personal.location}, {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              render={<a href="#projects" />}
              nativeButton={false}
              size="lg"
              className="gap-2 bg-neon-cyan text-background hover:bg-neon-cyan/90"
            >
              {hero.projects} <ArrowRight className="size-4" />
            </Button>
            <Button
              render={<a href={personal.cvUrl} download />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="gap-2 border-border bg-transparent hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
            >
              <Download className="size-4" /> {hero.downloadCv}
            </Button>
            <div className="flex items-center gap-3 pl-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label={language === "en" ? "GitHub profile" : "Perfil de GitHub"}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={language === "en" ? "LinkedIn profile" : "Perfil de LinkedIn"}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href="/mi%20carta%20de%20presentacion.pdf"
                download="mi carta de presentacion.pdf"
                aria-label={language === "en" ? "Download cover letter" : "Descargar carta de presentación"}
                className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
              >
                <Download className="size-5" />
              </a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative mx-auto w-36 overflow-hidden rounded-2xl border border-border/80 bg-card/60 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-neon-cyan/70 hover:shadow-[0_0_32px_-8px_var(--neon-cyan)] sm:w-44 lg:w-full lg:max-w-[18rem]"
        >
          {hasPortrait ? (
            <Image
              src="/WhatsApp%20Image%202026-09-30%20at%2022.45.58.jpeg"
              alt={personal.name}
              width={768}
              height={1024}
              priority
              sizes="(min-width: 1024px) 288px, (min-width: 640px) 176px, 144px"
              onError={() => setHasPortrait(false)}
              className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              aria-label={personal.name}
              role="img"
              className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-neon-cyan/15 via-card to-neon-violet/15 font-heading text-5xl font-semibold text-neon-cyan"
            >
              ML
            </div>
          )}
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-0 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4 lg:col-span-2"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-heading text-2xl font-semibold text-foreground">
                {stat.value}
              </dd>
              <dt className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
