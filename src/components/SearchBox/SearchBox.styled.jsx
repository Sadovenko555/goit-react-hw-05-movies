import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  max-width: 300px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: orange;
    box-shadow: 0px 0px 4px rgba(255, 165, 0, 0.5);
  }
`;
