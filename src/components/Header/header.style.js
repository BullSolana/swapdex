import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

const typeface = props => props.theme.typeface;
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
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  list-style-type: none;
  cursor: pointer;
`;

export const NavLink = styled.a``;

export const DropDownIcon = styled(FaAngleDown)`
  color: ${primary};
  margin-left: 8px;
  transition: 200ms ease-in-out;

  ${NavListItem}:hover & {
    transform: rotate(180deg);
  }
`;

export const DropDown = styled.div`
  display: flex;
  background-color: #121b23;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 20px;
  left: 0;
  color: #fff;
  z-index: 1;
  box-shadow: 1px 1px 5px 1px rgba(200, 200, 200, 0.1);
  transform: scaleY(0);
  transform-origin: top;
  transition: 200ms ease-in-out;

  ${NavListItem}:hover & {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const DropDownItem = styled.p`
  padding: 4px;

  &:hover {
    background-color: ${primary};
    color: ${typeface};
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
