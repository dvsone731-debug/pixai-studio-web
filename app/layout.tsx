import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixAI Studio - AI-Powered Video & Story Creator",
  description:
    "Create stunning AI-powered videos and stories with 6 advanced creation modes. Share instantly with public links. Free tier available.",
  keywords:
    "AI video creator, story generator, animation, video editor, AI clone, voice over",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "PixAI Studio",
    description: "Create AI-powered videos and stories instantly",
    type: "website",
    images: [{
      url: "/icon.png",
      width: 1024,
      height: 1024,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
