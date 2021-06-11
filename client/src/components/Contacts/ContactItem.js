import React from 'react'

export const ContactItem = ({contact}) => {
  const {lastName, firstName, url} = contact
  return (
    <li className='collection-item'>
      <span className='title'>
        {lastName}, {firstName} -{' '}
      </span>
      <a href={url} rel='noreferrer' target='_blank'>
        Link
      </a>
    </li>
  )
}
