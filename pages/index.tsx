

import Link from 'next/link'
import dynamic from 'next/dynamic'
const TheBaseComponent = dynamic(() => import( '../components/TheBaseComponent'))
const TheExtendedComponent = dynamic(() => import( '../components/TheExtendedComponent'))

export default function Home() {
  return (
    <>
    <p>Hello world</p>
    <Link href="/otherpage"><a>Go to other page</a></Link>

    <TheExtendedComponent />
    </>
  )
}
