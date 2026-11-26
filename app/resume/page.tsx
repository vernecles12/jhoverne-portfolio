import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-toolbar">
        <Link className="resume-back" href="/">← Back to portfolio</Link>
        <h1>Jhoverne Morcilla&apos;s résumé</h1>
        <a className="resume-download" href="/resume.pdf" download="Jhoverne-Morcilla-Resume.pdf">
          Download PDF
        </a>
      </header>
      <iframe className="resume-document" src="/resume.pdf" title="Jhoverne Morcilla résumé PDF" />
    </main>
  );
}
