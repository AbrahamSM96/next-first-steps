import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About page',
  description: 'About page description',
  keywords: ['about', 'page', 'Abraham', 'information', 'Next.js']
}

export default function About() {
  return (
    <>
      <h1 className="text-7xl">About page</h1>
    </>
  )
}
