import styled from 'styled-components';

export const ExpenseList = () => {};

ExpenseList.Header = styled.div`
  background: #f5f5f5;
  margin-bottom: 0;
  padding: 1.2rem 1.6rem;
  border: 1px solid #dcdcdc;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

ExpenseList.Mobile = styled.div`
  @media (min-width: 45rem) {
    display: none;
  }
`;

ExpenseList.Desktop = styled.div`
  @media (max-width: 44.99rem) {
    display: none;
  }
`;

ExpenseList.Message = styled.div`
  border: 1px solid #dcdcdc;
  border-top: none;
  color: #666;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  text-decoration: none;
  transition: background 0.3s ease;
  align-items: center;
  justify-content: center;

  @media (min-width: 45rem) {
    justify-content: center;
  }
`;

ExpenseList.List = styled.div`
  margin-bottom: 1.6rem;

  @media (min-width: 45rem) {
    margin-bottom: 3.2rem
  }
`;