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
  MobileMenuItem,
  NavListItem,
  NavLink,
  NavMenu,
  MobileDropDown,
  MobileDropDownItem,
  IconWrap,
  MobileMenuP,
} from './header.style';
import logo from '../../assets/photo/logo.svg';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const NavItem = props => {
    return (
      <>
        <NavListItem>
          {props.menuName ? props.menuName : 'Menu'}
          {props.noDropdown ? (
            ''
          ) : (
            <DropDown>
              {props.subMenu ? (
                props.subMenu.map((sub, i) => {
                  return (
                    <NavLink href={sub['url']} key={i}>
                      <DropDownItem>{sub['name']}</DropDownItem>
                    </NavLink>
                  );
                })
              ) : (
                <DropDownItem>Link</DropDownItem>
              )}
            </DropDown>
          )}
          {props.noIcon ? (
            ''
          ) : (
            <IconWrap>
              <DropDownIcon />
            </IconWrap>
          )}
        </NavListItem>
      </>
    );
  };

  const MobileDropdownComponent = props => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <MobileMenuItem
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          noDropdown={props.noDropdown}
        >
          <NavLink href={props.href}>
            <MobileMenuP>
              {props.menuName ? props.menuName : 'Menu'}
            </MobileMenuP>
          </NavLink>
          {props.noIcon ? (
            ''
          ) : (
            <IconWrap isOpen={isOpen}>
              <DropDownIcon />
            </IconWrap>
          )}
        </MobileMenuItem>

        {props.noDropdown ? (
          ''
        ) : (
          <MobileDropDown isOpen={isOpen}>
            {props.subMenu ? (
              props.subMenu.map((sub, i) => {
                return (
                  <NavLink href={sub['url']} key={i}>
                    <MobileDropDownItem>{sub['name']}</MobileDropDownItem>
                  </NavLink>
                );
              })
            ) : (
              <MobileDropDownItem>sub menu</MobileDropDownItem>
            )}
          </MobileDropDown>
        )}
      </>
    );
  };

  const toggleMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Container>
      <Wrap justCont="space-between" pad="32px 24px">
        <LogoLink href="#">
          <Logo src={logo} alt="" />
        </LogoLink>
        <MenuBtn onClick={toggleMenu}>
          <FaBars />
        </MenuBtn>
        <MobileMenu show={showSidebar}>
          <MobileDropdownComponent
            menuName="Community"
            subMenu={[
              { name: 'Link 01', url: '#url_01' },
              { name: 'Link 02', url: '#url_02' },
              { name: 'Link 03', url: '#url_03' },
            ]}
          />
          <MobileDropdownComponent menuName="Docs" />
          <MobileDropdownComponent menuName="Media" />
          <MobileDropdownComponent
            menuName="Blog"
            noDropdown
            noIcon
            href="blog"
            noContent
          />
        </MobileMenu>
        <NavMenu>
          <NavItem
            menuName="Community"
            subMenu={[
              { name: 'Link 01', url: '#url_01' },
              { name: 'Link 02', url: '#url_02' },
              { name: 'Link 03', url: '#url_03' },
            ]}
          />
          <NavItem menuName="Docs" />
          <NavItem menuName="Media" />
          <NavItem menuName="Blog" noDropdown noIcon href="blog" noContent />
        </NavMenu>
      </Wrap>
    </Container>
  );
};

export default Header;
