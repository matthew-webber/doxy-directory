import React from 'react'

export const ContactItem = ({contact}) => {
  const {lastName, firstName, doxyUrl} = contact
  return (
    <li className='collection-item'>
      <span className='title'>
        {lastName}, {firstName} -{' '}
      </span>
      <a href={doxyUrl} rel='noreferrer' target='_blank'>
        Link
      </a>
    </li>
  )
}
