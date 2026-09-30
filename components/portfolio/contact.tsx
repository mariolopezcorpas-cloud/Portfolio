"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { type FormEvent, useState } from "react"
import { GithubIcon } from "@/components/portfolio/icons"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { getPortfolioContent } from "@/lib/translations"

export function Contact() {
  const { language } = useLanguage()
  const content = getPortfolioContent(language)
  const { personal } = content
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
          index={content.contact.index}
          title={content.contact.title}
          subtitle={content.contact.subtitle}
        />

        <div className="mt-12">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col gap-4">
              {[
                { icon: Mail, label: content.contact.labels[0], value: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: content.contact.labels[1], value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: content.contact.labels[2], value: personal.location, href: undefined },
                { icon: GithubIcon, label: content.contact.labels[3], value: "mlopezdaw2n25", href: personal.github },
              ].map((item) => {
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
        </div>
      </div>
    </section>
  )
}
