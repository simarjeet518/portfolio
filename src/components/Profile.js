import React from 'react';
import profileImg from '../assets/images/profile.jpeg';
import PText from './Ptext';
import Button from './Button';

function Profile() {
  return (
    <div>
      <div className='container'>
        <h1 className='profile__heading'>
          <span>Hello,This is </span>
          <span>Simar</span>
        </h1> 
        <div className='profile__img'>
          <img src={profileImg} alt="/"/>
        </div>
        <div className='profile__info'>
        <PText>I'm now seeking a full-time position and would really happy if we can discuss what I can bring to your team.</PText>
        <Button btnText="see my works" btnLink="/projects" />
        </div>

      </div>
    </div>
  )
}

export default Profile
