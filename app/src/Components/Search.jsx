import React ,{useState} from 'react';
 import axios from "axios";
import {Row ,Col} from 'react-bootstrap';
import '../style/Search.css';
import Bg from '../IMG/cars_bg.jpg';


const ApiCall=(vin)=>{



const options = {
  method: 'GET',
  url: 'https://vindecoder.p.rapidapi.com/v1.1/decode_vin',
  params: {vin: vin},
  headers: {
    'x-rapidapi-key': '73eef2aeabmshb84af892f67bdfap11525djsnbe0ddb61ed1f',
    'x-rapidapi-host': 'vindecoder.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}
 const Search = () => {
    


      const [vin,setVin]=useState("");

      const submitFn = (e)=>
      {
         e.preventDefault();
         console.log(e.target[0].value);
         
         if(vin.length < 7 )
         {}
            console.log('your vin must have 8 characters');
              
         ApiCall(vin);   
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
