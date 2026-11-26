import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Jhoverne Morcilla",
  description: "View or download Jhoverne Morcilla's resume.",
};

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="button-icon">
      <path d="M10 2.5v9m-3.25-3.25L10 11.5l3.25-3.25M4 13.5v3h12v-3" />
    </svg>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-toolbar">
        <Link className="resume-back" href="/">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <h1>Jhoverne Morcilla&apos;s Resume</h1>
        <div className="resume-actions">
          <a className="resume-open" href="/resume.pdf" target="_blank" rel="noreferrer">
            View resume <span aria-hidden="true">↗</span>
          </a>
          <a
            className="resume-download"
            href="/resume.pdf"
            download="Jhoverne-Morcilla-Resume.pdf"
            aria-label="Download resume PDF"
          >
            <DownloadIcon /> Download resume
          </a>
        </div>
      </header>
      <section className="resume-viewer" aria-label="Resume document">
        <iframe
          className="resume-document"
          src="/resume.pdf#view=FitH"
          title="Jhoverne Morcilla resume PDF"
        />
        <p className="resume-fallback">
          If the PDF does not appear here, <a href="/resume.pdf" target="_blank" rel="noreferrer">view it in a new tab</a> or download it.
        </p>
      </section>
    </main>
  );
}
