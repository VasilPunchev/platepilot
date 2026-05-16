import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MealPreview } from "@/components/MealPreview";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <BackgroundGlow />
      <Header />

      <main className="min-h-screen overflow-x-hidden bg-[#fffaf3] text-[#14120f]">
        <Hero />
        <HowItWorks />
        <MealPreview />
      </main>
    </>
  );
}