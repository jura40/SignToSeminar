import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Seminars() {
    return (
        <div>
        <ul className="semlist">
            <li><Link to='/seminars/sem1'>Presentaionsteknik</Link></li>
            <p>- här kan du läsa om Nusmir tryck på Presentationsteknik för [mer info]</p>
            <li><Link to='/seminars/sem2'>sem2</Link></li>
            <p>- här kan läsa omfggdsfgdafbgdfbfdb tgqertg gra ggar rg rgergr <br />
                gdrdrhrgherhg h herhrehre htrhthr thr<br />
            </p>
            <li><Link to='/seminars/sem3'>sem3</Link></li>
            <p>- här kan du läsa om fgkdsf fdgjfd gfd gdfdfm</p>
            <li><a style={{fontSize: '25px'}}>HOME</a></li>
        </ul>
    </div>
    )
}

export default Seminars