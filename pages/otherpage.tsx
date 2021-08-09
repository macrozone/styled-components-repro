

import Link from 'next/link'
import TheBaseComponent from '../components/TheBaseComponent'


export default function Home() {
  return (
    <>
      <p>otherpage</p>
      <Link href="/"><a>Go to home</a></Link>

      <TheBaseComponent />

    </>
  )
}
