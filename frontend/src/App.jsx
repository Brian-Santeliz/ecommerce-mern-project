import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Home from './views/Home';
function App() {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
