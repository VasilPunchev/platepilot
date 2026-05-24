"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setIsLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        email,
        full_name: fullName,
      });
    }

    setMessage("Account created. You can now log in.");
    setIsLoading(false);
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#fffaf3] px-6 py-24 text-[#14120f]">
      <div className="mx-auto max-w-md rounded-[2rem] border border-black/5 bg-white/80 p-8 shadow-xl shadow-black/5">
        <h1 className="text-3xl font-bold tracking-tight">Create account</h1>
        <p className="mt-3 text-sm leading-6 text-black/55">
          Start saving meal preferences and weekly plans.
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-semibold">Full name</label>
            <input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fffaf3] px-4 py-3 outline-none"
              placeholder="Vasil Punchev"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fffaf3] px-4 py-3 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#fffaf3] px-4 py-3 outline-none"
              placeholder="Minimum 6 characters"
              required
            />
          </div>

          {message && <p className="text-sm text-orange-700">{message}</p>}

          <button
            disabled={isLoading}
            className="w-full rounded-full bg-[#14120f] px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>
      </div>
    </main>
  );
}