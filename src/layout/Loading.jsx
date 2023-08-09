import React from 'react'
// import '../css/loading.css'
// import logo from '../img/logo.png'
import {} from 'reactstrap';
import { Spinner } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';



export const loading = () => {
  return (
    <>
    
 <div caja-spinner>
 <Spinner color='danger'/>
<p>Calentando los hornos...</p>
 </div>

    </>
  )
}

export default loading
