import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {PhoneFill} from '@styled-icons/bootstrap/PhoneFill';
import {Email} from '@styled-icons/evaicons-solid/Email';
import {DocumentLink} from '@styled-icons/fluentui-system-filled/DocumentLink';
import socialMediaArrow from '../assets/images/social-media-arrow.svg';

const ContactStyle = styled.div`
.contact__details{
  font-size:2rem;
  padding:5px;
}
 .profile__social {
    width:100%;
    display:flex;
    flex-direction:column
  }
  .linkedln{
   padding-left:20px;
   padding-right:10px;
    // margin-left:20px;
  }
  .social__Links {
    margin-top:-10px;
  }

  img {
      margin-left:10px;
   
      transform: translateY(17px) rotate(-90deg);
    
  }
  @media only screen and (max-width: 768px) {
    .contact__details{
      font-size:1.7rem;
      padding:0;
    }
    .profile__social{
      width:70%;
      margin-left: 4rem;
    }
   
     
    }
  }

`;

function Contact() {
  return (
    <ContactStyle>
    <div className="profile__social">
             
            
                  <span className='contact__details'>
                    <PhoneFill size={35} color="red"/> +17788334525
                  </span>
              
                  <span className='contact__details'>
                    <Email size={35} BackgroundColor="red"/> kaursimarjeet2406@gmail.com
                  </span>
                  <span className='contact__details hide'>
                  <a href="https://github.com/simarjeet518" target="_blank"
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
