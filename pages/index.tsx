

import Link from 'next/link'
import TheExtendedComponent from '../components/TheExtendedComponent'


export default function Home() {
  return (
    <>
      <p>Hello world</p>
      <Link href="/otherpage"><a>Go to other page</a></Link>

      <TheExtendedComponent />
    </>
  )
}
