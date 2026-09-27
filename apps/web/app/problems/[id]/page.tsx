import Link from "next/link";
import { notFound } from "next/navigation";

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

async function getProblem(id: string): Promise<Problem> {
  const response = await fetch(
    `${process.env.API_URL ?? "http://localhost:4000"}/api/problems/${id}`,
    {
      cache: "no-store",
    },
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch problem");
  }

  const result = await response.json();

  return result.data;
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const problem = await getProblem(id);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <Link
          href="/problems"
          className="text-sm text-zinc-500 hover:text-white"
        >
          ← Back to Problems
        </Link>

        <div className="mt-10">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold">
              {problem.title}
            </h1>

            <span className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-400">
              {problem.difficulty}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {problem.tags.map(({ tag }) => (
              <span
                key={tag.name}
                className="rounded-md bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-xl font-semibold">
              Problem Description
            </h2>

            <p className="mt-4 whitespace-pre-wrap leading-8 text-zinc-400">
              {problem.description}
            </p>
          </section>

          <section className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-xl font-semibold">
              Your Solution
            </h2>

            <div className="mt-4 min-h-64 rounded-lg border border-zinc-800 bg-black p-4 font-mono text-sm text-zinc-600">
              // Code editor coming in Phase 2
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}