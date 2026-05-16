const options = [
  ["Goal", "Maintain weight"],
  ["Days", "7-day plan"],
  ["Meals", "3 meals / day"],
  ["Budget", "Medium"],
  ["Diet style", "High protein"],
  ["Avoid", "No peanuts"],
];

export function PlannerForm() {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-orange-600">Meal setup</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-black">
            Tell PlatePilot what you need.
          </h3>
        </div>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          Demo
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-black/5 bg-[#fffaf3] p-4"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/35">
              {label}
            </p>
            <p className="mt-2 text-sm font-semibold text-black">{value}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full rounded-full bg-[#14120f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black">
        Generate weekly plan
      </button>
    </div>
  );
}