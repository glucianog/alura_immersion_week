import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s;  
  &:hover, 
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px){
    background-color: var(--primary);
    bottom: 0;
    border: 0;
    border-radius: 0;
    color: var(--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;
    text-align: center;
  }
`;
