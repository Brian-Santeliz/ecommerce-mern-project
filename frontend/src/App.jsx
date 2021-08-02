import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
function App() {
  return (
    <>
      <Header />
      <Container>
        <main className='mt-2'>
          <h1>contenido</h1>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
