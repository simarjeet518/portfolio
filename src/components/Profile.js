import React from 'react';
import profileImg from '../assets/images/profile.jpeg';
import PText from './Ptext';
import Button from './Button';
import socialMediaArrow from '../assets/images/social-media-arrow.svg';
import scrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';



// const GitHub = styled(git)`
//   color: red;
// `

const ProfileStyles = styled.div`
  .profile {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .profile__heading {
    font-size: 2rem;
    margin-bottom: -16rem;
    position: relative;
    margin-left:-330px;
    span {
      display: inline-block;
      width: 100%;
      color: var(--white);
    }
    .profile__name {
      font-family: 'Montserrat SemiBold';
      font-size: 4.5rem;
      color: var(--white);
    }
  }
  .profile__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .profile__info {
    margin-top: -18rem;
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
  .profile__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .profile__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .profile {
      min-height: 750px;
    }
    .profile__heading {
      font-size: 1.4rem;
      margin-left:-80px;
      margin-bottom: -7rem;
      .profile__name {
        font-size: 4.5rem;
      }
    }
    .profile__img {
      height: 300px;
    }
    .profile__info {
      margin-top: 3rem;
    }
    .profile__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .profile__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .profile__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .profile__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
`;

function Profile() {
  return (
    <ProfileStyles>
      <div className='profile'>
        <div className='container'>
          <h1 className='profile__heading'>
            {/* <span>Hello, This is Simar</span>
            <span className="profile__name">Simar</span> */}
            <PText>Hi,I'm Simar</PText><br /><br />
            <PText>Welcome to my Portfolio!</PText>
          </h1> 
          <div className='profile__img'>
            <img src={profileImg} alt="/"/>
          </div>
          {/* <div className='profile__info'>
          <PText>Welcome to my site !</PText>
          <Button btnText="see my works" btnLink="/projects" outline={false}/>
          </div> */}

          <div className="profile__social">
            <div className='profile__social__indicator'>
              <p>Follow</p>
              <img src={socialMediaArrow} alt="social media arrow" />
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
          
          <div className='profile__scrollDown'>
            <p>Scroll</p>
            <img src={scrollDownArrow} alt="scroll dwon arrow" />
          </div>
        </div>
      </div>
    </ProfileStyles>
  )
}

export default Profile
