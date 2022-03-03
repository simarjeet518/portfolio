import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import {MdMenu , MdClose} from 'react-icons/md'

const NavMenuStyles = styledComponents.div`
 text-decoration:none;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  padding: 1rem 0;
  z-index: 100;
  background: var(--dark-bg);
  ul{
    max-width: 1200px;
    margin:0 auto;
    width: 90%;
    text-align:center;
    li{
      display:inline-block;
      border-radius: 8px;
      transition: .3s ease background-color;
      &:hover {
        background-color: var(--deep-black);
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

  }
  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    .mobile-menu-icon {
      display:block;
    }
    .closeNavIcon {
      display: none;
    }
  }
  }
`;

export default function NavMenu(){
  return(
    <NavMenuStyles>
      <div className="mobile-menu-icon">
      <MdMenu />
      </div>
      <ul>
        <div className="closeNavIcon">
          <MdClose />
        </div>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  )
}