const features = [
  {
    title: "AI Mentor",
    description:
      "Get personalized hints, code reviews, and explanations based on how you actually solve problems.",
  },
  {
    title: "Code Battles",
    description:
      "Challenge other developers and compete in real-time coding battles.",
  },
  {
    title: "Build Projects",
    description:
      "Turn ideas into real projects with AI-assisted planning and engineering workflows.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-black">
            D
          </div>

          <span className="text-lg font-semibold tracking-tight">
            DevArena
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden px-4 py-2 text-sm text-zinc-300 transition hover:text-white sm:block"
          >
            Log in
          </a>

          <a
            href="/dashboard"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-200"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-24 pt-24 text-center md:pb-32 md:pt-32">
          <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-400">
            ⚡ The developer arena for the AI era
          </div>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Master coding.
            <br />
            <span className="text-zinc-500">
              Build. Compete. Grow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            An AI-powered platform where developers practice coding,
            collaborate with others, build real projects, and turn their
            skills into something measurable.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/dashboard"
              className="rounded-lg bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Start Learning →
            </a>

            <a
              href="#features"
              className="rounded-lg border border-zinc-800 px-7 py-3 font-medium text-white transition hover:bg-zinc-900"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-5 text-xs text-zinc-600">
            No credit card required
          </p>
        </div>
      </section>

      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {/* Window header */}
          <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />
            <div className="h-3 w-3 rounded-full bg-zinc-700" />

            <div className="ml-4 text-xs text-zinc-600">
              app.devarena.dev
            </div>
          </div>

          <div className="grid md:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-zinc-800 p-5 md:block">
              <p className="text-xs font-medium text-zinc-600">
                DEVARЕNA
              </p>

              <div className="mt-6 space-y-2">
                {["Dashboard", "Problems", "Battles", "Projects"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        index === 0
                          ? "bg-zinc-800 text-white"
                          : "text-zinc-500"
                      }`}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </aside>

            {/* Dashboard preview */}
            <div className="p-6 sm:p-8">
              <p className="text-xs text-zinc-600">DASHBOARD</p>

              <h2 className="mt-2 text-2xl font-semibold">
                Good evening 👋
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["Rating", "1542"],
                  ["Solved", "127"],
                  ["Streak", "18 🔥"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-zinc-800 bg-black p-5"
                  >
                    <p className="text-xs text-zinc-600">{label}</p>
                    <p className="mt-2 text-2xl font-semibold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-zinc-800 bg-black p-6">
                <p className="text-xs font-medium text-zinc-600">
                  AI MENTOR
                </p>

                <p className="mt-3 text-lg font-medium">
                  You should practice Graph Traversal next.
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Based on your recent submissions, improving graph
                  fundamentals could increase your problem-solving score.
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-2/3 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-zinc-900 bg-[#080808]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-500">
              EVERYTHING IN ONE PLACE
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than another coding platform.
            </h2>

            <p className="mt-4 leading-7 text-zinc-500">
              Learn, practice, compete, collaborate, and build—all inside
              one developer-focused ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-zinc-600"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-zinc-400">
                  0{index + 1}
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="text-sm text-zinc-600">YOUR JOURNEY STARTS HERE</p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Stop watching tutorials.
          <br />
          <span className="text-zinc-500">Start building.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-500">
          DevArena is designed around one idea: your skills should be
          demonstrated through things you actually build.
        </p>

        <a
          href="/dashboard"
          className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-medium text-black transition hover:bg-zinc-200"
        >
          Enter DevArena →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-zinc-600 sm:flex-row">
          <span>© 2026 DevArena</span>
          <span>Built for developers.</span>
        </div>
      </footer>
    </main>
  );
}