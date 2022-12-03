import React    from "react";

import { Row } from "react-bootstrap";
import PlantItem from "../PlantItem/PlantItem";


function ShoppingList() {
     return (
          <>
               <div className="mx-auto">
               <Row>
                    <PlantItem />
                    <PlantItem />
                    <PlantItem />
               </Row>
               </div>
          </>
     )
}

export default ShoppingList;
