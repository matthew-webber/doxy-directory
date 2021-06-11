// import M from 'materialize-css/dist/js/materialize.min.js'
// import {useEffect} from 'react'
import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {Navbar} from './components/Navbar'
import {Searchbar} from './components/Searchbar'
import {ContactsList} from './components/Contacts/ContactsList'
import ContactState from './context/contact/ContactState'

const App = () => {
  // useEffect(() => {
  //   // Initializes Materialize JS
  //   M.AutoInit()
  // })
  return (
    <ContactState>
      <Navbar />
      <div className='container'>
        <Searchbar />
        <div className='contacts-list'>
          <ContactsList />
        </div>
      </div>
    </ContactState>
  )
}

export default App
