import styled from 'styled-components';

export const Login = () => {};

Login.Wrapper = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/houses.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

Login.Panel = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  padding: 3.2rem 1.6rem;
  text-align: center;
  width: 15rem;
  opacity: 0.9;
  
  @media (min-width: 45rem) {
    width: 25rem;
    padding: 3.2rem 1.6rem;
  }
`;

Login.Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 1.2rem 0;
  line-height: 1;

  @media (min-width: 45rem) {
    font-size: 3rem;
  }
`;

Login.Text = styled.p`
  font-size: 1.2rem;

  @media (min-width: 45rem) {
    font-size: 1.5rem;
  }
`;

Login.Button = styled.button`
  background: #4078c0;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`;