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


## VS Code and Git workflow

This repository includes workspace settings for Git auto-fetch and the VS Code merge editor.

1. Open the repository folder in VS Code.
2. Use **Source Control → ... → Pull** (or run `git pull --ff-only origin main`) to update your local `main` branch.
3. Create a feature branch before editing: `git switch -c feature/your-change`.
4. Commit and publish the branch: `git add .`, `git commit -m "Describe your change"`, then `git push -u origin feature/your-change`.
5. Open a pull request on GitHub and review the preview before merging.
6. After the pull request is merged, return to `main` and pull again: `git switch main` followed by `git pull --ff-only origin main`.

For an existing local clone, confirm that `origin` points to this repository with `git remote -v`. Workspace settings enable automatic remote fetching and the three-way merge editor; they do not change GitHub permissions or bypass conflicts.
