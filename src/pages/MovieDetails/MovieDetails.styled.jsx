import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const BackLink = styled(Link)`
  margin-bottom: 1rem;
  font-weight: bold;
  color: orange;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: darkorange;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: orange;
  }
`;
