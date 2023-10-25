import DonutList from '@/components/DonutList/DonutList'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <DonutList />
    </main>
  )
}
