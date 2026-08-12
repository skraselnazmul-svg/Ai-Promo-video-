export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <a
          href="/dashboard"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back to Dashboard
        </a>

        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="mt-2 text-slate-400">
              Manage all your AI video projects.
            </p>
          </div>

          <a
            href="/create"
            className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-black hover:bg-slate-200"
          >
            + New Video
          </a>
        </div>

        <section className="mt-10">
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
            <div className="text-5xl">🎬</div>

            <h2 className="mt-5 text-2xl font-semibold">
              No projects yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Your created videos will appear here. Start by
              creating your first AI video.
            </p>

            <a
              href="/create"
              className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-slate-200"
            >
              Create Your First Video
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
