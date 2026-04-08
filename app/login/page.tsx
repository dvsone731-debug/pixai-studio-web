"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    alert(isSignUp ? "Account created!" : "Logged in!");
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 justify-center">
          <img src="/icon.png" alt="PixAI Studio" className="w-12 h-12 rounded-lg" />
          <span className="text-xl font-bold gradient-text">PixAI Studio</span>
        </Link>

        {/* Form Card */}
        <div className="bg-surface rounded-2xl p-8 border border-surface/50">
          <h1 className="text-3xl font-bold mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-muted mb-8">
            {isSignUp
              ? "Join thousands of creators"
              : "Sign in to your account"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-dark rounded-lg border border-surface focus:border-primary outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-dark rounded-lg border border-surface focus:border-primary outline-none transition"
                required
              />
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <Link href="#" className="text-sm text-primary hover:text-accent transition">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50"
            >
              {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-surface"></div>
            <span className="text-muted text-sm">or</span>
            <div className="flex-1 h-px bg-surface"></div>
          </div>

          {/* Social Login */}
          <button className="w-full py-3 bg-dark border border-surface rounded-lg hover:border-primary transition mb-4">
            Continue with Google
          </button>

          {/* Toggle */}
          <p className="text-center text-muted">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-accent transition font-semibold"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted">
          <p>
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:text-accent transition">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:text-accent transition">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
