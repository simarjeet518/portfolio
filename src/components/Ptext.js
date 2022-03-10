import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 3rem;
  line-height: 1.3em;
  p {
  color: var(--white);
  }
  animation: an 1s ease-out 1 both;
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @keyframes an{
    from{
        opacity: 0;
        transform: perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
    }
    to{
        opacity: 1;
        transform: perspective(500px) translate3d(0, 0, 0);
    }
}

`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}