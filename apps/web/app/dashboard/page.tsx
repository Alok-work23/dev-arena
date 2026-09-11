const stats = [
  { label: "Rating", value: "1542" },
  { label: "Problems Solved", value: "127" },
  { label: "Current Streak", value: "18 🔥" },
  { label: "Global Rank", value: "#842" },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header>
          <p className="text-sm text-zinc-500">Developer Dashboard</p>

          <h1 className="mt-2 text-4xl font-bold">
            Good evening 👋
          </h1>

          <p className="mt-2 text-zinc-400">
            Here's what you should focus on today.
          </p>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <p className="text-sm text-zinc-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="text-sm font-medium text-zinc-500">
            AI MENTOR
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Your next challenge is Graph Traversal.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            Your recent performance shows that you're comfortable with
            arrays and hashmaps, but could improve your graph fundamentals.
          </p>

          <button className="mt-6 rounded-lg bg-white px-5 py-3 font-medium text-black">
            Start Challenge
          </button>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Continue Learning</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Graphs", "Dynamic Programming", "Trees"].map((topic) => (
              <div
                key={topic}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <h3 className="font-medium">{topic}</h3>

                <div className="mt-4 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-2/3 rounded-full bg-white" />
                </div>

                <p className="mt-3 text-sm text-zinc-500">
                  66% complete
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}