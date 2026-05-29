
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Privacy First Tools</h1>

        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/scan-to-pdf" className="hover:text-blue-400">Scan to PDF</a>
        </nav>
      </div>
    </header>
  )
}
