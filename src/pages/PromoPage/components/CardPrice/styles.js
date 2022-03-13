import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {Layout} from '~/utils/Layout';
import {fontSize} from '~/utils/Layout';

export const Container = styled.View`
  background-color: transparent;
  border-radius: 8px;

  width: 55%;
  margin-top: 5%;
  margin-bottom: 10%;
  position: absolute;
  bottom: -80;
`;

export const WrapperCardHeader = styled.View`
  background-color: blue;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 95%;
  margin: 0 auto;
  ${({theme}) => css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.highPure};
    border: 1px solid ${theme.colors.primary};
  `}
`;
export const CardTitle = styled(Typography)`
  text-transform: uppercase;
  font-size: ${fontSize(8)};
  margin: 2% 0;
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `};
`;

export const WrapperBody = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const WrapperPrice = styled.View`
  /* background-color: blue; */
  justify-content: flex-start;
`;

export const Price = styled(Typography).attrs({
  isBold: true,
})`
  ${({theme}) => css`
    color: ${theme.colors.highPure};
    font-size: ${fontSize(22)};
  `};
`;

export const SubPrice = styled(Typography)`
  font-size: ${fontSize(8)};
  text-transform: capitalize;
  width: ${Layout.width(50)};
  ${({theme, biggerCharacters}) => css`
    color: ${theme.colors.highPure};
  `};
`;

export const FooterCard = styled(Typography)`
  font-size: ${fontSize(9)};
  margin-top: ${Layout.height(0.5)};
  width: ${Layout.width(50)};
  background-color: transparent;
`;
