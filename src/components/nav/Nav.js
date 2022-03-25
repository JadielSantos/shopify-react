import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavBoot from 'react-bootstrap/Nav';
import { Image } from "react-bootstrap";
import { Shop } from '../../context/Shop';

const Nav = () => {
  const { openCart } = useContext(Shop);

  return (
    <Navbar className='px-3' bg='dark' variant='dark'>
      <Link to={'/'} className='me-3 my-1'>
        <Image roundedCircle height='40px' src={require('../../logo.png')} />
      </Link>
      <NavBoot className='me-auto'>
        <Link to={'/'} className={'nav-link'}>Home</Link>
        <NavBoot.Link onClick={() => openCart()}>Cart</NavBoot.Link>
      </NavBoot>
    </Navbar>
  )
}

export default Nav