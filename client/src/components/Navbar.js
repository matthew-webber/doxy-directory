import React, {useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export const Navbar = () => {
  useEffect(() => {
    // Initializes MaterializeJS
    M.AutoInit()
  })

  return (
    <>
      <ul id='dropdown1' class='dropdown-content'>
        <li>
          <a>Dial 843-792-5361 to reach the Telehealth Engineer on-call</a>
        </li>
      </ul>
      <nav>
        <div className='nav-wrapper' style={{backgroundColor: '#000'}}>
          <a
            href='#'
            className='brand-logo'
            style={{marginLeft: '1rem', color: '#66CCCC', fontWeight: 'bold'}}
          >
            doxy.me Directory
          </a>

          <ul id='nav-mobile' className='right'>
            <li>
              <a class='dropdown-trigger' href='#!' data-target='dropdown1'>
                <i class='material-icons right'>help_outline</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
