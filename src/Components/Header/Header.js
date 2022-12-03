import React    from "react";
// import template from "./Header.jsx";

import {Navbar , Container} from 'react-bootstrap'
// import imgNavbar from '../issets/image/Feuille.png'
import imgNavbar from '../../issets/image/Feuille.png'

function Header() {
     return(
          <>
               <Navbar expand="lg" variant="light" bg="light">
                    <Container className='d-flex justify-content-end'>
                    <Navbar.Brand href="#" >
                         <img
                         src={imgNavbar}
                         width="30"
                         height="30"
                         className="d-inline-block align-top"
                         alt="React Bootstrap logo"
                         />
                         Navbar
                    </Navbar.Brand>
                    </Container>
               </Navbar>
          </>
     )
}

export default Header;