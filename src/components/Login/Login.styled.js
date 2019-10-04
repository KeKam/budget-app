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
  width: 25rem;
  opacity: 0.9;
`;

Login.Title = styled.h1`
  margin: 0 0 1.2rem 0;
  line-height: 1;
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