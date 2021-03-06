import {useState} from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeLogoBack =() =>{
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeLogoBack);

    return ( 
       <nav className={nav ? 'nav active' : 'nav'}>
            <Link to='main' className='logo'>
                <img src={Logo} alt="logo" />
            </Link>
            <input type="checkbox"  className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' htmlFor="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <Link to='main' smooth={true} duration={1000}>Home</Link>
                </li>
                <li>
                    <Link to='features' smooth={true} duration={1000}>Features</Link>
                </li>
                <li>
                    <Link to='offer' smooth={true} duration={1000}>Offer</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={1000}>About</Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={1000}>Contact</Link>
                </li>
            </ul>
       </nav>
     );
}
 
export default Navbar;