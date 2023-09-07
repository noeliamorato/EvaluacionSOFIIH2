import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">Gestión de productos (medicamentos) del hospital  </Link>
        </Logo>
        <NavLinks>
          <NavLink to="/medicamentos">Medicamentos</NavLink>
          <NavLink to="/categorias">Categorías</NavLink>
        </NavLinks>
      </Nav>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
  background-color: #333;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

