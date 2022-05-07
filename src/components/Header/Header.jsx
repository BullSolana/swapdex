import React, { useState } from 'react';
import { Container, Wrap } from '../components';
import { FaBars } from 'react-icons/fa';

import {
  DropDown,
  DropDownIcon,
  DropDownItem,
  Logo,
  LogoLink,
  MenuBtn,
  MobileMenu,
  NavListItem,
  // NavLink,
  NavMenu,
} from './header.style';
import logo from '../../assets/photo/logo.svg';

const Header = () => {
  const [
    showSidebar,
    // setShowSidebar
  ] = useState(false);

  const NavItem = props => {
    return (
      <NavListItem marL="32px">
        {props.children}
        {props.noIcon ? '' : <DropDownIcon />}
      </NavListItem>
    );
  };

  return (
    <Container>
      <Wrap justCont="space-between" pad="32px">
        <LogoLink href="#">
          <Logo src={logo} alt="" />
        </LogoLink>
        <MenuBtn>
          <FaBars />
        </MenuBtn>
        <MobileMenu show={showSidebar}></MobileMenu>
        <NavMenu>
          <NavItem>
            Community
            <DropDown>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
            </DropDown>
          </NavItem>
          <NavItem>
            Docs
            <DropDown>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
            </DropDown>
          </NavItem>
          <NavItem>
            Media
            <DropDown>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
              <DropDownItem>item</DropDownItem>
            </DropDown>
          </NavItem>
          {/* <NavItem>
            Testy
            <DropDown>
              <NavMenu
                //
                flexDir="column"
              >
                <NavListItem>
                  <NavLink href="#">one</NavLink>
                </NavListItem>
                <NavListItem>
                  <NavLink href="#">two</NavLink>
                </NavListItem>
              </NavMenu>
            </DropDown>
          </NavItem> */}
          <NavItem noIcon>Blog</NavItem>
        </NavMenu>
      </Wrap>
    </Container>
  );
};

export default Header;
