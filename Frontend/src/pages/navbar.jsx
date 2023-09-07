
import { Link, Outlet } from 'react-router-dom';
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
      <section>
      <Outlet/>
      </section>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
 display:flex;
 flex-direction:row;
 & section{
  width:100%;
 }
`;

const Nav = styled.nav`
  background-color: #222059;
  display: flex;
flex-direction:column;
height:100vh;
width:250px;
gap:2em;
padding:2em;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: #A4A3BF;
  }
`;

const NavLinks = styled.div`
height:40vh;
  display: flex;
  gap: 2rem;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  width:100%;
  padding:1em;
  border-bottom:solid 1px #A4A3BF;
  &:hover {
   transform:translateX(20px)
  }
`;

