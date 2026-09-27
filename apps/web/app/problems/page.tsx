import Link from "next/link";

type Tag = {
  tag: {
    name: string;
  };
};

type Problem = {
  id: string;
  title: string;
  slug: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  description: string;
  tags: Tag[];
};

async function getProblems(): Promise<Problem[]> {
  const response = await fetch(
    `${process.env.API_URL ?? "http://localhost:4000"}/api/problems`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch problems");
  }

  const result = await response.json();

  return result.data;
}

const difficultyStyles = {
  EASY: "text-green-400",
  MEDIUM: "text-yellow-400",
  HARD: "text-red-400",
};

export default async function ProblemsPage() {
  const problems = await getProblems();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header>
          <p className="text-sm text-zinc-500">DevArena</p>

          <h1 className="mt-2 text-4xl font-bold">
            Problems
          </h1>

          <p className="mt-2 text-zinc-400">
            Practice coding problems and sharpen your skills.
          </p>
        </header>

        <section className="mt-10 overflow-hidden rounded-xl border border-zinc-800">
          <div className="grid grid-cols-[1fr_120px_280px] border-b border-zinc-800 bg-zinc-950 px-6 py-4 text-sm text-zinc-500">
            <span>Problem</span>
            <span>Difficulty</span>
            <span>Tags</span>
          </div>

          {problems.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <p className="text-zinc-400">
                No problems available yet.
              </p>
            </div>
          ) : (
            problems.map((problem) => (
              <Link
                key={problem.id}
                href={`/problems/${problem.id}`}
                className="grid grid-cols-[1fr_120px_280px] items-center border-b border-zinc-800 px-6 py-5 transition hover:bg-zinc-950"
              >
                <div>
                  <h2 className="font-medium">
                    {problem.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-500">
                    {problem.description}
                  </p>
                </div>

                <span
                  className={`text-sm font-medium ${difficultyStyles[problem.difficulty]}`}
                >
                  {problem.difficulty}
                </span>

                <div className="flex flex-wrap gap-2">
                  {problem.tags.map(({ tag }) => (
                    <span
                      key={tag.name}
                      className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs text-zinc-400"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  );
}