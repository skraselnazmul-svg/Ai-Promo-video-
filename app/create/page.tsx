"use client";

import { useState } from "react";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");

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
          <h1 className="text-4xl font-bold">
            Create AI Video
          </h1>

          <p className="mt-2 text-slate-400">
            Describe the video you want to create.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <label className="mb-3 block font-medium">
            Video Prompt
          </label>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: A cinematic sunset over a beautiful village..."
            rows={7}
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-white"
          />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Video Length
              </label>

              <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
                <option>10 Seconds</option>
                <option>30 Seconds</option>
                <option>60 Seconds</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Aspect Ratio
              </label>

              <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
                <option>16:9</option>
                <option>9:16</option>
                <option>1:1</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Style
              </label>

              <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
                <option>Cinematic</option>
                <option>Realistic</option>
                <option>3D Animation</option>
                <option>Anime</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-xl bg-white px-6 py-4 font-semibold text-black hover:bg-slate-200"
            onClick={() => {
              alert(
                prompt.trim()
                  ? "Your video request has been submitted!"
                  : "Please enter a video prompt."
              );
            }}
          >
            ✨ Generate Video
          </button>
        </div>
      </div>
    </main>
  );
}
