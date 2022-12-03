import React    from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Categories() {
  return (
     <>
          <div className='d-flex mt-3 mb-3'>
               <Form.Select aria-label="Default select example" className='mx-4'>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
               </Form.Select>
               <Button>Categories</Button>
          </div>
     </>
  );
}

export default Categories;
