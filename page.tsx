
'use client'

import { useRef, useState } from 'react'
import jsPDF from 'jspdf'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ScanToPdf() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<string[]>([])

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        setImages((prev) => [...prev, reader.result as string])
      }

      reader.readAsDataURL(file)
    })
  }

  const createPdf = () => {
    if (images.length === 0) return

    const pdf = new jsPDF()

    images.forEach((image, index) => {
      if (index > 0) pdf.addPage()

      pdf.addImage(image, 'JPEG', 10, 10, 190, 250)
    })

    pdf.save('scan.pdf')
  }

  return (
    <main>
      <Header />

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">
          Scan to PDF
        </h1>

        <p className="mt-4 text-slate-300">
          Capture or upload images and export them as a PDF.
          Everything stays on your device.
        </p>

        <div className="card mt-8">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={handleFiles}
            className="w-full"
          />

          <button
            onClick={createPdf}
            className="button"
          >
            Export PDF
          </button>
        </div>

        <div className="grid gap-4 mt-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Scanned document"
              className="rounded-xl border border-slate-700"
            />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="card text-center">
          <p className="text-slate-300 mb-4">
            Non-intrusive ad placement area
          </p>

          <div className="bg-slate-800 rounded-lg p-6">
            Future productivity or office ads
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
