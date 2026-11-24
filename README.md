# Jhoverne Morcilla — Personal Portfolio

A responsive, single-page Next.js portfolio for an IT student seeking an On-the-Job Training (OJT) opportunity. The content is based on the supplied resume.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
npm run start
```

## Customize

- Main page content: `app/page.tsx`
- Styling and responsive layout: `app/globals.css`
- Page title and description: `app/layout.tsx`
- Resume download: replace `public/resume.pdf` with your updated PDF, keeping the same filename or updating the links in `app/page.tsx`.

## Notes

The resume does not contain project descriptions, so the portfolio does not invent project entries or work experience. Add real projects to `app/page.tsx` when you are ready to showcase them.
