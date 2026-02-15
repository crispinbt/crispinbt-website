# crispinbt.co.uk

Next.js website for Crispin Boden-Tebbutt, SEO Consultant. Built with Next.js 14+, TypeScript, Tailwind CSS, Framer Motion and Netlify deployment.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy to Netlify

1. Connect your Git repository to Netlify.
2. Build command: `npm run build` (default from netlify.toml).
3. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_CALENDLY_URL` (optional) - Your Calendly booking URL.
4. Point crispinbt.co.uk to your Netlify site via DNS.
5. Netlify Forms: Contact and Free Audit forms are configured. Ensure form submissions are enabled in the Netlify dashboard.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly embed URL (optional, has default) |

## Structure

- `app/` - Next.js App Router pages
- `components/` - React components
- `content/case-studies/` - MDX case study files
- `lib/` - Utilities (case study loading)
- `public/` - Static assets
