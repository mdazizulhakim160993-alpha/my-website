const services = [
  { title: "Residential interiors", text: "Full-home design, from layout and lighting to furniture and finishing touches." },
  { title: "Workplaces and studios", text: "Offices and creative spaces planned around how your team actually works." },
  { title: "Styling and refresh", text: "Already built? We rework rooms with new colour, textiles and lighting." },
];

const projects = [
  { name: "Gulshan Residence", meta: "Apartment, 2,400 sq ft", bg: "bg-moss", shape: "rounded-t-full" },
  { name: "Lakeview Studio", meta: "Office, 3,100 sq ft", bg: "bg-brass", shape: "rounded-full" },
  { name: "Dhanmondi House", meta: "Duplex, 4,000 sq ft", bg: "bg-forest", shape: "rounded-none" },
];

const steps = [
  "We visit your space and listen to how you live or work.",
  "You receive layouts, a material palette and a fixed quote.",
  "We manage the build and hand over a finished room.",
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-forest/10 bg-stone/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-xl font-semibold text-forest">Arbor &amp; Line</a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="#services" className="hover:text-moss">Services</a></li>
            <li><a href="#projects" className="hover:text-moss">Projects</a></li>
            <li><a href="#process" className="hover:text-moss">Process</a></li>
          </ul>
          <a href="#contact" className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-stone transition hover:bg-moss">
            Book a consultation
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-forest md:text-7xl">
              Rooms that feel calm the moment you walk in.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/75">
              Arbor &amp; Line designs homes and workplaces with natural materials, soft light and
              clear layouts. One team, from first sketch to final handover.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-forest px-7 py-3 font-semibold text-stone transition hover:bg-moss">
                Book a consultation
              </a>
              <a href="#projects" className="rounded-full border border-forest/30 px-7 py-3 font-semibold text-forest transition hover:border-forest">
                See our projects
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[26rem] w-full max-w-sm md:h-[34rem]" aria-hidden="true">
            <div className="arch-rise absolute inset-0 rounded-t-full bg-moss" />
            <div className="arch-rise absolute inset-x-8 bottom-0 top-10 rounded-t-full border-2 border-brass" style={{ animationDelay: "0.15s" }} />
            <div className="arch-rise absolute inset-x-20 bottom-0 top-24 rounded-t-full bg-stone" style={{ animationDelay: "0.3s" }} />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-forest py-20 text-stone">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="max-w-xl font-display text-4xl font-medium md:text-5xl">What we design</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="border-t border-brass pt-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone/75">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="font-display text-4xl font-medium text-forest md:text-5xl">Recent projects</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name}>
                <div className="flex h-72 items-end justify-center bg-forest/5">
                  <div className={`h-56 w-40 ${p.bg} ${p.shape}`} />
                </div>
                <h3 className="mt-4 font-display text-xl text-forest">{p.name}</h3>
                <p className="text-sm text-ink/60">{p.meta}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-moss/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-4xl font-medium text-forest md:text-5xl">How a project works</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((t, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-4xl text-brass">{i + 1}</span>
                  <p className="pt-2 leading-relaxed">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <blockquote className="font-display text-3xl leading-snug text-forest md:text-4xl">
            They finished on the date they promised, and the flat feels bigger than it did before.
          </blockquote>
          <p className="mt-6 text-sm text-ink/60">Nadia Rahman, homeowner</p>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-forest py-20 text-stone">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-medium md:text-5xl">Tell us about your space</h2>
              <p className="mt-4 max-w-md text-stone/75">
                Send a few details and we will reply within two working days to arrange a visit.
              </p>
            </div>
            <form className="space-y-4" action="/api/contact" method="post">
              <input name="name" required placeholder="Your name" aria-label="Your name"
                className="w-full rounded-lg bg-stone/10 px-4 py-3 placeholder:text-stone/50" />
              <input name="email" type="email" required placeholder="Email address" aria-label="Email address"
                className="w-full rounded-lg bg-stone/10 px-4 py-3 placeholder:text-stone/50" />
              <textarea name="message" rows={4} placeholder="What are you planning?" aria-label="Message"
                className="w-full rounded-lg bg-stone/10 px-4 py-3 placeholder:text-stone/50" />
              <button type="submit" className="rounded-full bg-brass px-7 py-3 font-semibold text-forest transition hover:bg-stone">
                Send request
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8 text-center text-sm text-ink/60">
        © 2026 Arbor &amp; Line. All rights reserved.
      </footer>
    </>
  );
}