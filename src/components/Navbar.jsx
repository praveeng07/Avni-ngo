import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../images/logo.jpg';
import { links } from '../data';
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={logo} alt="" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}> 
                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : 
                ''}   onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* nav buttons */}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
         {
          isNavShowing ? <MdOutlineClose/>: <FiMenu/>
         }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
