export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          The developer arena
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Master coding
          <br />
          <span className="text-zinc-400">Build Compete Grow</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          An AI-powered platform where developers learn, solve problems,
          collaborate, compete, and build real-world projects.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-6">
          <button className="rounded-lg bg-white px-8 py-4 font-medium text-black transition hover:bg-zinc-200">
            Start Learning
          </button>

          <button className="rounded-lg border border-zinc-700 px-8 py-4 font-medium text-white transition hover:bg-zinc-900">
            Explore Challenges
          </button>
        </div>

      </section>
    </main>
  );
}