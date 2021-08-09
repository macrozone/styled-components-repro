

import Link from 'next/link'
import dynamic from 'next/dynamic'
const TheBaseComponent = dynamic(() => import( '../components/TheBaseComponent'))
const TheExtendedComponent = dynamic(() => import( '../components/TheExtendedComponent'))

export default function Home() {
  return (
    <>
    <p>otherpage</p>
    <Link href="/"><a>Go to home</a></Link>
    <TheBaseComponent />

    </>
  )
}
