const benefits = [
  {
    title: "Weekly planning",
    description:
      "Generate a structured weekly meal plan based on your goals, schedule and preferences.",
    className: "md:col-span-2",
  },
  {
    title: "Smart quantities",
    description:
      "See ingredient amounts clearly, so you know exactly what to buy.",
    className: "",
  },
  {
    title: "Nutrition overview",
    description:
      "Track calories, protein, carbs and fats across your planned meals.",
    className: "",
  },
  {
    title: "One shopping list",
    description:
      "Turn all recipes into a clean store-ready list grouped by ingredients and categories.",
    className: "md:col-span-2",
  },
];

export function Benefits() {
  return (
    <section className="relative z-10 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold text-orange-600">
            Why PlatePilot
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-black md:text-6xl">
            A smarter way to plan what you eat.
          </h2>

          <p className="mt-5 text-lg leading-8 text-black/55">
            PlatePilot helps you move from “I don&apos;t know what to cook” to a
            clear weekly plan with meals, nutrition targets and shopping needs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/75 p-7 shadow-xl shadow-black/5 backdrop-blur-xl transition hover:-translate-y-1 ${benefit.className}`}
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-200/60 blur-3xl transition group-hover:bg-rose-200/70" />

              <div className="relative">
                <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                  {benefit.title === "Weekly planning" && "📅"}
                  {benefit.title === "Smart quantities" && "🥕"}
                  {benefit.title === "Nutrition overview" && "⚡"}
                  {benefit.title === "One shopping list" && "🛒"}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-black">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/55">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}