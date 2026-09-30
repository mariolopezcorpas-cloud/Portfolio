"use client"

import { ArrowRight, Download } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/portfolio/icons"
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
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 animate-float-slow rounded-[2rem] border border-neon-cyan/20 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/10 glow-cyan" />
          <div className="relative flex h-[85%] w-[85%] flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-6 font-mono text-xs backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-amber-500/70" />
              <span className="size-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <pre className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
              <span className="text-neon-violet">class</span>{" "}
              <span className="text-neon-cyan">Developer</span> {"{"}
              {"\n  "}
              <span className="text-neon-violet">public</span> $name ={" "}
              <span className="text-amber-300">
                &apos;Mario López&apos;
              </span>
              ;
              {"\n  "}
              <span className="text-neon-violet">public</span> $stack ={" "}
              [<span className="text-amber-300">&apos;PHP&apos;</span>,{" "}
              <span className="text-amber-300">&apos;Laravel&apos;</span>];
              {"\n  "}
              <span className="text-neon-violet">public function</span>{" "}
              <span className="text-neon-cyan">ship</span>() {"{"}
              {"\n    "}
              <span className="text-neon-violet">return</span>{" "}
              <span className="text-amber-300">&apos;🚀 shipped&apos;</span>;
              {"\n  "}
              {"}"}
              {"\n"}
              {"}"}
            </pre>
            <div className="text-muted-foreground/70">
              status: <span className="text-emerald-400">online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
