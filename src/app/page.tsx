"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Compass,
  Layers3,
  Mail,
  Menu,
  Sparkles,
  Zap,
  ChevronRight,
  Phone,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "06+", label: "Years shaping interfaces" },
  { value: "48", label: "Shipping iterations" },
  { value: "99%", label: "Focus on clarity" },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Design Systems",
  "Performance Tuning",
  "Accessibility",
  "API Integration",
];

const projects = [
  {
    title: "Orbit Commerce",
    tag: "E-commerce Experience",
    description:
      "A cinematic storefront with layered cards, premium motion, and conversion-focused product storytelling.",
  },
  {
    title: "Nebula Studio",
    tag: "Creative Portfolio",
    description:
      "An expressive portfolio system that turns case studies into a visually guided narrative.",
  },
  {
    title: "Pulse Dashboard",
    tag: "Data Interface",
    description:
      "A clean monitoring dashboard with compact density, calm hierarchy, and fast scannability.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Design-led frontend systems",
    text: "Built fluid interfaces that balance personality, usability, and maintainable code structure.",
  },
  {
    year: "2025",
    title: "Next.js production UI",
    text: "Shipped responsive app shells, motion patterns, and reusable component architecture.",
  },
  {
    year: "2024",
    title: "Visual identity experiments",
    text: "Explored editorial layouts, glass surfaces, and premium typographic rhythm.",
  },
];

function SectionLabel({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-md">
      <Icon className="h-4 w-4" />
      <span>{title}</span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060816] text-white selection:bg-cyan-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_26%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.16]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">La Studio</p>
              <p className="text-xs text-white/50">Portfolio Interface</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
          >
            Let’s talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-md"
            >
              <Zap className="h-4 w-4" />
              Available for modern frontend work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Building portfolio experiences that feel <span className="text-cyan-300">calm</span>,
              <span className="text-fuchsia-300"> sharp</span>, and memorable.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            >
              I design and build clean, high-contrast interfaces with strong hierarchy, smooth motion,
              and a premium visual rhythm. The goal is simple: make the content easy to read, fast to
              explore, and pleasant to stay on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                View projects <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
              >
                Contact me <Mail className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.38 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <p className="text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs text-white/50">Interface preview</span>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1022]/90 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Current focus</p>
                      <p className="mt-1 text-xl font-semibold">Visual systems for modern brands</p>
                    </div>
                    <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                      <Layers3 className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-white/55">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-3">Clarity</div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-3">Motion</div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-3">Usability</div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Workflow</p>
                    <div className="mt-4 space-y-4">
                      {[
                        ["Discovery", "Understand goals and structure"],
                        ["Design", "Build a clear visual system"],
                        ["Delivery", "Ship with polish and motion"],
                      ].map(([a, b]) => (
                        <div key={a} className="flex items-start gap-3">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                          <div>
                            <p className="text-sm font-medium text-white">{a}</p>
                            <p className="text-sm text-white/55">{b}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/15 to-cyan-400/10 p-5">
                    <p className="text-sm text-white/55">Signal</p>
                    <p className="mt-2 text-4xl font-semibold">∞</p>
                    <p className="mt-3 text-sm leading-6 text-white/65">
                      Design that keeps the layout crisp while still feeling expressive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <SectionLabel icon={Compass} title="About" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">Profile</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">A portfolio built like a curated exhibit 🧭</h2>
            <p className="mt-4 leading-7 text-white/68">
              This layout uses strong spacing, glass surfaces, and intentional contrast to create a
              premium yet comfortable reading experience. It is designed for developers, designers,
              and creators who want their work to feel structured and distinct.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.year} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm text-cyan-200">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <SectionLabel icon={Code2} title="Skills" />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 backdrop-blur-md">
            <h2 className="text-3xl font-semibold tracking-tight">Core stack</h2>
            <p className="mt-4 max-w-xl leading-7 text-white/65">
              The stack below is optimized for clean implementation, motion systems, and scalable UI
              architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Fast UI", desc: "Lean components and minimal visual noise." },
              { title: "Responsive", desc: "Works across desktop, tablet, and mobile." },
              { title: "Smooth motion", desc: "Subtle transitions that guide attention." },
              { title: "Accessible", desc: "Readable contrast and usable hierarchy." },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <SectionLabel icon={BriefcaseBusiness} title="Projects" />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                  0{index + 1}
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/45 transition group-hover:text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-200/80">{project.tag}</p>
              <p className="mt-4 text-sm leading-7 text-white/65">{project.description}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
              <p className="mt-4 text-sm text-white/50">
                Minimal. Sharp. Designed to guide the eye without distraction.
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-fuchsia-500/10 p-6 backdrop-blur-md">
            <SectionLabel icon={Mail} title="Contact" />
            <h2 className="text-3xl font-semibold tracking-tight">Let’s build something visually strong.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/68">
              Open for freelance work, portfolio redesigns, dashboard systems, and interactive landing pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@studio.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                hello@studio.com <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                +62 812-3456-7890 <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Social links</h3>
              <Menu className="h-5 w-5 text-white/45" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/45 lg:px-8">
        Crafted with Next.js, TypeScript, and smooth motion.
      </footer>
    </main>
  );
}
