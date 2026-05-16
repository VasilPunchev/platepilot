import { shoppingItems } from "@/data/mealPlan";
import { NutritionSummary } from "./NutritionSummary";
import { PlannerForm } from "./PlannerForm";
import { WeeklyPlan } from "./WeeklyPlan";

export function MealPreview() {
  return (
    <section id="planner" className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold text-orange-600">
            Planner dashboard
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-black md:text-6xl">
            From preferences to a full weekly plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/55">
            PlatePilot turns goals, meals, budget and food preferences into
            recipes, nutrition targets and a shopping list.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <PlannerForm />
            <NutritionSummary />
          </div>

          <WeeklyPlan />
        </div>

        <div
          id="shopping"
          className="mt-4 rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl"
        >
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Shopping list
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-black">
                Everything grouped before you go to the store.
              </h3>
            </div>

            <button className="w-fit rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-black/70 transition hover:-translate-y-0.5 hover:bg-[#fffaf3]">
              Export list
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-5">
            {shoppingItems.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-black/5 bg-[#fffaf3] p-4"
              >
                <p className="text-xs font-medium text-orange-600">
                  {item.category}
                </p>
                <p className="mt-2 text-sm font-bold text-black">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-black/45">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}