import React, {useState, useEffect, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext'
import Spinner from '../layout/Spinner'
import {ContactItem} from './ContactItem'

export const ContactsList = () => {
  // const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  const contactContext = useContext(ContactContext)

  const {getContacts, contacts, filtered} = contactContext

  useEffect(() => {
    getContacts()
    // eslint-disable-next-line
  }, [])

  if (loading) return <h4>Loading...</h4>

  return (
    <>
      {contacts !== null && !loading ? (
        <ul className='collection'>
          {filtered !== null
            ? filtered.map((contact) => <ContactItem contact={contact} />)
            : contacts.map((contact) => <ContactItem contact={contact} />)}
        </ul>
      ) : (
        <Spinner />
      )}
    </>
  )
}
