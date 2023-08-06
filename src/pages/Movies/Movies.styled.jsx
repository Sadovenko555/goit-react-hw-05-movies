import styled from 'styled-components';

export const MoviesContainer = styled.main`
  padding: 2rem;
`;

export const SearchBoxContainer = styled.div`
  margin-bottom: 1rem;
`;

export const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const NoResultsMessage = styled.p`
  text-align: center;
  font-weight: bold;
  color: red;
`;
