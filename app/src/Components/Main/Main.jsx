import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Nav';
import Search from '../Search';
import Footer from '../Footer';
import {Container} from 'react-bootstrap';
 const Main = (props) => {

    console.log();
    return (
        
        <Container fluid> 
        
        
        <Nav/>

       <Search apicall={props.ApiFn}/>
     
      <Footer/>

   </Container>
        
    )
}

export default Main;
