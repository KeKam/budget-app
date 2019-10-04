import styled from 'styled-components';

export const ExpenseForm = () => {};

ExpenseForm.Form = styled.form`
  display: flex;
  flex-direction: column;
  
  > * {
    margin-bottom: 1.6rem;
  }
`;

ExpenseForm.Error = styled.p`
  margin: 0 0 1.6rem 0;
  font-style: italic;
`;

ExpenseForm.Input = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.2rem;
`;

ExpenseForm.Button = styled.button`
  background: #4078c0;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem;
  cursor: pointer;
`;

ExpenseForm.Textarea = styled(ExpenseForm.Input)`
  height: 10rem;
`;