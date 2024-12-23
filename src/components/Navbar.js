import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import TocIcon from '@mui/icons-material/Toc';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState } from 'react';
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    } 
    return (

    
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close" }>
            <img src={Logo} />
            <div className='hiddenLinks'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={toggleNavbar} >
                <TocIcon/>
            </button>
            
        </div>
    </div>
  )
}
export default Navbar