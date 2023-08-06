import styled from 'styled-components';

export const MovieInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MovieDetails = styled.div`
  flex: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const UserScore = styled.p`
  font-weight: bold;
`;

export const OverviewTitle = styled.h3`
  margin: 1rem 0 0.5rem;
`;

export const GenresTitle = styled.h3`
  margin: 1rem 0 0.5rem;
`;

export const GenresList = styled.p`
  margin: 0;
`;
