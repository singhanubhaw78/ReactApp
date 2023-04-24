import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
const Header = () => {
  return (
    <nav>
        <h1>TechyStar</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            {/* #about isliye ki scroll hoke about pe chala jayega.... that's why is in sttyle.scss scroll-behaviour:smooth */}
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brand</HashLink>
            <Link to={"/services"}>Services</Link>
            {/* complain number: 682044931942 */} 
        </main>
    </nav>
  )
}

export default Header