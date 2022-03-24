import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavBoot from 'react-bootstrap/Nav';
import React from 'react';
import {Image} from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar className='px-3' bg='dark' variant='dark'>
      <Link to={'/'} className='me-3 my-1'>
        <Image roundedCircle height='40px' src={require('../../logo.png')} />
      </Link>
      <NavBoot className='me-auto'>
        <Link to={'/'} className={'nav-link'}>Home</Link>
      </NavBoot>
    </Navbar>
  )
}

export default Nav