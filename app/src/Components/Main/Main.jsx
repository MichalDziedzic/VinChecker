import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Nav';
import Search from '../Search';
import Footer from '../Footer';
import {Container} from 'react-bootstrap';
 const Main = () => {

    
    return (
        
        <Container fluid> 
        
        
        <Nav/>

       <Search/>
     
      <Footer/>

   </Container>
        
    )
}

export default Main;
