import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  @media screen and (max-width: 480px) {
    width: 150px;
    height: auto;
  }
`;
