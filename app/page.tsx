"use client";

import Link from "next/link";
import { useState } from "react";

const creationModes = [
  {
    id: "ai-clone",
    title: "AI Clone",
    description: "Create your digital avatar",
    icon: "👤",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: "voice-over",
    title: "Voice Over",
    description: "Add narration to videos",
    icon: "🎤",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "image-to-story",
    title: "Image to Story",
    description: "Generate stories from images",
    icon: "📖",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "frame-flow",
    title: "Frame Flow",
    description: "Animate image sequences",
    icon: "🎬",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "bring-to-life",
    title: "Bring to Life",
    description: "Animate static images",
    icon: "✨",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "storyboard",
    title: "Storyboard",
    description: "Create panel narratives",
    icon: "📋",
    color: "from-emerald-500 to-purple-500",
  },
];

export default function Home() {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark to-surface">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-surface z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="PixAI Studio" className="w-10 h-10 rounded-lg" />
            <span className="text-xl font-bold gradient-text">PixAI Studio</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="/gallery"
              className="px-4 py-2 text-muted hover:text-white transition"
            >
              Gallery
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-muted hover:text-white transition"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Create Your Story with <span className="gradient-text">AI Magic</span>
          </h1>
          <p className="text-xl text-muted mb-8">
            Transform your ideas into stunning visual content using 6 powerful AI creation modes.
            Share instantly with public links. Free tier available.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/create"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
            >
              Start Creating
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Creation Modes Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your Creation Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creationModes.map((mode) => (
              <Link
                key={mode.id}
                href={`/create/${mode.id}`}
                className="group"
                onMouseEnter={() => setHoveredMode(mode.id)}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${mode.color} opacity-10 group-hover:opacity-20 transition h-full`}
                />
                <div className="relative -mt-48 p-6 bg-surface rounded-2xl border border-surface hover:border-primary transition h-full flex flex-col">
                  <div className="text-5xl mb-4">{mode.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{mode.title}</h3>
                  <p className="text-muted mb-4 flex-grow">{mode.description}</p>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition">
                    <span>Get Started</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose PixAI Studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface rounded-xl border border-surface/50 hover:border-primary transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Instant Creation</h3>
              <p className="text-muted">
                Create stunning videos and stories in seconds with AI-powered automation.
              </p>
            </div>
            <div className="p-8 bg-surface rounded-xl border border-surface/50 hover:border-primary transition">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-3">Easy Sharing</h3>
              <p className="text-muted">
                Generate shareable links to let anyone view your creations without the app.
              </p>
            </div>
            <div className="p-8 bg-surface rounded-xl border border-surface/50 hover:border-primary transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Flexible Pricing</h3>
              <p className="text-muted">
                Free tier with daily limits or unlimited access with Pro and Premium plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create?</h2>
          <p className="text-xl text-muted mb-8">
            Join thousands of creators using PixAI Studio to bring their ideas to life.
          </p>
          <Link
            href="/create"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
          >
            Start Creating Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface/50 border-t border-surface py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">PixAI Studio</h4>
              <p className="text-muted text-sm">
                AI-powered video and story creation platform.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-muted text-sm">
                <li>
                  <Link href="/create" className="hover:text-white transition">
                    Create
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-muted text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-surface pt-8 text-center text-muted text-sm">
            <p>&copy; 2026 PixAI Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
