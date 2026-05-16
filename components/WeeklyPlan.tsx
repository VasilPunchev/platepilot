import { weeklyMeals } from "@/data/mealPlan";

export function WeeklyPlan() {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Weekly plan</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-black">
            Meals organized by day.
          </h3>
        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Ready
        </span>
      </div>

      <div className="space-y-4">
        {weeklyMeals.map((day) => (
          <div
            key={day.day}
            className="rounded-2xl border border-black/5 bg-[#fffaf3] p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-bold text-black">{day.day}</h4>
              <span className="text-xs text-black/40">{day.calories}</span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {day.meals.map((meal) => (
                <div
                  key={`${day.day}-${meal.type}`}
                  className="rounded-2xl bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold text-orange-600">
                    {meal.type}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-black">
                    {meal.name}
                  </p>
                  <p className="mt-1 text-xs text-black/40">{meal.protein}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}