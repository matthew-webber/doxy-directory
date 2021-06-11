import {
  FILTER_CONTACTS,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_ERROR,
  CLEAR_FILTER,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload.sort((a, b) =>
          a.lastName > b.lastName ? 1 : -1
        ),
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return contact.fullName.match(regex)
        }),
      }
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
