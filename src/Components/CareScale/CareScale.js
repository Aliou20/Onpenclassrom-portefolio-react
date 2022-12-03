import React    from "react";
import imgEtoile from "../../issets/image/etoile-bleue.png"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './CareScale.css'

function CareScale() {
  return (
     <>
          <div className='row_etoile'>
               <div className='colonne_etoile'>
                    <img src={imgEtoile} alt="etoile" className="w-100"/>
               </div>
               <div className='colonne_etoile'>
                    <img src={imgEtoile} alt="etoile" className="w-100"/>
               </div>
               <div className='colonne_etoile'>
                    <img src={imgEtoile} alt="etoile" className="w-100 "/>
               </div>

          </div>
     </>
  );
}

export default CareScale;