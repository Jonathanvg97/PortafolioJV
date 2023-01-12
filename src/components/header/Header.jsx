import React from 'react'
import avatar from './image/header.png'


function Header() {
    return (
    <div className="header">
        <ul>
            <li> <button>About Me</button> </li>
            <li><button>Proyects</button> </li>
            <li><button>Contact</button></li>
        </ul>
        <h1 className='Principal'>take the next <br/> step with me</h1>
        {/* <Link to="/Contacts"><button className='contacts'>Contactanos </button></Link> */}
    </div>)
};

export default Header;
