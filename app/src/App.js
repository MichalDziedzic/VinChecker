import React from 'react';
import axios from "axios";
import Main from './Components/Main/Main';
import Info from './Components/Info/Info';
import Raport from './Components/Raport/Raport';
import './App.css';

 const App=()=>{
   
  const getVinRequest=(vin)=>
   {

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
           // setCurrentRapport(response.data);
            
         }).catch(function (error) {
            console.error(error);
         });

         
   }
//   async getData(){
//     const res = await axios('/data');
//     return await res.json();
//  }
  

  return (
    <div> 
        <Main ApiFn={(getVinRequest)} type="xdd"></Main>
        {/*<Info></Info>}
        */
  }
        
        <Raport></Raport>
     


   </div>
  );
}

export default App;
