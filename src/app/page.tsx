import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header'
import Section from '../components/First-Section'
import Section2 from '@/components/Second-Section'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  )
}
