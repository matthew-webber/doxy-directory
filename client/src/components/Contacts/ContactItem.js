import React from 'react'

export const ContactItem = ({contact}) => {
  const {lastName, firstName, doxyUrl} = contact
  return (
    <li className='collection-item'>
      <a href={doxyUrl} rel='noreferrer' target='_blank'>
        {lastName}, {firstName} <i className='tiny material-icons'>launch</i>
      </a>
    </li>
  )
}
