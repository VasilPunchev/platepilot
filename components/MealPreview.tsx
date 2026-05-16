const shoppingItems = [
  "Chicken breast — 1.2 kg",
  "Greek yogurt — 700 g",
  "Rice — 1 kg",
  "Broccoli — 600 g",
  "Eggs — 12 pcs",
];

export function MealPreview() {
  return (
    <section id="planner" className="relative z-10 px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-black/5 bg-white/75 p-6 shadow-xl shadow-black/5 backdrop-blur-xl">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                AI Planner
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-black md:text-4xl">
                Build a full week from your preferences.
              </h2>
            </div>

            <button className="w-fit rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              Generate
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["Goal", "Maintain weight"],
              ["Meals", "3 meals / day"],
              ["Budget", "Medium"],
              ["Preferences", "High protein"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-black/5 bg-[#fffaf3] p-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold text-black">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="shopping"
          className="rounded-[2rem] border border-black/5 bg-[#14120f] p-6 text-white shadow-xl shadow-black/10"
        >
          <p className="text-sm font-semibold text-emerald-300">
            Shopping list
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight">
            Everything grouped for the store.
          </h3>

          <div className="mt-6 space-y-3">
            {shoppingItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
              >
                <span className="text-sm text-white/75">{item}</span>
                <span className="text-xs text-emerald-300">Added</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}