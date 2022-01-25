import React from 'react'
import { Footer } from './styles'

const FooterContainer = (): JSX.Element => {
  return (
    <>
      <Footer>
        <p>
          <span>© {new Date().getFullYear()} Christian Daniel. All Rights Reserved.</span>
        </p>
      </Footer>
    </>
  )
}

export default FooterContainer
