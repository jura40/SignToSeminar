import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function Seminars() {
    return (
        <div>
        <ul className="semlist">
            <li><a as={Link} to='/seminar1'>Presentationsteknik</a></li>
            <p>- här kan du läsa om Nusmir tryck på Presentationsteknik för [mer info]</p>
            <li><a as={Link} to='/seminar2'>sem2</a></li>
            <p>- här kan läsa omfggdsfgdafbgdfbfdb tgqertg gra ggar rg rgergr <br />
                gdrdrhrgherhg h herhrehre htrhthr thr<br />
            </p>
            <li><a as={Link} to='/seminar3'>sem3</a></li>
            <p>- här kan du läsa om fgkdsf fdgjfd gfd gdfdfm</p>
            <li><a style={{fontSize: '25px'}}>HOME</a></li>
        </ul>
    </div>
    )
}

export default Seminars