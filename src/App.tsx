import { useState, useEffect } from "react";
import logoImg from "@/imports/logo.png";

const NAV_LINKS = [
  "Research",
  "Manifesto",
  "About",
  "Progress",
  "Contact",
];

const STATS = [
  { label: "Independent" },
  { label: "Evidence-Based" },
  { label: "Africa Focused" },
  { label: "Technology Driven" },
];

const RESEARCH_AREAS = [
  {
    id: "01",
    title: "Artificial Intelligence",
    desc:
      "Researching the responsible adoption of artificial intelligence across African industries with a focus on governance, productivity and business transformation.",
    tag: "AI",
    publications: 0,
    imgId: "photo-1677442136019-21780ecad995",
  },
  {
    id: "02",
    title: "Cloud Computing",
    desc:
      "Exploring cloud infrastructure and distributed computing that enables organisations to scale efficiently across African markets.",
    tag: "Cloud",
    publications: 0,
    imgId: "photo-1451187580459-43490279c0fa",
  },
  {
    id: "03",
    title: "Compliance & Regulation",
    desc:
      "Investigating regulatory technology, governance and digital compliance that simplify operating across multiple African jurisdictions.",
    tag: "RegTech",
    publications: 0,
    imgId: "photo-1450101499163-c8848c66ca85",
  },
  {
    id: "04",
    title: "Cross-Border Expansion",
    desc:
      "Understanding how technology enables businesses to enter, navigate and expand throughout Africa.",
    tag: "Expansion",
    publications: 0,
    imgId: "photo-1526772662000-3f88f10405ff",
  },
  {
    id: "05",
    title: "Digital Infrastructure",
    desc:
      "Researching digital public infrastructure, connectivity, cloud platforms and data ecosystems that underpin economic growth.",
    tag: "Infrastructure",
    publications: 0,
    imgId: "photo-1516321318423-f06f85e504b3",
  },
  {
    id: "06",
    title: "Payments & Financial Technology",
    desc:
      "Exploring payment systems, financial infrastructure and cross-border finance enabling African trade.",
    tag: "FinTech",
    publications: 0,
    imgId: "photo-1556740749-887f6717d7e4",
  },
];

const RESEARCH_PROGRESS = [
  {
    date: "2026",
    category: "Founded",
    headline: "Africa Expansion Lab established.",
  },
  {
    date: "2026",
    category: "Manifesto",
    headline: "Founding manifesto published.",
  },
  {
    date: "2026",
    category: "Website",
    headline: "Official website launched.",
  },
  {
    date: "2026",
    category: "Research",
    headline: "First publication currently underway.",
  },
];

