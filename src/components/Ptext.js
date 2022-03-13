import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  margin 0 auto;
  text-align: left;
  font-size: 1.8rem;
  line-height: 1.3em;
  color: var(--gray-1);
  .para{
    margin-top:0;
  }
  .hide {
    margin-top:35rem;
  } 
  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
   
  }
`;

export default function Ptext(props) {
 
  return (
    <PStyle className={props.showContacts ? 'hide' :'para'}>
      <p>{props.children}</p>
    </PStyle>
  );
}
