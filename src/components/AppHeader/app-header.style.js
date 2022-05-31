import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const AppHeaderNavMenu = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  top: 4px;

  margin-top: -4px;
`;

export const AppHeaderNavLink = styled(NavLink)`
  color: inherit;

  padding: 20px 24px;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  border-bottom: 4px solid transparent;

  &.active {
    border-bottom: 4px solid #14f195;
  }

  &:hover {
    border-bottom: 4px solid #14f195;
  }
`;

export const WalletConnect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 16px;

  border: 1px solid #14f195;
  border-radius: 8px;
`;

export const WalletImg = styled.img`
  margin-right: 22px;
`;

export const WalletP = styled.p``;
