import React, {useState}from 'react';
import styled from 'styled-components';
import PText from './Ptext';
import AboutImg from '../assets/images/AboutImg.jpg';
import Contact from './Contact';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left:10%;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
 
  .aboutSection__right {
    margin-left:-300px;
    display:flex;

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
   object-fit: cover;
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
      position: relative;
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
  const [showContacts, setShowContacts] = useState(false);

  return (
    <AboutSectionStyles>
      <div className="container">
      <div className="aboutSection__left">
          <img className="aboutImg" src={AboutImg} alt="Img" />
          <Contact showContacts={showContacts} setShowContacts={setShowContacts}/>
      </div>
        <div className="aboutSection__right">
          <PText showContacts={showContacts} >
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

