import styled from 'styled-components';
import {
  FaAngleDown,
  // FaBars
} from 'react-icons/fa';

// const typeface = (props) => props.theme.typeface;
const primary = props => props.theme.primary;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  @media screen and (max-width: 480px) {
    width: 150px;
    height: auto;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: ${({ flexDir }) => (flexDir ? flexDir : 'row')};
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  /* position: relative; */
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;

  margin-left: ${({ marL }) => (marL ? marL : '0px')};

  list-style-type: none;
  cursor: pointer;

  /* border: 3px solid white; */
`;

export const NavLink = styled.a``;

export const DropDownIcon = styled(FaAngleDown)`
  color: ${primary};
  margin-left: 8px;
`;

export const DropDown = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  /* width: 100%; */

  position: absolute;
  top: 70px;
  /* left: 0; */

  color: #fff;

  ${NavListItem}:hover & {
    display: flex;
  }

  border: 3px solid white;
`;

export const DropDownItem = styled.p`
  &:hover {
    background-color: ${primary};
  }
`;

export const MenuBtn = styled.div`
  display: none;
  padding: 16px;
  color: #fff;

  border: 1px solid white;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

// export const MenuBtn = styled(FaBars)`
//   color: #fff;
// `;

export const MobileMenu = styled.ul`
  display: ${({ show }) => (show ? 'flex' : 'none')};
`;
