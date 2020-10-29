import React from 'react';
import { Link } from 'react-router-dom';
import '../components/seminarsItem/style.css';

function Seminars() {
    return (
        <div>
        <ul className="semlist">
            <li><Link to='/seminars/sem1'>Presentaionsteknik</Link></li>
            <p>- Det här är kursen för er som vill hålla presentationer [mer info]</p>
            <li><Link to='/seminars/sem2'>KA-DAGEN</Link></li>
            <p>KA-DAGEN är en av Sveriges största möteplatser för kontrollansvariga<br />
            </p>
            <li><Link to='/seminars/sem3'>Våga tala</Link></li>
            <p>-Scenskräck, talfobi, blackouts</p>
            <li><Link to ='/' style={{fontSize: '25px'}}>HOME</Link></li>
        </ul>
    </div>
    )
}

export default Seminars