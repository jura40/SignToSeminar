import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Kontakt() {
    return (
    <div className='kontakt'>
        <Link to ='/' style={{color : 'black', margin : '50px',position :'fixed',top :'0'}}>HOME</Link> <br/>

        Kontaktinformation<br/>
Telefon <br/>
031-786 99 00 55 88 <br/>
Postadress <br/>
Göteborgs universitet <br/>
Box 100 <br/>
405 30 Göteborg <br/>
           <br/>
Organisationsnummer: 123456-7890 <br/>
Besöksadress <br/>
Universitetsplasen 1 <br/>
mail : info.seminarium@sem.se <br/>

        
    </div>
 )
 }
 export default Kontakt;