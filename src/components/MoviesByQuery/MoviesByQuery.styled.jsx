import styled from 'styled-components';

export const MoviesContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: orange;
    }
  }
`;

export const NoMoviesMessage = styled.p`
  font-weight: bold;
`;
