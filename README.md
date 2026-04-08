# PixAI Studio - Web Application

A modern, responsive web application for creating AI-powered videos and stories.

## Features

- 6 AI Creation Modes (AI Clone, Voice Over, Image to Story, Frame Flow, Bring to Life, Storyboard)
- Public Sharing with Social Features
- Flexible Monetization (Free/Pro/Premium)
- Beautiful Dark Theme Design
- Responsive Mobile & Desktop UI
- User Authentication
- Community Gallery

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Deployment:** Vercel (or any Node.js host)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
pixai-web/
├── app/
│   ├── page.tsx           # Home page
│   ├── create/
│   │   └── page.tsx       # Create page
│   ├── gallery/
│   │   └── page.tsx       # Gallery page
│   ├── pricing/
│   │   └── page.tsx       # Pricing page
│   ├── login/
│   │   └── page.tsx       # Login/Sign up page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"

### Deploy to Other Platforms

The app can be deployed to any platform that supports Node.js:
- AWS Amplify
- Netlify
- DigitalOcean
- Heroku
- Railway

## Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_URL=https://api.pixaistudio.com
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
```

## API Integration

Connect to your backend API for:
- User authentication
- Creation storage
- AI generation
- Payment processing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is proprietary and confidential.

## Support

For support, email support@pixaistudio.com

---

**PixAI Studio** - Transform your ideas into stunning visual content with AI magic.
