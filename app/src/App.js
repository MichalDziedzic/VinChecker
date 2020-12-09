import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Components/Nav';
import Search from './Components/Search';
import Footer from './Components/Footer';
import {Container} from 'react-bootstrap';
import './App.css';
function App() {
  return (
    <Container fluid> 
        
        <Nav/>

       <Search></Search>
     
      <Footer/>

   </Container>
  );
}

export default App;
