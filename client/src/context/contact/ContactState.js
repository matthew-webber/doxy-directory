import React, {useReducer} from 'react'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  FILTER_CONTACTS,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_ERROR,
  CLEAR_FILTER,
} from '../types'

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Get contacts
  const getContacts = async () => {
    try {
      const res = await fetch('api/contacts')
      const data = await res.json()
      let contacts = []

      dispatch({type: GET_CONTACTS, payload: data})
    } catch (err) {
      console.error(err)
      dispatch({type: CONTACT_ERROR, payload: err.response})
    }
  }

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({type: FILTER_CONTACTS, payload: text})
  }

  // Clear filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }

  // Clear error
  const clearError = () => {
    dispatch({type: CLEAR_ERROR})
  }

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        filtered: state.filtered,
        error: state.error,
        getContacts,
        filterContacts,
        clearFilter,
        clearError,
      }}
    >
      {props.children}{' '}
    </ContactContext.Provider>
  )
}

export default ContactState
