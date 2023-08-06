import styled from 'styled-components';

export const HomeContainer = styled.div`
  text-align: center;
`;

export const TrendingTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const ErrorMessage = styled.p`
  font-weight: bold;
  color: red;
`;
