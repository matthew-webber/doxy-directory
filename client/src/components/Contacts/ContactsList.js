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
    // setLoading(true)
    getContacts()
    // setLoading(false)

    // eslint-disable-next-line
  }, [])

  // const getContacts = async () => {
  //   const res = await fetch('/contacts')
  //   const data = await res.json()
  //   let _contacts = []
  //   data.forEach((contact) => {
  //     if (contact.numbers.length !== 0 && contact.numbers[0].number !== '') {
  //       _contacts.push({name: contact.name, number: contact.numbers[0].number})
  //     }
  //   })
  //   setContacts(_contacts)
  //   console.log(_contacts)
  // }

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
