export function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-grid"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-neon-cyan/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 -right-40 h-[28rem] w-[28rem] rounded-full bg-neon-violet/20 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-neon-cyan/10 blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  )
}
