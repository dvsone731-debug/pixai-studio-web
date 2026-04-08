"use client";

import Link from "next/link";
import { useState } from "react";

const modes = [
  {
    id: "ai-clone",
    title: "AI Clone",
    description: "Create your digital avatar",
    icon: "👤",
  },
  {
    id: "voice-over",
    title: "Voice Over",
    description: "Add narration to videos",
    icon: "🎤",
  },
  {
    id: "image-to-story",
    title: "Image to Story",
    description: "Generate stories from images",
    icon: "📖",
  },
  {
    id: "frame-flow",
    title: "Frame Flow",
    description: "Animate image sequences",
    icon: "🎬",
  },
  {
    id: "bring-to-life",
    title: "Bring to Life",
    description: "Animate static images",
    icon: "✨",
  },
  {
    id: "storyboard",
    title: "Storyboard",
    description: "Create panel narratives",
    icon: "📋",
  },
];

export default function CreatePage() {
  const [createdCount] = useState(0);
  const dailyLimit = 5;

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-accent transition mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Create Your Story</h1>
          <p className="text-xl text-muted">
            Transform your ideas with AI magic
          </p>
        </div>

        {/* Daily Limit Card */}
        <div className="mb-12 p-6 bg-surface rounded-xl border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Daily Creations</h3>
              <p className="text-muted">
                {createdCount} of {dailyLimit} creations used today
              </p>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="8"
                  strokeDasharray={`${(createdCount / dailyLimit) * 282.7} 282.7`}
                  strokeLinecap="round"
                  style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                />
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dy="0.3em"
                  className="text-2xl font-bold fill-white"
                >
                  {createdCount}/{dailyLimit}
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Creation Modes Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Choose a Creation Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <Link
                key={mode.id}
                href={`/create/${mode.id}`}
                className="group"
              >
                <div className="p-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-primary/30 hover:border-primary transition h-full flex flex-col">
                  <div className="text-6xl mb-4">{mode.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">
                    {mode.title}
                  </h3>
                  <p className="text-muted mb-4 flex-grow">{mode.description}</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition">
                    <span>Start Creating</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upgrade CTA */}
        {createdCount >= dailyLimit && (
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/50">
            <h3 className="text-2xl font-bold mb-2">Daily Limit Reached</h3>
            <p className="text-muted mb-4">
              Upgrade to Pro or Premium to create unlimited content.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              View Pricing Plans
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
