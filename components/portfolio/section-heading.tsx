import { Reveal } from "@/components/portfolio/reveal"

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export function SectionHeading({
  index,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center" : "text-left"}>
        <div
          className={`flex items-center gap-3 font-mono text-sm text-neon-cyan ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-neon-cyan/60" aria-hidden="true" />
          {index}
        </div>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p
            className={`mt-3 max-w-2xl text-muted-foreground ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
