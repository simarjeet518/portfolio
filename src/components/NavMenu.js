import {useState} from 'react';
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import {MdMenu , MdClose} from 'react-icons/md'

const NavMenuStyles = styledComponents.div`
 text-decoration:none;
  position: fixed;
  top:0; 
  width:100%;
  padding: 1rem 0;
  z-index: 100;
  background: var(--dark-bg);
  ul{
    max-width: 1200px;
    right:0;
    width: 90%;
    text-align:right;
    li{
      display:inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      &:hover {
        background-color: var(--gray-2);  
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon{
    position:absolute;
    right: 1rem;
    top:1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline:none;
    * {
    pointer-events: none;
  }

  }
  .closeNavIcon {
    display: none;
  }
  .menu {
    width:100%;
    height:100%;
    object-fit=cover;
    color: var(--gray-1);
  }


  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item{
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display:block;
    }
    li {
      width:fit-content;
      margin-left:30%;
    }
    .navItems {
      --top: 1rem;
      transition: .3s ease transform;
      background-color: var(--deep-dark);
      padding:2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
    li {
      display:block;
      margin-bottom: 1rem;
    }
    }
    
  }
  }
`;

export default function NavMenu(){
  const [showNav, setShowNav] = useState(false);

  return(
    <NavMenuStyles>
      <div className="mobile-menu-icon"
      onClick={() => setShowNav(!showNav)}
      role="button"
      onKeyDown={() => setShowNav(!showNav)}
      tabIndex={0}
      >
      <MdMenu className='menu'/>
      </div>
      <ul className={!showNav ? 'navItems hide-item' :'navItems'}>
        <div className="closeNavIcon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
        >
          <MdClose className='menu'/>
        </div>
        <li>
          <NavLink to="/" 
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
          >
           About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
      
      </ul>
    </NavMenuStyles>
  )
}