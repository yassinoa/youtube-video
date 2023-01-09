import React from 'react'
import LeftBar from './LeftBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavvBar.css'
function NavvBar() {
  return (
    <div className='navb'>
      <div className="navL">
      <LeftBar/>
      <img src="/img/logo.png" className='imglog' />
      </div>
      <div className="navM">
        <div className="searchbar">
        
            
            <input placeholder="Rechercher" className="searchInput" />
            <div className='serch-r'><i className="fa-solid fa-magnifying-glass searchIcon "></i></div>
        </div>
        <div className='micro'><i class="fa-solid fa-microphone mic "></i></div>
      </div>
      <div className="navR">
      <div className='micro'><i class="fa-solid fa-video mic"></i></div>
      <div className='micro'><i class="fa-solid fa-bell mic"></i></div>
      <img src="/img/avatar.png" className='imgP' />
      <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">yessine mesmoudi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              
              <i class="fa-sharp fa-solid fa-clipboard-check"> </i>   Parametre
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              <i class="fa-solid fa-right-from-bracket"></i> Log out              </NavDropdown.Item>
            </NavDropdown>

      </div>
    </div>
  )
}

export default NavvBar