import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 0;
  }

  p.author {
    font-weight: bold;
  }
`;
