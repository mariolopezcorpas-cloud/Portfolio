import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/portfolio/icons"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { Button } from "@/components/ui/button"
import { personal, projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04 — Projects"
          title="Selected work"
          subtitle="Real projects from my internship and academic path — all public and open to explore on GitHub."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 hover:border-neon-cyan/40 hover:glow-cyan">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border/70 bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-muted-foreground transition-colors hover:text-neon-cyan"
                    >
                      <GithubIcon className="size-5" />
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
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
                    <GithubIcon className="size-4" /> Code
                  </Button>
                  {project.demo ? (
                    <Button
                      render={
                        <a href={project.demo} target="_blank" rel="noreferrer" />
                      }
                      nativeButton={false}
                      size="sm"
                      className="flex-1 gap-2 bg-neon-cyan text-background hover:bg-neon-cyan/90"
                    >
                      <ExternalLink className="size-4" /> Live
                    </Button>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border/70 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Want to see more? All my repositories are public.
            </p>
            <Button
              render={
                <a href={personal.github} target="_blank" rel="noreferrer" />
              }
              nativeButton={false}
              variant="outline"
              className="gap-2 border-border bg-transparent hover:border-neon-cyan/50 hover:bg-neon-cyan/5"
            >
              <GithubIcon className="size-4" /> View GitHub Profile
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
