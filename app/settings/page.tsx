export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <a
          href="/dashboard"
          className="text-sm text-slate-400 hover:text-white"
        >
          ← Back to Dashboard
        </a>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="mt-2 text-slate-400">
            Manage your CineAI Studio account.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Profile</h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-white"
                />
              </div>

              <button
                type="button"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-black hover:bg-slate-200"
                onClick={() => alert("Settings saved!")}
              >
                Save Changes
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Account</h2>

            <p className="mt-2 text-slate-400">
              Manage your account preferences.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-red-500/50 px-5 py-3 font-semibold text-red-400 hover:bg-red-500/10"
              onClick={() => alert("Logout functionality will be connected later.")}
            >
              Log Out
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
