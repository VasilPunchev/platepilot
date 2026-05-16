export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#fffaf3]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14120f] text-lg text-white shadow-xl shadow-black/10">
            ◐
          </span>

          <div>
            <span className="block text-sm font-bold tracking-tight text-[#14120f]">
              PlatePilot
            </span>
            <span className="hidden text-xs text-black/40 sm:block">
              AI meal planning
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-black/45 md:flex">
          <a href="#features" className="transition hover:text-black">
            Features
          </a>
          <a href="#planner" className="transition hover:text-black">
            Meal Planner
          </a>
          <a href="#shopping" className="transition hover:text-black">
            Shopping List
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#preview"
            className="hidden rounded-full border border-black/10 bg-white/60 px-5 py-2 text-sm font-semibold text-black/65 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white md:inline-flex"
          >
            View demo
          </a>

          <a
            href="#planner"
            className="rounded-full bg-[#14120f] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black sm:px-5 sm:text-sm"
          >
            Plan meals
          </a>
        </div>
      </div>
    </header>
  );
}