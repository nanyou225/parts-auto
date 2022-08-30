import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ContainerGlobal } from "../../globalStyles";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.NavBar};
  grid-area: nav;
  padding: 0.25rem;
  height: 80px;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavBarContainer = styled(ContainerGlobal)`
  justify-content: space-between;

  ${ContainerGlobal}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-self: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #29323c;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  letter-spacing: 2px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #fb3d28;
    width: auto;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;
export const NavSearch = styled.nav`
  align-self: center;
  margin-right: 10rem;

  .search-box {
    border-radius: 20px;
    border: none;
    outline: none;
    padding: 5px;
    width: 35rem;
    line-height: 30px;
    font-size: 17px;
    margin-left: 25px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin: auto;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #fb3d28;
      transition: all 0.3s ease;
    }
  }
`;
