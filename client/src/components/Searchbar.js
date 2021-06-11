import React, {useContext, useEffect, useRef} from 'react'
import ContactContext from '../context/contact/contactContext'

export const Searchbar = () => {
  const contactContext = useContext(ContactContext)
  const {filterContacts, filtered, clearFilter} = contactContext

  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    e.preventDefault()
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }

  const clearSearch = () => {
    clearFilter()
    text.current.value = ''
  }

  return (
    <div
      className='nav-wrapper'
      style={{
        borderBottom: '3px solid gray',
        // borderRadius: '10px',
        margin: '2rem',
      }}
    >
      <form>
        <div className='input-field'>
          <input
            id='text'
            ref={text}
            type='search'
            placeholder='Search contacts...'
            required
            onChange={onChange}
          />
          <label className='label-icon' htmlFor='search'>
            <i className='material-icons'>search</i>
          </label>
          <i onClick={clearSearch} className='material-icons'>
            close
          </i>
        </div>
      </form>
    </div>
  )
}
