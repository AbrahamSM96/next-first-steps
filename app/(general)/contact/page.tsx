import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Contact page description',
  keywords: ['contact', 'page', 'Abraham', 'information', 'Next.js']
}

export default function Contact() {
  return (
    <>
      <h1 className="text-7xl">Contact page</h1>
    </>
  )
}
