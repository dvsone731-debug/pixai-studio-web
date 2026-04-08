"use client";

import Link from "next/link";
import { useState } from "react";

const sampleCreations = [
  {
    id: 1,
    title: "Epic Adventure",
    creator: "John Doe",
    mode: "Storyboard",
    likes: 234,
    views: 1200,
    image: "🎬",
  },
  {
    id: 2,
    title: "AI Avatar Demo",
    creator: "Jane Smith",
    mode: "AI Clone",
    likes: 456,
    views: 2100,
    image: "👤",
  },
  {
    id: 3,
    title: "Voice Story",
    creator: "Mike Johnson",
    mode: "Voice Over",
    likes: 123,
    views: 890,
    image: "🎤",
  },
  {
    id: 4,
    title: "Image Animation",
    creator: "Sarah Lee",
    mode: "Bring to Life",
    likes: 567,
    views: 3400,
    image: "✨",
  },
  {
    id: 5,
    title: "Story from Photo",
    creator: "Tom Wilson",
    mode: "Image to Story",
    likes: 234,
    views: 1500,
    image: "📖",
  },
  {
    id: 6,
    title: "Frame Animation",
    creator: "Emma Davis",
    mode: "Frame Flow",
    likes: 345,
    views: 2200,
    image: "🎬",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? sampleCreations
      : sampleCreations.filter((c) => c.mode.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-primary hover:text-accent transition mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Community Gallery</h1>
          <p className="text-xl text-muted">
            Explore creations from our amazing community
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-3">
          {["all", "AI Clone", "Voice Over", "Image to Story", "Frame Flow", "Bring to Life", "Storyboard"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f.toLowerCase())}
              className={`px-4 py-2 rounded-lg transition ${
                filter === f.toLowerCase()
                  ? "bg-primary text-white"
                  : "bg-surface text-muted hover:text-white"
              }`}
            >
              {f === "all" ? "All Creations" : f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((creation) => (
            <div
              key={creation.id}
              className="group rounded-xl overflow-hidden bg-surface border border-surface hover:border-primary transition"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-105 transition">
                {creation.image}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition">
                  {creation.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted">by {creation.creator}</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {creation.mode}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm text-muted mb-4">
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{creation.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👁️</span>
                    <span>{creation.views}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-white transition">
                  View Creation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted mb-4">No creations found</p>
            <Link
              href="/create"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Create Something Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
