

import Link from 'next/link'
import TheBaseComponent from '../components/TheBaseComponent'


export default function Home() {
  return (
    <>
      <p>Hello world</p>
      <Link href="/otherpage"><a>Go to other page</a></Link>

      <TheBaseComponent>I should be red</TheBaseComponent>
    </>
  )
}
