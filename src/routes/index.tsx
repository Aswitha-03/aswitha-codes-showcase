import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import heroImage from "@/assets/aswitha-developer-workspace.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aswitha B | Aspiring Software Developer" },
      { name: "description", content: "Explore the projects, skills, education, and experience of Aswitha B, an aspiring software developer and Computer Science Engineering student." },
      { property: "og:title", content: "Aswitha B | Aspiring Software Developer" },
      { property: "og:description", content: "A developer portfolio featuring practical full-stack, machine learning, and deep learning projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const skillGroups = [
  { title: "Programming", index: "01", skills: ["Java", "Python"] },
  { title: "Web Technologies", index: "02", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Tools & Platforms", index: "03", skills: ["Git", "GitHub", "Firebase", "MongoDB"] },
  { title: "Core Concepts", index: "04", skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning", "Deep Learning"] },
];

const projects = [
  {
    number: "01",
    title: "Deep Learning-Based Deepfake Audio Detection System",
    description: "Built a deep learning system to detect whether an audio clip is real or AI-generated. Extracted MFCC and Mel Spectrogram features and designed a CNN-BiLSTM architecture with an Attention mechanism for audio classification.",
    tech: ["Python", "Deep Learning", "CNN", "BiLSTM", "Attention Mechanism"],
    features: ["Audio preprocessing", "MFCC and Mel Spectrogram extraction", "CNN feature learning", "BiLSTM sequential learning", "Attention mechanism", "Real vs Deepfake classification"],
    accent: "cyan",
  },
  {
    number: "02",
    title: "Fake News Detection System",
    description: "Developed a machine learning system to classify news articles as fake or real using NLP techniques.",
    tech: ["Python", "NLP", "Scikit-learn"],
    features: ["Text preprocessing", "Tokenization", "Stopword removal", "Text cleaning", "TF-IDF vectorization", "Logistic Regression", "Random Forest"],
    accent: "amber",
  },
  {
    number: "03",
    title: "Smart Flashcard Generator",
    description: "Developed an AI-powered web application that generates flashcards and quizzes from uploaded notes.",
    tech: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB"],
    features: ["Upload notes", "Automatic flashcard generation", "Quiz generation", "Flask REST APIs", "MongoDB integration", "Responsive frontend", "Automated note summarization"],
    accent: "cyan",
  },
];

const certifications = [
  ["Programming in Java", "NPTEL", "2024"],
  ["Cloud Computing (Elite)", "NPTEL", "2024"],
  ["Data Structures and Algorithms using Java", "NPTEL", "2025"],
  ["Introduction to IoT (Elite + Silver)", "NPTEL", "2026"],
  ["Python (Basic)", "HackerRank", "2025"],
  ["Java (Basic)", "HackerRank", "2025"],
  ["JavaScript Basics", "HackerRank", ""],
];

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const links = [
    { label: "LinkedIn", href: "[LINKEDIN_URL]", icon: Linkedin },
    { label: "GitHub", href: "[GITHUB_URL]", icon: Github },
    { label: "LeetCode", href: "[LEETCODE_URL]", icon: Code2 },
  ];
  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} aria-label={label} title={label} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary">
          <Icon size={compact ? 16 : 18} />
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="h-px w-8 bg-primary" />{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>}
    </header>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleForm = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#home" aria-label="Aswitha B home" className="font-display text-lg font-bold text-foreground">AB<span className="text-primary">.</span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-4 py-5 md:hidden"><div className="section-shell flex flex-col gap-1">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-accent-foreground">{item}</a>)}</div></nav>}
      </header>

      <main>
        <section id="home" className="relative flex min-h-[92vh] scroll-mt-16 items-end overflow-hidden border-b border-border pt-24">
          <img src={heroImage} alt="Developer workspace with code displayed on multiple screens" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover object-[63%_center] opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_92%,transparent)_36%,color-mix(in_oklab,var(--background)_20%,transparent)_80%),linear-gradient(0deg,var(--background)_0%,transparent_55%)]" />
          <div className="section-shell relative z-10 grid w-full gap-10 pb-16 pt-20 lg:grid-cols-[1fr_0.34fr] lg:items-end lg:pb-20">
            <div className="fade-rise max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Available for opportunities</div>
              <p className="mb-3 text-sm font-medium text-muted-foreground sm:text-base">Hi, I&apos;m</p>
              <h1 className="text-5xl font-bold leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-8xl">Aswitha B<span className="text-primary">.</span></h1>
              <p className="mt-5 font-display text-xl font-medium text-primary sm:text-2xl">Aspiring Software Developer</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">I build practical web applications and intelligent solutions using Java, Python, Full Stack technologies, Machine Learning, and Deep Learning.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg"><a href="#projects">View My Projects <ArrowDown /></a></Button>
                <Button asChild variant="glass" size="lg"><a href="[RESUME_URL]" download><Download /> Download Resume</a></Button>
                <Button asChild variant="ghost" size="lg"><a href="#contact">Contact Me <ArrowUpRight /></a></Button>
              </div>
              <div className="mt-8"><SocialLinks /></div>
            </div>
            <div className="hidden border-l border-border pl-6 lg:block">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Currently</p>
              <p className="mt-2 text-sm leading-6 text-foreground">Final-year B.E. Computer Science and Engineering student</p>
              <p className="mt-3 text-sm text-primary">Nandha College of Technology</p>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-b border-border py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading eyebrow="About me" title="Learning with intent. Building with purpose." />
            <div className="space-y-7 text-lg leading-8 text-muted-foreground">
              <p>Aspiring Software Developer with a strong foundation in <span className="text-foreground">Java, Python, and Full Stack Web Development</span>, with hands-on experience in Machine Learning and Deep Learning.</p>
              <p>I am a Computer Science Engineering student interested in building practical software solutions, learning new technologies, and solving real-world problems through software.</p>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
                {[['2023–2027','B.E. CSE'],['7.91','CGPA'],['Erode','Tamil Nadu']].map(([value, label]) => <div key={label} className="bg-surface p-5"><p className="font-display text-xl font-semibold text-primary">{value}</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-16 py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Technical toolkit" title="Skills built through practice." copy="A focused foundation across programming, web development, tools, and intelligent systems." />
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => <article key={group.title} className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-raised">
                <div className="mb-8 flex items-start justify-between"><h3 className="text-lg font-semibold">{group.title}</h3><span className="font-mono text-xs text-primary">/{group.index}</span></div>
                <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">{skill}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 border-y border-border bg-surface/50 py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Selected work" title="Projects that turn ideas into working systems." copy="Practical work across deep learning, natural language processing, and full-stack development." />
            <div className="space-y-6">
              {projects.map((project) => <article key={project.title} className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:p-9">
                <div className={`absolute left-0 top-0 h-full w-1 ${project.accent === 'amber' ? 'bg-highlight' : 'bg-primary'}`} />
                <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
                  <div>
                    <p className="mb-5 font-mono text-xs text-muted-foreground">PROJECT / {project.number}</p>
                    <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-foreground md:text-3xl">{project.title}</h3>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className={`rounded-full border px-3 py-1 text-xs font-semibold ${project.accent === 'amber' ? 'border-highlight/30 bg-highlight/10 text-highlight' : 'border-primary/30 bg-primary/10 text-primary'}`}>{tech}</span>)}</div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button asChild variant="glass"><a href="[GITHUB_PROJECT_URL]"><Github /> GitHub</a></Button>
                      <Button asChild variant="ghost"><a href="[LIVE_DEMO_URL]">Live Demo <ArrowUpRight /></a></Button>
                    </div>
                  </div>
                  <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Key features</p>
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{project.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 shrink-0 text-primary" size={15} />{feature}</li>)}</ul>
                  </div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-16 py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading eyebrow="Experience" title="Industry exposure." />
            <div className="relative space-y-10 border-l border-border pl-7">
              {[['Jun 2025 – Jul 2025','Full Stack Development Intern','Azhizen Solutions'],['Jan 2025 – Feb 2025','Full Stack Development Intern','Training Trains, Erode']].map(([date, role, company]) => <article key={company} className="relative"><span className="absolute -left-[2.08rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_var(--surface)]" /><p className="font-mono text-xs text-primary">{date}</p><h3 className="mt-3 text-xl font-semibold">{role}</h3><p className="mt-1 text-sm text-muted-foreground">{company}</p></article>)}
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-16 border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Education" title="Academic foundation." />
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                { icon: GraduationCap, period: '2023 – 2027', title: 'B.E. Computer Science and Engineering', place: 'Nandha College of Technology, Erode', result: 'CGPA: 7.91' },
                { icon: BookOpen, period: '2022 – 2023', title: 'HSC', place: 'Government Girls Higher Secondary School, Mettupalayam', result: 'Percentage: 83%' },
                { icon: BookOpen, period: '2020 – 2021', title: 'SSLC', place: 'Government Girls Higher Secondary School, Mettupalayam', result: '' },
              ].map(({icon: Icon, period, title, place, result}) => <article key={title} className="rounded-lg border border-border bg-card p-6"><Icon className="text-primary" /><p className="mt-8 font-mono text-xs text-primary">{period}</p><h3 className="mt-3 text-lg font-semibold leading-snug">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{place}</p>{result && <p className="mt-5 text-sm font-semibold text-foreground">{result}</p>}</article>)}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 md:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Certifications" title="Continuous learning, verified." />
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map(([name, issuer, year]) => <article key={name} className="bg-background p-6 transition-colors hover:bg-surface-raised"><Award className="text-highlight" size={20} /><h3 className="mt-5 min-h-12 text-base font-semibold leading-6">{name}</h3><div className="mt-5 flex items-center justify-between text-xs"><span className="text-muted-foreground">{issuer}</span>{year && <span className="font-mono text-primary">{year}</span>}</div></article>)}
            </div>
          </div>
        </section>

        <section id="activities" className="border-y border-border bg-surface/40 py-20 md:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading eyebrow="Beyond coursework" title="Curious beyond the classroom." />
            <div className="grid gap-3">
              {["Participated in technical workshops and seminars on emerging technologies.","Presented technical papers at college events.","Attended webinars on machine learning and web development."].map((activity, index) => <div key={activity} className="flex items-start gap-5 rounded-lg border border-border bg-card p-5"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="text-sm leading-6 text-muted-foreground">{activity}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 py-20 md:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading eyebrow="Contact" title="Let’s Connect" copy="I'm open to software development opportunities, internships, and projects where I can learn, contribute, and grow." />
              <div className="space-y-3">
                <a href="mailto:aswithabalu03102006@gmail.com" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"><span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"><Mail size={18} /></span><span className="min-w-0"><span className="block text-xs text-muted-foreground">Email</span><span className="break-all text-foreground">aswithabalu03102006@gmail.com</span></span></a>
                <a href="tel:+918778636779" className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-sm transition-colors hover:border-primary/50"><span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"><Phone size={18} /></span><span><span className="block text-xs text-muted-foreground">Phone</span><span className="text-foreground">+91 8778636779</span></span></a>
              </div>
            </div>
            <form onSubmit={handleForm} className="glass-panel rounded-lg p-6 md:p-8" aria-describedby="form-status">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-medium" htmlFor="name">Name<Input id="name" name="name" required placeholder="Your name" className="h-11 bg-background/50" /></label>
                <label className="grid gap-2 text-sm font-medium" htmlFor="email">Email<Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11 bg-background/50" /></label>
                <label className="grid gap-2 text-sm font-medium" htmlFor="message">Message<Textarea id="message" name="message" required placeholder="Write your message..." className="min-h-36 resize-y bg-background/50" /></label>
                <Button type="submit" variant="hero" size="lg" disabled className="mt-1 w-full"><Send /> Send Message</Button>
                <p id="form-status" className="text-center text-xs text-muted-foreground">Message sending will be available when an email service is connected.</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-5 sm:flex-row"><p className="text-center text-xs text-muted-foreground sm:text-left">© 2026 Aswitha B. Built with passion for technology.</p><SocialLinks compact /></div>
      </footer>
    </div>
  );
}