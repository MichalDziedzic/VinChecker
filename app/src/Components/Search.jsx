import React from 'react'
import {Row ,Col} from 'react-bootstrap';
import '../style/Search.css';
import Bg from '../IMG/cars_bg.jpg';


 function Search() {
    
    return (
       <div>
          <Row className="row_Search" style={{  
                background: `url(${Bg})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'
            }}>
          <Col className="d-flex  align-items-center">
             
            <form className="form-inline mx-auto">
           
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </Col>
        </Row>
       </div>
    )
}

export default Search;
