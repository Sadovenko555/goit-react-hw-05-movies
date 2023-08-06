import styled from 'styled-components';

export const CastContainer = styled.div`
  padding: 2rem;
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const CastItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;

  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
  }
`;
