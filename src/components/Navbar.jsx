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
            <Link to='#' className='logo'>
                <img src={Logo} alt="logo" />
            </Link>
            <input type="checkbox"  className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' htmlFor="menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <Link to='#'>Home</Link>
                </li>
                <li>
                    <Link to='#'>Features</Link>
                </li>
                <li>
                    <Link to='#'>Offer</Link>
                </li>
                <li>
                    <Link to='#'>About</Link>
                </li>
                <li>
                    <Link to='#'>Contact</Link>
                </li>
            </ul>
       </nav>
     );
}
 
export default Navbar;