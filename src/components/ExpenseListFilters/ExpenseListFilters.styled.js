import styled from 'styled-components';

export const ExpenseListFilters = () => {};

ExpenseListFilters.Filters = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  @media (min-width: 45rem) {
    flex-direction: row;
    margin-bottom: 3.2rem;
  }
`;

ExpenseListFilters.Filter = styled.div`
  margin-bottom: 1.2rem;

  @media (min-width: 45rem) {
    margin: 0 1.2rem 0 0;
  }
`;

ExpenseListFilters.Input = styled.input`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 1.2rem;
  width: 80%;

  @media (min-width: 45rem) {
    font-size: 1.8rem;
    width: 100%;
  }
`;

ExpenseListFilters.Select = styled.select`
  border: 1px solid #cacccd;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0 1.2rem;

  @media (min-width: 45rem) {
    font-size: 1.8rem;
    width: 100%;
  }
`;
