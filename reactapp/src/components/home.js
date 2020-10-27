import React from 'react';
import { Link } from 'react-router-dom';
import '../components/seminarsItem/style.css';
 
function Home() {
    return (
        <div>
            <div className="container">
                <div className="nav-wraper">
                    <div className="left-side">
                        <div>
                            <Link to ='/' className="active" style={{ color: 'black' }}>Home</Link>
                        </div>
 
                        <div className="naw-link-wraper"  >
                            <Link to='/seminars' style={{ color: 'black' }}>Seminarium</Link>
                        </div>
                        <div className="naw-link-wraper">
                            <Link to ='/kontakt' style={{ color: 'black' }}>Kontakt</Link>
                        </div>
                        <div>
                            <Link to ='/omoss' style={{ color: 'black' }}>Om Oss</Link>
                        </div>
 
                    </div>
                    <div className="right-side">
                        <div>SEMINARIER</div>
                    </div>
                </div>
            </div>
 
            <div className="mid-text">
                <h1>Seminarier och föreläsningar</h1>
            </div>
 
            <div>
                <h3>
                    Välkommen till Seminarium AB.
    </h3>
            </div>
            <div className="textbox">
                <p>
                    Här kan du hitta senaste seminariuem som söks ut på marknad. Våra trevliga och hög
                    utbildade profesorer Vanja, Nusmir och Jura väntar på er!
    </p>
            </div>
        </div>
    )
}
 
export default Home