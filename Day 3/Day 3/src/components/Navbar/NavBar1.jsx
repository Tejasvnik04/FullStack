import React from 'react';
import { FaBars } from 'react-icons/fa';

import logo2 from './logo1.png';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const NavBar1 = ({toggle}) => {
  return (
   <Nav>
      <NavbarContainer>
        <NavLogo to="/" style={{ marginTop: '-10px' }}> {/* Apply negative margin-top */}
          <img src={logo2} alt="dwefe" style={{ height: 100, width: 100}} />
        </NavLogo>
        <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="bookings"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Your Bookings
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
          
          {/* Add more NavItems and NavLinks for additional sections */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Sign out</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar1
