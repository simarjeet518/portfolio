import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {PhoneFill} from '@styled-icons/bootstrap/PhoneFill';
import {Email} from '@styled-icons/evaicons-solid/Email';
import {DocumentLink} from '@styled-icons/fluentui-system-filled/DocumentLink';
import {Contacts} from '@styled-icons/typicons/Contacts';
import socialMediaArrow from '../assets/images/social-media-arrow.svg';
import {MdClose} from 'react-icons/md'

const ContactStyle = styled.div`
.contact__details{
  font-size:2rem;
  padding:6px;
}
 .profile__social {
    width:100%;
    display:flex;
    flex-direction:column
    
  }
  .linkedln{
   padding-left:20px;
   padding-right:10px;
  }
  .social__Links {
    margin-top:-10px;
  }

  img {
      margin-left:10px;
      transform: translateY(17px) rotate(-90deg);
  }
  .mobile-menu-icon{
    font-size:2rem;
    padding:5px;
    right: 1rem;
    top:1rem;
    cursor: pointer;
    display: none;
    outline:none;
}
.closeNavIcon {
  display: none;
}
.menu {
  width:100%;
  height:100%;
  object-fit=cover;
}
  @media only screen and (max-width: 768px) {
    .closeNavIcon {
      display: block;
    }
    .hide-item{
      --top:41rem;
      transform: translateX(calc(-100% - var(--top)));
       
    }
    .contact__details {
      font-size: 1.8rem;
    }
    .mobile-menu-icon{
      display:block; 
    }
    .profile__social {
      --top: 41rem;
      transition: .3s linear ;
      background-color: var(--deep-dark);
      padding:1rem;
      text-align:left;
      width: 90%;
      max-width: 500px;
      border-radius: 12px;
      position: absolute;
      right:2rem;
      .social__Links{
        padding-bottom:3rem;
      }
      
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
    
  }

`;

function Contact(props) {
  const {showContacts, setShowContacts} = props;

  return (
    <ContactStyle>
      <div className="mobile-menu-icon"
      onClick={() => setShowContacts(!showContacts)}
      role="button"
      onKeyDown={() => setShowContacts(!showContacts)}
      tabIndex={0}
      >
        <Contacts size={35} BackgroundColor="red"/>Contacts
      </div>

    <div className={!showContacts ? 'profile__social hide-item' :'profile__social'}> 
      <div className="closeNavIcon"
        onClick={() => setShowContacts(!showContacts)}
        role="button"
        onKeyDown={() => setShowContacts(!showContacts)}
        tabIndex={0}
        >
          <MdClose className='menu'/>
      </div>     
      <span className='contact__details'>
        <PhoneFill size={35} color="red"/> +17788334525
      </span>
  
      <span className='contact__details'>
        <Email size={35} BackgroundColor="red"/> kaursimarjeet2406@gmail.com
      </span>

      <span className='contact__details'>
        <a href="https://resume.creddle.io/resume/czfuptbd9mc" 
        target="_blank"
        rel="noreferrer"
        >
          <DocumentLink size={35} /> Resume
        </a>
      </span >

      <div className='social__Links'>
        <span className='contact__details'>Follow </span>
        <span><img src={socialMediaArrow} alt="social media arrow" /></span> 
        <a href="https://www.linkedin.com/in/simarjeet-kaur-518h/"
        target="_blank"
        rel="noreferrer"
        className="linkedln"
        > 
          <LinkedinSquare size={35}/>
        </a>
        <a href="https://github.com/simarjeet518" target="_blank"
        rel="noreferrer"
        >
         <Github size={35}/>
        </a>
      </div>
    </div>
 </ContactStyle>
  )
}

export default Contact
