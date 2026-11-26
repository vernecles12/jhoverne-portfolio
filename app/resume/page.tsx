import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé | Jhoverne Morcilla",
  description: "View or download Jhoverne Morcilla's résumé.",
};

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-toolbar">
        <Link className="resume-back" href="/">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <h1>Jhoverne Morcilla&apos;s résumé</h1>
        <div className="resume-actions">
          <a className="resume-open" href="/resume.pdf" target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="resume-download" href="/resume.pdf" download="Jhoverne-Morcilla-Resume.pdf">
            Download PDF
          </a>
        </div>
      </header>
      <section className="resume-viewer" aria-label="Résumé document">
        <iframe
          className="resume-document"
          src="/resume.pdf#view=FitH"
          title="Jhoverne Morcilla résumé PDF"
        />
        <p className="resume-fallback">
          If the PDF does not appear here, <a href="/resume.pdf" target="_blank" rel="noreferrer">open it in a new tab</a> or download it.
        </p>
      </section>
    </main>
  );
}
