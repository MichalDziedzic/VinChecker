import React ,{useState} from 'react';
 //import axios from "axios";
import {Row ,Col} from 'react-bootstrap';
import '../style/Search.css';
import Bg from '../IMG/cars_bg.jpg';

 const Search = ({apicall}) => {
    const [vin,setVin]=useState("");
      //const [currentRapport,setCurrentRapport]=useState({});
//2C4RDGBG4HR838841
   

      

      const submitFn = (e)=>
      {
         e.preventDefault();
         console.log(e.target[0].value);
         
         if(vin.length !== 17 )
            console.log('your vin must have 17 characters');
              
         apicall(vin);   
         setVin("");
         
         
      }
      const handleChangeVin = (e)=>
      {
         console.log(e.target.value);
         setVin(e.target.value.toUpperCase());
          
      }
   
    return (
       <div>
          <Row className="row_Search" style={{  
                background: `url(${Bg})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'
            }}>
          <Col className="d-flex  align-items-center">
             
            <form className="form-inline mx-auto" onSubmit={submitFn}>
           
               <input className="form-control mr-sm-2"
                type="search"
                aria-label="Search"
                placeholder="your vin ..."
                onChange={handleChangeVin}
                value={vin}
                />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </Col>
        </Row>
       </div>
    )
}

export default Search;
