

import Link from 'next/link'
import TheExtendedComponent from '../components/TheExtendedComponent'


export default function Home() {
  return (
    <>
      <p>otherpage</p>
      <Link href="/"><a>Go to home</a></Link>

      <TheExtendedComponent>I should be green</TheExtendedComponent>

    </>
  )
}
