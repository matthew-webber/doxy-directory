import React from 'react'

export const ContactItem = ({contact}) => {
  const {name, url} = contact
  return (
    <li className='collection-item'>
      <span className='title'>{name} - </span>
      <a href={url} target='_blank'>
        Link
      </a>
    </li>
  )
}
