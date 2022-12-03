import React    from "react";

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './Boby.css'

function Body() {
  return (
    <Card style={{ width: '18rem' }} className="carts">
      <Card.Body>
        <Card.Title className='containeur_btn'>
        <Button variant="outline" className=' btn'>Fermé</Button>{' '}
        </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text className='card_text'>
         <h1 className='mb-4'>Panier</h1>
         <ul>
            <li>Prix 290£</li>
            <li>Prix 290£</li>
         </ul>
         <h3>Total : 500£</h3>
         <button className='mt-3'>Connexion</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Body;
