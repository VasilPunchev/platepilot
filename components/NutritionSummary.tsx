import { nutritionStats } from "@/data/mealPlan";

export function NutritionSummary() {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-[#14120f] p-6 text-white shadow-xl shadow-black/10">
      <p className="text-sm font-semibold text-orange-300">
        Nutrition summary
      </p>

      <h3 className="mt-2 text-2xl font-bold tracking-tight">
        Balanced targets for the week.
      </h3>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {nutritionStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
          >
            <p className="text-xs text-white/40">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-white/35">{stat.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}