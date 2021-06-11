import React from 'react'
import spinner from './spinner.gif'

export const Spinner = () => (
  <>
    <img src={spinner} alt='' style={spinnerStyle} />
  </>
)

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
}

export default Spinner
