import React    from "react";
import { Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './PlantItem.css';
import imgPot2 from '../../issets/image/pot2.jpg';
import CareScale from "../CareScale";

function PlantItem() {
  return (
    <>
               <Col className='col-ms-12 col-md-6 col-lg-4 mb-4' >
                    <Card style={{ width: '18rem' }} className="card_plant_item  mx-auto">
                         <div className='conteneur_pot'>
                              <Card.Img variant="top" src={imgPot2} className="img_pot" />
                         </div>
                         <Card.Body className='text-start'>
                         <Card.Title>Card Title</Card.Title>
                         <Card.Text>
                              {/* <CareScale /> */}
                              Some quick example text
                         </Card.Text>
                         <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                    </Card>
               </Col>
    </>
  );
}

export default PlantItem;
