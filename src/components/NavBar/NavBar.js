import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn, FiPhoneCall, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavIcon,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavSearch,
} from "./NavBar.elements";
import SearchBox from "./SearchBox";

const NavBar = ({ onSearchChange }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              N_AUTO
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavSearch>
                <SearchBox
                  className="search-box"
                  onChangeHandler={onSearchChange}
                  placeholder="Rechercher un produit, une réference ou une marque"
                />
              </NavSearch>
              <NavItem>
                <NavLink to="/contact">
                  Contact
                  <FiPhoneCall />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/connexion">
                  Connexion
                  <FiLogIn />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/basket">
                  Panier <FiShoppingCart />
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
