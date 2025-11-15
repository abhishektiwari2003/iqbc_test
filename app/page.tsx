"use client";

import {
  Brain,
  Download,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const heroHighlights = [
  "Curriculum-aligned checks for classes 5-10",
  "Adaptive difficulty for Maths, Science & English",
  "Visual explanations and progress reports",
];

const subjectTabs = [
  {
    id: "maths",
    title: "Maths",
    accent: "from-[#4F46E5]/10 via-white to-white",
    prompt: "A square park has a side of 42 m. How many meters of fencing are required?",
    skill: "Geometry • Perimeter",
    insight: "IQBC spots formula gaps and revisits prerequisite topics from earlier classes.",
  },
  {
    id: "science",
    title: "Science",
    accent: "from-[#0EA5E9]/10 via-white to-white",
    prompt: "Why do leaves of a forced submerged plant carry trapped bubbles?",
    skill: "Biology • Photosynthesis",
    insight: "See concept visualisations, voice notes, and quick summaries crafted for revision.",
  },
  {
    id: "english",
    title: "English",
    accent: "from-[#EC4899]/10 via-white to-white",
    prompt: "Rewrite the sentence in active voice: “The poem was memorised by Aisha.”",
    skill: "Grammar • Voice",
    insight: "Stress-free practice with hints, vocabulary boosts, and instant scoring.",
  },
];

const stats = [
  { label: "Students guided", value: "48K+" },
  { label: "Concept drills", value: "1,200+" },
  { label: "Adaptive journeys", value: "3" },
  { label: "Daily practice streaks", value: "14 days avg." },
];

const journey = [
  {
    title: "Warm-up IQ Check",
    copy: "Quick 3-minute quiz diagnoses where each learner stands for every subject.",
    icon: Sparkles,
  },
  {
    title: "Personalised Boost Plan",
    copy: "Science-backed microplans recommend question sets and explainer cards daily.",
    icon: Brain,
  },
  {
    title: "Track & Celebrate",
    copy: "Beautiful progress boards, badges, and parent-ready reports after every attempt.",
    icon: Trophy,
  },
];

const faqs = [
  {
    q: "Who can take the IQBC Test?",
    a: "Students from classes 5 to 10 who want to refresh foundational Maths, Science, and English concepts.",
  },
  {
    q: "Is the test free?",
    a: "Yes. The IQBC app offers complimentary baseline tests and insight reports. Premium plans unlock deep practise sets.",
  },
  {
    q: "How long does it take?",
    a: "Each subject check lasts 12–15 minutes with quick breaks and motivational nudges.",
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eef2ff] via-white to-[#e0f2fe] text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] z-0 blur-3xl">
        <div className="mx-auto h-72 w-72 rounded-full bg-[#a855f7]/20" />
        <div className="mx-auto mt-[-4rem] h-96 w-96 rounded-full bg-[#38bdf8]/20" />
      </div>
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-10 lg:px-12">
        <Hero />
        <Subjects />
        <Journey />
        <Promo />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <motion.section
      className="grid items-center gap-10 lg:grid-cols-2"
      {...sectionMotion}
    >
      <div className="space-y-8">
        <Badge className="w-fit bg-black/90 text-white shadow-lg">
          IQBC • Intelligent Quality Base Check
        </Badge>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Your smarter recap test for Maths, Science & English basics.
          </h1>
          <p className="text-lg text-slate-600">
            IQBC helps learners revisit fundamental ideas from previous classes,
            find small gaps, and get confident before boards or olympiads. The
            entire experience lives inside our beautifully crafted mobile app.
          </p>
        </div>
        <ul className="grid gap-3 text-base text-slate-700">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#4F46E5]" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <StoreButton store="play" href="https://play.google.com/store/apps" />
          <StoreButton store="apple" href="https://www.apple.com/app-store/" />
        </div>
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-[#C084FC] to-[#60A5FA] opacity-20 blur-3xl" />
        <Card className="rounded-[32px] border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl">
          <CardContent className="space-y-6 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Today
                </p>
                <p className="text-3xl font-semibold text-slate-900">IQBC</p>
              </div>
              <Badge className="rounded-full bg-lime-500/20 text-lime-700">
                92% Ready
              </Badge>
            </div>
            <div className="space-y-4 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-600">
                LIVE SUBMISSION
              </p>
              <p className="text-lg text-slate-900">
                Aarav just aced the Science heat map. Next up: English voice &
                tone capsules!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/70 p-4">
                  <p className="text-2xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#6366F1] p-5 text-white shadow-lg">
              <Star className="h-10 w-10" />
              <div>
                <p className="font-semibold">“Most aesthetic school prep app”</p>
                <p className="text-sm text-white/80">Play Store education • 4.9★</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}

function Subjects() {
  return (
    <motion.section className="space-y-6" {...sectionMotion}>
      <div className="space-y-3 text-center">
        <Badge className="bg-white/70 text-slate-600 shadow-sm">
          Built for Grades 5 – 10
        </Badge>
        <h2 className="text-3xl font-semibold text-slate-900">
          Three subjects. One confidence-building ritual.
        </h2>
        <p className="text-slate-600">
          Swipe through sample prompts and see how IQBC adapts to each subject.
        </p>
      </div>
      <Tabs defaultValue="maths" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-3 bg-white/60">
          {subjectTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {subjectTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-6">
            <Card className="border border-white/80 bg-gradient-to-br p-[1px]">
              <CardContent
                className={`space-y-6 rounded-3xl bg-gradient-to-br ${tab.accent} p-8`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                    {tab.skill}
                  </p>
                  <Badge className="bg-slate-900 text-white">Adaptive</Badge>
                </div>
                <p className="text-2xl font-medium text-slate-900">{tab.prompt}</p>
                <div className="rounded-2xl bg-white/80 p-5 text-slate-700 shadow-inner">
                  {tab.insight}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </motion.section>
  );
}

function Journey() {
  return (
    <motion.section className="space-y-10" {...sectionMotion}>
      <div className="space-y-3 text-center">
        <Badge className="bg-[#4F46E5]/10 text-[#4F46E5]">
          How IQBC flows
        </Badge>
        <h2 className="text-3xl font-semibold text-slate-900">
          Designed like a mini learning festival.
        </h2>
        <p className="text-slate-600">
          Each session blends diagnostics, micro lessons, and friendly nudges.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {journey.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-white/70 bg-white/80 p-[1px]">
              <CardContent className="space-y-4 rounded-2xl bg-white/90 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#38BDF8] text-white shadow-lg">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {step.copy}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Promo() {
  return (
    <motion.section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]" {...sectionMotion}>
      <Card className="border border-white/80 bg-white/90 shadow-2xl">
        <CardContent className="grid gap-6 rounded-3xl bg-gradient-to-br from-[#0EA5E9]/10 via-white to-white p-10">
          <Badge className="w-fit bg-emerald-500/20 text-emerald-700">
            Mobile-first experience
          </Badge>
          <h2 className="text-3xl font-semibold text-slate-900">
            Download IQBC to attempt the latest diagnostic capsules.
          </h2>
          <p className="text-slate-600">
            Available on Play Store and App Store with synced progress across devices.
            Enable reminders, dark mode, and bilingual instructions inside the app.
          </p>
          <div className="flex flex-wrap gap-4">
            <StoreButton store="play" variant="secondary" href="https://play.google.com/store/apps" />
            <StoreButton store="apple" variant="secondary" href="https://www.apple.com/app-store/" />
          </div>
        </CardContent>
      </Card>
      <Card className="border border-white/70 bg-white/80 backdrop-blur-xl">
        <CardContent className="space-y-4 rounded-3xl bg-slate-900 p-8 text-white">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">
            Weekly Spotlight
          </p>
          <h3 className="text-2xl font-semibold">
            “IQBC keeps my daughter ahead without coaching pressure.”
          </h3>
          <p className="text-white/70">
            — Parent of a Class 8 student, Bengaluru
          </p>
          <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/70">
            Tip: Turn on Focus Mode for streak-protected sessions and celebratory confetti
            when learners cross 80% mastery.
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

function Faq() {
  return (
    <motion.section className="space-y-8" {...sectionMotion}>
      <div className="space-y-3 text-center">
        <Badge className="bg-white/70 text-slate-600">Questions</Badge>
        <h2 className="text-3xl font-semibold text-slate-900">IQBC in a nutshell.</h2>
        <p className="text-slate-600">
          Everything you need to know before downloading the app.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {faqs.map((faq) => (
          <Card key={faq.q} className="border border-white/70 bg-white/85 p-[1px]">
            <CardContent className="space-y-3 rounded-2xl bg-white/95 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <section className="flex flex-col gap-4 border-t border-white/60 py-10 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} IQBC • Intelligent Quality Base Check</p>
      <p>Build curiosity. Test smart. Glow with confidence.</p>
    </section>
  );
}

type StoreButtonProps = {
  store: "play" | "apple";
  href: string;
  variant?: "default" | "secondary";
};

function StoreButton({
  store,
  href,
  variant = "default",
}: StoreButtonProps) {
  const isPlay = store === "play";
  const label = isPlay ? "Get it on" : "Download on the";
  const storeName = isPlay ? "Google Play" : "App Store";
  const mutedText =
    variant === "secondary" ? "text-slate-500" : "text-white/70";
  const strongText =
    variant === "secondary" ? "text-slate-900" : "text-white";
  const iconShell =
    variant === "secondary" ? "bg-slate-900/5 text-slate-900" : "bg-white/20 text-white";

  return (
    <Button
      asChild
      className={`h-16 rounded-2xl px-6 text-left text-base ${variant === "secondary" ? "bg-white text-slate-900" : "bg-slate-900 text-white"
        }`}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${iconShell}`}>
            {isPlay ? (
              <Play className="h-6 w-6" />
            ) : (
              <Download className="h-6 w-6" />
            )}
          </div>
          <div className="leading-5">
            <p className={`text-xs uppercase ${mutedText}`}>{label}</p>
            <p className={`text-lg font-semibold ${strongText}`}>{storeName}</p>
          </div>
        </div>
      </a>
    </Button>
  );
}
