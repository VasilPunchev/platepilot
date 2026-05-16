export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-260px] h-[620px] w-[980px] -translate-x-1/2 rounded-full bg-orange-300/45 blur-[140px]" />
      <div className="absolute right-[-220px] top-[180px] h-[620px] w-[620px] rounded-full bg-amber-200/45 blur-[140px]" />
      <div className="absolute left-[-180px] top-[360px] h-[520px] w-[520px] rounded-full bg-rose-200/35 blur-[140px]" />
      <div className="absolute bottom-[-260px] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-orange-200/35 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.92),transparent_40%),linear-gradient(to_right,rgba(20,18,15,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,18,15,0.035)_1px,transparent_1px)] bg-[size:auto,96px_96px,96px_96px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
    </div>
  );
}