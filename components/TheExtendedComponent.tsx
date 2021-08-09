
import styled from 'styled-components'


import dynamic from 'next/dynamic'

const TheBaseComponent = dynamic(() => import( '../components/TheBaseComponent'))

const TheExtendedComponent = styled(TheBaseComponent)`
    border: 1px solid green;
`


export default TheExtendedComponent