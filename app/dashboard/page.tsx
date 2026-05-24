import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email")
    .eq("id", user.id)
    .single();

  return (
    <main className="min-h-screen bg-[#fffaf3] px-6 py-24 text-[#14120f]">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-xl shadow-black/5">
          <p className="text-sm font-semibold text-orange-600">
            PlatePilot Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Welcome, {profile?.full_name || user.email}
          </h1>

          <p className="mt-4 max-w-2xl text-black/55">
            This is the protected dashboard. Next we will add user preferences,
            saved meal plans and shopping lists.
          </p>
        </div>
      </div>
    </main>
  );
}