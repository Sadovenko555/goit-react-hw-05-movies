import { NavLink, Outlet } from "react-router-dom";
import styled from '@emotion/styled';
import { Suspense } from "react";
import { Header, HeaderContainer, Nav } from "./Layout.styled";

const Layout = () => {
  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;

    &.active {
      color: orange;
    }
  `;

  return (
    <div>
      <Header>
        <HeaderContainer>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </HeaderContainer>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
