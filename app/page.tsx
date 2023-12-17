import Hero from '@/components/main/Hero'
import Image from 'next/image'
import Skills from '@/components/main/Skills'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[1100px] gap-20'>
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
