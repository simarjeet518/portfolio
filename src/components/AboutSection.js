import React from 'react';
import SectionTitle from './SectionTitle';
import styled from 'styled-components';
import Button from './Button';
import PText from './Ptext';
import AboutImg from '../assets/images/AboutImg.jpg';
import profileImg from '../assets/images/profile.jpeg';
import {Github} from '@styled-icons/boxicons-logos/Github'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // text-align: left;
    margin-left:10%;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  // .aboutSection__right {
  //   margin-left: -400px;
  // }
  .aboutSection__right {
    margin-left:-300px;
  }
  .profile__social,
  .profile__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .profile__social {
    left: 50px;
  }
  .profile__scrollDown {
    right: 50px;
  }
  .profile__social__indicator,
  .profile__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
 
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .aboutImg {
   width: 300px;
   height: 300px;
   border-radius:50%;
   padding-bottom:10px;
  }

  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      
      flex: 4;
    }
    .aboutSection__right {
      margin-left:70px;
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      margin-left:0%;
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      margin-left:70px;
    }
    aboutSection__left {
     
      margin-top:-3rem;
    }
    .section-title {
      text-align: center;
    }

    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
      <div className="aboutSection__left">
          <img className="aboutImg" src={AboutImg} alt="Img" />
          <div className="profile__social">
            <div className='profile__social__indicator'>
              <p>Follow</p>
            </div>
            <div class="profile__social__text">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/simarjeet-kaur-518h/"
                  target="_blank"
                  rel="noreferrer"
                   > 
                  <LinkedinSquare />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/simarjeet518" target="_blank"
                  rel="noreferrer"
                   >
                    <Github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
        <div className="aboutSection__right">
          <PText>
           Hello , my name is Simarjeet  and i am a Full Stack Developer based in Vancouver, BC. I love solving problems with unique algorithms, curious, driven and always looking to improve my abilities, not afraid to step out of my comfort Zone, ready to face new challanges and learn from my failures.<br /><br />

           My journey to become a developer started with covid, When i started spending my free time in coding, by the time coding became my passion and finally decided to turn it into career.I started studying coding Full-time and joined lighthouse labs Full Stack Web Developemt Bootcamp.< br /><br />
          
          I'm  now seeking a full-time position and would be really happy if we can discuss what i can bring to your team.< br /><br />

          Thank You for visiting and viewing my portfolio site!
          <br /><br />
         <b>Languages and Tools</b> <br />
         JavaScript | HTML5 | CSS3 | SASS | C++ | Ruby on Rails | PHP | ReactJS | Express | NodeJS | Ajax | EJS | jQuery | Bootstrap | SQL | PostgresSQL | MongoDB | Git/Github | Tableau | REST API | Mocha | Chai | Jest | Cypress | Storybook  
          </PText>
        </div>
       
      </div>
    </AboutSectionStyles>
  );
}

export default AboutSection

