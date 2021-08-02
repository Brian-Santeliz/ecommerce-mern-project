import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
export const Header = () => {
  return (
    <Navbar variant='dark' bg='primary' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='#home'>Ecommerce MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          style={{ justifyContent: 'flex-end' }}
        >
          <Nav className='ml-auto'>
            <Nav.Link href='/cart'>
              Carrito <i className='fas fa-shopping-cart'></i>{' '}
            </Nav.Link>
            <Nav.Link href='/login'>
              Iniciar Sesión <i className='fas fa-user-lock'></i>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
