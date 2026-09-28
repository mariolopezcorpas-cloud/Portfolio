"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { type FormEvent, useState } from "react"
import { GithubIcon } from "@/components/portfolio/icons"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Button } from "@/components/ui/button"
import { personal } from "@/lib/portfolio-data"

const contactItems = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
  { icon: GithubIcon, label: "GitHub", value: "mlopezdaw2n25", href: personal.github },
]

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05 — Contact"
          title="Let's build something together"
          subtitle="I'm actively looking for junior full-stack opportunities. Reach out — I usually reply within a day."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-neon-cyan/40">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="left">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/70 bg-card/40 p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-xs text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="rounded-md border border-input bg-secondary/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-neon-cyan/60"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-xs text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="rounded-md border border-input bg-secondary/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-neon-cyan/60"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project..."
                  className="resize-none rounded-md border border-input bg-secondary/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-neon-cyan/60"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full gap-2 bg-neon-cyan text-background hover:bg-neon-cyan/90"
              >
                Send Message <Send className="size-4" />
              </Button>
              <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
                Opens your email client — no data is stored.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
