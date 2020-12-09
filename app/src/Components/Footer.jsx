import React from 'react';

import '../style/Footer.css';
import {Row,Col} from 'react-bootstrap';

 function Footer() {
    return (
      
        <Row>
            <Col className="footer text-white bg-dark d-flex  align-items-center">
            <p className="mx-auto text-center"> Copyright © 2020 Design by Misza</p>
            </Col>
        </Row>
        
    )
}
export default Footer