import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './style.css';

function Omoss() {
    return (

    <div className ="omoss">
        <Link to ='/' style={{color: 'black', margin : '50px'}}>HOME</Link>

        <article style={{marginTop:'90px'}}>2018 markerar en ny era i vår historia.<br/>
             Det är året som vi fyller 10 år och som vi påbörjar etableringen av Zington utanför Sveriges gränser.<br/>
             Efter ett decennium på marknaden kan vi konstatera att vi utvecklat en kultur och en affärsmodell som uppskattas av både medarbetare och kunder. <br/>
             Vi fortsätter vår resa mot att vara strategisk partner med alla våra kunder samt belönas med utmärkelsen 'Karriärföretag' <br/>
             som är en kvalitetsstämpel på att vi erbjuder unika karriär- och utvecklingsmöjligheter som attraherar studenter och yrkesverksamma.<br/>
            
            Med drygt 400 medarbetare i Göteborg är vi även redo att påbörja vår expansion utomlands - med första anhalten i Oslo!</article>
        
     </div>

)
}
export default Omoss