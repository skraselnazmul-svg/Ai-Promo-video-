export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to CineAI Studio
        </h1>

        <p className="mt-4 text-slate-400">
          Create amazing AI videos with ease.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-slate-200">
          Get Started
        </button>
      </div>
    </main>
  );
}
