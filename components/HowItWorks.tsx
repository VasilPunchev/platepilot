const steps = [
  {
    number: "01",
    title: "Set your preferences",
    description:
      "Choose your goal, budget, meals per day, diet style and foods you want to avoid.",
  },
  {
    number: "02",
    title: "Get a weekly plan",
    description:
      "PlatePilot organizes meals by day with recipes, calories and protein targets.",
  },
  {
    number: "03",
    title: "Shop from one list",
    description:
      "Ingredients are grouped into a clean shopping list with quantities for the week.",
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="relative z-10 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-orange-600">
            How it works
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-black md:text-6xl">
            Meal planning without the weekly headache.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/55">
            PlatePilot turns your preferences into a complete plan, so you spend
            less time deciding and more time eating well.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/75 p-7 shadow-xl shadow-black/5 backdrop-blur-xl transition hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-200/60 blur-3xl transition group-hover:bg-amber-200/80" />

              <div className="relative">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14120f] text-sm font-bold text-white">
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-black">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/55">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}