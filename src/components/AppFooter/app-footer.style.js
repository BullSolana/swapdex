import styled from 'styled-components';

const primary = props => props.theme.primary;

export const Copyright = styled.p``;

export const AppFooterWrap = styled.div`
  background-color: #060b0f;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 20px 24px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      #060b0f 15%,
      ${primary} 50%,
      #060b0f 85%
    )
    1 10%;
  border-image-width: 2px 0 0 0;
`;

export const AppFooterSocials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Social = styled.a`
  color: ${primary};
`;

export const SocialIcon = styled.img`
  padding: 16px;
`;
