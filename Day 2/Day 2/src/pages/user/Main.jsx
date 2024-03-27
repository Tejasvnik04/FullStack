import React from 'react'
import PropTypes from 'prop-types'
const Main = ({children}) => {
  return (
    <div className='user'>
      <header>
        header
      </header>
      <body>
        {children}
      </body>
      <footer>
        footer
      </footer>
    </div>
  )
}
Main.propTypes={
    children: PropTypes.node.isRequired
}

export default Main