export default function App() {
  const [activeResearch, setActiveResearch] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="bg-white text-[#0a0a0a] min-h-screen"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* NAVBAR */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-16 px-6 md:px-10 flex items-center justify-between">

          <a href="#" className="flex items-center gap-3">

            <img
              src={logoImg}
              alt="Africa Expansion Lab logo"
              className="w-9 h-9 object-contain"
            />

            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-xl"
            >
              Africa Expansion Lab
            </span>

          </a>

          <nav className="hidden md:flex gap-8 items-center">

            {NAV_LINKS.map((link) => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-black/60 hover:text-black transition"
              >
                {link}
              </a>

            ))}

            <a
              href="#manifesto"
              className="px-5 py-2 bg-black text-white rounded-sm hover:bg-[#1a3bcc] transition"
            >
              Read Manifesto
            </a>

          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            ☰
          </button>

        </div>

        {menuOpen && (

          <div className="md:hidden bg-white border-t">

            {NAV_LINKS.map((link) => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-6 py-4 border-b"
              >
                {link}
              </a>

            ))}

          </div>

        )}

      </header>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center max-w-[1400px] mx-auto px-6 md:px-10">

        <div
          className="absolute right-0 top-10 text-[22vw] text-[#f3f3f3] font-bold pointer-events-none"
          style={{ fontFamily: "var(--font-display)" }}
        >
          2026
        </div>

        <div className="max-w-[780px] relative z-10">

          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="uppercase tracking-[0.25em] text-[11px] text-[#1a3bcc] mb-6"
          >
            Independent Research Organisation
          </div>

          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9]"
          >
            Researching how
            <br />
            technology enables
            <br />
            <em className="text-[#1a3bcc]">
              Africa to grow.
            </em>
          </h1>

          <p className="mt-8 text-xl text-black/60 leading-relaxed max-w-[650px]">

            Africa Expansion Lab is an independent research organisation
            investigating how technology enables businesses to navigate,
            scale and grow across the African continent.

          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <a
              href="#research"
              className="px-7 py-4 bg-black text-white rounded-sm hover:bg-[#1a3bcc]"
            >
              Explore Research
            </a>

            <a
              href="#manifesto"
              className="px-7 py-4 border border-black/20 rounded-sm hover:bg-black/5"
            >
              Read Manifesto
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="border-y border-black/10">

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4">

          {STATS.map((item, i) => (

            <div
              key={item.label}
              className="py-10 px-8 border-r last:border-r-0 border-black/10 flex items-center gap-5 group"
            >

              <div
                style={{ fontFamily: "var(--font-mono)" }}
                className="text-[11px] text-black/20 shrink-0 tabular-nums"
              >
                0{i + 1}
              </div>

              <div className="w-px h-8 bg-black/10 shrink-0" />

              <div
                style={{ fontFamily: "var(--font-mono)" }}
                className="uppercase tracking-widest text-xs text-black/70 group-hover:text-[#1a3bcc] transition-colors duration-200"
              >
                {item.label}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* TICKER */}

      <div className="bg-black text-white overflow-hidden py-3">

        <div
          className="whitespace-nowrap flex gap-16 animate-[ticker_28s_linear_infinite]"
          style={{ animation: "ticker 28s linear infinite" }}
        >

          {[...Array(3)].flatMap((_, rep) =>
            RESEARCH_AREAS.map((area) => (

              <span
                key={`${rep}-${area.id}`}
                className="uppercase tracking-widest text-xs text-white/60"
              >
                ◆ {area.title}
              </span>

            ))
          )}

        </div>

      </div>

      <style>{`
      @keyframes ticker{
      from{transform:translateX(0);}
      to{transform:translateX(-33.33%);}
      }
      `}</style>

      {/* RESEARCH SECTION STARTS BELOW */}
      {/* RESEARCH AREAS */}

<section
  id="research"
  className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto"
>
  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

    <div>

      <div
        style={{ fontFamily: "var(--font-mono)" }}
        className="text-[11px] uppercase tracking-[0.2em] text-[#1a3bcc] mb-4 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-[#1a3bcc]" />
        Research Areas
      </div>

      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[clamp(2.2rem,5vw,4rem)] leading-tight"
      >
        Technology domains,
        <br />
        one research mission.
      </h2>

    </div>

    <div className="max-w-lg">

      <p className="text-black/60 leading-relaxed">

        Africa Expansion Lab researches the technologies
        enabling organisations to navigate, scale and grow
        throughout the African continent. Our work spans
        multiple technology domains while remaining focused
        on practical business application.

      </p>

    </div>

  </div>

  {/* TABS */}

  <div className="flex overflow-x-auto border border-black/10">

    {RESEARCH_AREAS.map((area, index) => (

      <button
        key={area.id}
        onClick={() => setActiveResearch(index)}
        className={`flex-1 min-w-[180px] px-6 py-4 text-left transition

        ${
          activeResearch === index
            ? "bg-black text-white"
            : "bg-white hover:bg-black/5"
        }
        `}
      >

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="uppercase tracking-widest text-[10px] opacity-60 mb-2"
        >
          {area.id}
        </div>

        <div className="font-medium">
          {area.title}
        </div>

      </button>

    ))}

  </div>

  {/* ACTIVE PANEL */}

  {RESEARCH_AREAS.map((area, index) => (

    <div
      key={area.id}
      className={activeResearch === index ? "block" : "hidden"}
    >

      <div className="grid lg:grid-cols-[1fr_1.2fr] border-x border-b border-black/10">

        {/* LEFT */}

        <div className="p-10 lg:p-14 flex flex-col justify-between">

          <div>

            <span className="inline-block px-3 py-1 bg-[#f0f3ff] text-[#1a3bcc] uppercase tracking-widest text-[10px] mb-6">

              {area.tag}

            </span>

            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl mb-6"
            >
              {area.title}
            </h3>

            <p className="text-black/60 leading-relaxed max-w-md">

              {area.desc}

            </p>

          </div>

          <div className="mt-10 flex items-center justify-between">

            <div>

              <div
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl text-[#1a3bcc]"
              >
                Research
              </div>

              <div
                style={{ fontFamily: "var(--font-mono)" }}
                className="uppercase tracking-widest text-[10px] text-black/40 mt-2"
              >
                Current Focus
              </div>

            </div>

            <button
              className="px-6 py-3 border border-black/20 rounded-sm hover:bg-black hover:text-white transition"
            >
              Learn More →
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative overflow-hidden min-h-[500px]">

          <img
            src={`https://images.unsplash.com/${area.imgId}?auto=format&fit=crop&w=1200&q=80`}
            alt={area.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

            <div
              style={{ fontFamily: "var(--font-mono)" }}
              className="uppercase tracking-widest text-[10px] mb-3 text-white/70"
            >
              Active Research Area
            </div>

            <div
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl"
            >
              {area.title}
            </div>

            <p className="mt-3 max-w-lg text-white/80 leading-relaxed">

              Exploring emerging opportunities, challenges,
              technologies and operating environments across
              the African continent.

            </p>

          </div>

        </div>

      </div>

    </div>

  ))}

</section>
{/* ABOUT AEL */}

<section
  id="about"
  className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto"
>
  <div
    style={{ fontFamily: "var(--font-mono)" }}
    className="text-[11px] uppercase tracking-[0.2em] text-[#1a3bcc] mb-4 flex items-center gap-3"
  >
    <span className="w-8 h-px bg-[#1a3bcc]" />
    About Africa Expansion Lab
  </div>

  <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-20">

    {/* LEFT */}

    <div>

      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[clamp(2.3rem,5vw,4rem)] leading-tight mb-8"
      >
        Building
        <br />
        independent
        <br />
        <em className="text-[#1a3bcc]">
          knowledge.
        </em>
      </h2>

      <p className="text-black/60 leading-relaxed">

        Africa Expansion Lab exists to better understand how
        technology enables organisations to navigate, scale,
        and grow across the African continent through
        independent, evidence-based research.

      </p>

    </div>

    {/* RIGHT */}

    <div className="space-y-10">

      <div className="border-l-2 border-[#1a3bcc] pl-6">

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl mb-3"
        >
          Independent
        </h3>

        <p className="text-black/60 leading-relaxed">
          We pursue research driven by evidence, curiosity and
          practical relevance rather than political,
          ideological or commercial interests.
        </p>

      </div>

      <div className="border-l-2 border-[#1a3bcc] pl-6">

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl mb-3"
        >
          Africa Focused
        </h3>

        <p className="text-black/60 leading-relaxed">
          Every research programme seeks to better understand
          Africa's diverse operating environments, recognising
          that each country presents unique opportunities and
          challenges.
        </p>

      </div>

      <div className="border-l-2 border-[#1a3bcc] pl-6">

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl mb-3"
        >
          Technology Driven
        </h3>

        <p className="text-black/60 leading-relaxed">
          Technology is not our destination—it is the lens
          through which we study regulation, infrastructure,
          payments, artificial intelligence and business
          expansion across Africa.
        </p>

      </div>

      <div className="border-l-2 border-[#1a3bcc] pl-6">

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl mb-3"
        >
          Long-Term Vision
        </h3>

        <p className="text-black/60 leading-relaxed">
          Africa Expansion Lab is being built as a long-term
          institution dedicated to producing research that
          remains valuable as technology and markets continue
          to evolve.
        </p>

      </div>

    </div>

  </div>

</section>

{/* VISION */}

<section className="bg-[#0a0a0a] text-white py-28 px-6 md:px-10">

  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1fr] gap-20 items-center">

    <div>

      <div
        style={{ fontFamily: "var(--font-mono)" }}
        className="uppercase tracking-[0.2em] text-[11px] text-[#4b74ff] mb-6"
      >
        Our Vision
      </div>

      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[clamp(3rem,6vw,5.5rem)] leading-[0.92]"
      >
        Building
        <br />
        knowledge for
        <br />
        <em className="text-[#4b74ff]">
          Africa's future.
        </em>
      </h2>

      <p className="mt-8 text-white/60 leading-relaxed max-w-lg">

        We believe that better information enables better
        decisions. Through independent research, responsible
        communication and open knowledge sharing, Africa
        Expansion Lab seeks to contribute to a stronger body
        of knowledge supporting organisations operating
        throughout Africa.

      </p>

    </div>

    <div className="grid grid-cols-2 gap-px bg-white/10">

      {[
        {
          title: "Independent",
          desc: "Evidence-based research."
        },
        {
          title: "Accessible",
          desc: "Knowledge for everyone."
        },
        {
          title: "Collaborative",
          desc: "Ideas improve through discussion."
        },
        {
          title: "Long-Term",
          desc: "Building an enduring institution."
        },
      ].map((item) => (

        <div
          key={item.title}
          className="bg-[#0a0a0a] border border-white/10 p-8"
        >

          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl text-[#4b74ff] mb-4"
          >
            {item.title}
          </h3>

          <p className="text-white/50 leading-relaxed">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* RESEARCH PROGRESS */}

<section
  id="progress"
  className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto"
>
  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

    <div>

      <div
        style={{ fontFamily: "var(--font-mono)" }}
        className="uppercase tracking-[0.2em] text-[11px] text-[#1a3bcc] mb-4 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-[#1a3bcc]" />
        Research Progress
      </div>

      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[clamp(2.5rem,5vw,4rem)] leading-tight"
      >
        Building an
        <br />
        enduring research
        <br />
        institution.
      </h2>

    </div>

    <p className="max-w-lg text-black/60 leading-relaxed">

      Africa Expansion Lab is in its foundational stage.
      Every publication, interview and research programme
      contributes toward building a long-term body of
      knowledge focused on technology across Africa.

    </p>

  </div>

  {/* TIMELINE */}

  <div className="border border-black/10">

    {RESEARCH_PROGRESS.map((item, index) => (

      <div
        key={index}
        className={`grid md:grid-cols-[180px_180px_1fr] gap-8 px-8 py-8 ${
          index !== RESEARCH_PROGRESS.length - 1
            ? "border-b border-black/10"
            : ""
        }`}
      >

        <div
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl text-[#1a3bcc]"
        >
          {item.date}
        </div>

        <div>

          <span
            style={{ fontFamily: "var(--font-mono)" }}
            className="uppercase tracking-widest text-[10px] bg-[#f0f3ff] px-3 py-1 inline-block text-[#1a3bcc]"
          >
            {item.category}
          </span>

        </div>

        <div>

          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl mb-2"
          >
            {item.headline}
          </h3>

          <p className="text-black/55 leading-relaxed">

            This milestone forms part of Africa Expansion
            Lab's long-term commitment to producing
            independent, evidence-based research that
            supports organisations operating throughout
            the African continent.

          </p>

        </div>

      </div>

    ))}

  </div>

</section>

{/* FEATURED MANIFESTO */}

<section
  id="manifesto"
  className="py-24 bg-[#fafafa] border-y border-black/10"
>

  <div className="max-w-[1400px] mx-auto px-6 md:px-10">

    <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center">

      <div>

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="uppercase tracking-[0.2em] text-[11px] text-[#1a3bcc] mb-5"
        >
          Featured Publication
        </div>

        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight mb-8"
        >
          The Africa
          <br />
          Expansion Lab
          <br />
          Manifesto.
        </h2>

        <p className="text-black/60 leading-relaxed max-w-xl">

          Our founding manifesto establishes the research
          philosophy, organisational principles, AI
          principles and long-term aspirations that guide
          every publication produced by Africa Expansion
          Lab.

        </p>

        <div className="mt-10 flex gap-4 flex-wrap">

          <button className="px-7 py-3 bg-black text-white rounded-sm hover:bg-[#1a3bcc] transition">

            Read Manifesto

          </button>

          <button className="px-7 py-3 border border-black/20 rounded-sm hover:bg-white">

            Download PDF

          </button>

        </div>

      </div>

      {/* CARD */}

      <div className="bg-white border border-black/10 shadow-sm">

        <div className="border-b border-black/10 px-8 py-6">

          <div
            style={{ fontFamily: "var(--font-mono)" }}
            className="uppercase tracking-widest text-[10px] text-[#1a3bcc]"
          >
            Founding Document
          </div>

        </div>

        <div className="p-8 space-y-6">

          {[
            "Guiding Statement",
            "Mission",
            "Research Philosophy",
            "Research Principles",
            "AI Principles",
            "Organisational Principles",
            "Our Aspirations",
          ].map((chapter) => (

            <div
              key={chapter}
              className="flex justify-between items-center border-b border-black/5 pb-4"
            >

              <span className="font-medium">

                {chapter}

              </span>

              <span className="text-[#1a3bcc]">

                →

              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
{/* LATEST UPDATES */}

<section className="py-24 px-6 md:px-10 max-w-[1400px] mx-auto">

  <div
    style={{ fontFamily: "var(--font-mono)" }}
    className="uppercase tracking-[0.2em] text-[11px] text-[#1a3bcc] mb-4 flex items-center gap-3"
  >
    <span className="w-8 h-px bg-[#1a3bcc]" />
    Latest Updates
  </div>

  <h2
    style={{ fontFamily: "var(--font-display)" }}
    className="text-[clamp(2.2rem,5vw,4rem)] mb-14"
  >
    Building in public.
  </h2>

  <div className="border border-black/10">

    {[
      {
        date: "July 2026",
        type: "Manifesto",
        title: "Publication of the Africa Expansion Lab founding manifesto."
      },
      {
        date: "2026",
        type: "Website",
        title: "Official website launched."
      },
      {
        date: "In Progress",
        type: "Research",
        title: "First research publication currently under development."
      },
      {
        date: "Future",
        type: "Community",
        title: "Building a community of founders, researchers and practitioners."
      }
    ].map((item, index) => (

      <div
        key={index}
        className={`grid md:grid-cols-[180px_180px_1fr] gap-8 px-8 py-7 ${
          index !== 3 ? "border-b border-black/10" : ""
        }`}
      >

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="uppercase tracking-widest text-[10px] text-black/40"
        >
          {item.date}
        </div>

        <span
          className="inline-block px-3 py-1 bg-[#f0f3ff] text-[#1a3bcc] uppercase tracking-widest text-[10px] h-fit"
        >
          {item.type}
        </span>

        <h3
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl"
        >
          {item.title}
        </h3>

      </div>

    ))}

  </div>

</section>

{/* CTA */}

<section className="border-y border-black/10 bg-[#f0f3ff] py-24 px-6 md:px-10">

  <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-12 items-center">

    <div>

      <h2
        style={{ fontFamily: "var(--font-display)" }}
        className="text-[clamp(2.5rem,5vw,4rem)] leading-tight mb-5"
      >
        Building knowledge
        <br />
        for Africa's future.
      </h2>

      <p className="text-black/60 leading-relaxed max-w-xl">

        Follow Africa Expansion Lab as we publish
        independent research exploring technology,
        regulation, infrastructure and cross-border
        business across the African continent.

      </p>

    </div>

    <div className="flex flex-wrap gap-4">

      <button className="px-7 py-4 bg-[#1a3bcc] text-white rounded-sm hover:bg-black transition">

        Read the Manifesto

      </button>

      <button className="px-7 py-4 border border-black/20 rounded-sm hover:bg-white">

        Explore Research

      </button>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer
  id="contact"
  className="bg-black text-white pt-20 pb-10 px-6 md:px-10"
>

  <div className="max-w-[1400px] mx-auto">

    <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-16 mb-20">

      {/* LEFT */}

      <div>

        <div className="flex items-center gap-3 mb-6">
          <img
            src={logoImg}
            alt="Africa Expansion Lab logo"
            className="w-9 h-9 object-contain"
          />
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl"
          >
            Africa Expansion Lab
          </h2>
        </div>

        <p className="text-white/50 leading-relaxed max-w-md">

          Researching how technology enables businesses
          to navigate, scale and grow across the African
          continent.

        </p>

      </div>

      {/* NAV */}

      <div>

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="uppercase tracking-widest text-[10px] text-white/30 mb-5"
        >
          Navigation
        </div>

        <ul className="space-y-3 text-white/60">

          <li><a href="#research">Research</a></li>

          <li><a href="#manifesto">Manifesto</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#progress">Progress</a></li>

        </ul>

      </div>

      {/* CONNECT */}

      <div>

        <div
          style={{ fontFamily: "var(--font-mono)" }}
          className="uppercase tracking-widest text-[10px] text-white/30 mb-5"
        >
          Connect
        </div>

        <ul className="space-y-3 text-white/60">

          <li>
            <a href="#">
              LinkedIn
            </a>
          </li>

          <li>
            <a href="#">
              Substack
            </a>
          </li>

          <li>
            <a href="#">
              Contact
            </a>
          </li>

        </ul>

      </div>

    </div>

    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-6">

      <div
        style={{ fontFamily: "var(--font-mono)" }}
        className="uppercase tracking-widest text-[10px] text-white/25"
      >
        © 2026 Africa Expansion Lab
      </div>

      <div
        style={{ fontFamily: "var(--font-mono)" }}
        className="uppercase tracking-widest text-[10px] text-white/25 flex gap-6"
      >

        <a href="#">
          Privacy
        </a>

        <a href="#">
          Terms
        </a>

        <a href="#">
          AI Principles
        </a>

      </div>

    </div>

  </div>

</footer>

</div>
);
}