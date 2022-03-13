import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 370px;
    margin-bottom:10px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    transition: transform 450ms;
    img {
      height: 100%;
      width:100%;
      
    }
   
  }
  .projectItem__img:hover {
    transform: scale(1.08);
  }
  
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    min-height: 250px;
  }
  .projectItem__title {
    text-align:center;
    font-size: 2.3rem;
    color: var(--gray-1);
  }
  .projectItem__desc {
    font-size: 2rem;
    font-family: 'RobotoMono Regular';
    margin-top: 2rem;
    color: var(--gray-1);
  }
  .projectItem__stack {
    text-align:center;
    font-size: 2rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    color: grey;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  techStack = 'tech',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link='/projects'
}) {
  return (
    <ProjectItemStyles>
      <a href={link} className="projectItem__img" target="_blank" rel="noreferrer">
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__stack">{techStack}</p>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}