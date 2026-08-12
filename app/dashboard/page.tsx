export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <p className="text-sm text-slate-400">CineAI Studio</p>
          <h1 className="mt-2 text-4xl font-bold">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-400">
            Create and manage your AI videos from one place.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Total Projects</p>
            <h2 className="mt-3 text-3xl font-bold">0</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Videos Created</p>
            <h2 className="mt-3 text-3xl font-bold">0</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Credits</p>
            <h2 className="mt-3 text-3xl font-bold">100</h2>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-semibold">
              Create Your First AI Video
            </h2>

            <p className="mt-3 text-slate-400">
              Turn your idea into an amazing video.
            </p>

            <a
              href="/create"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-slate-200"
            >
              + Create Video
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
