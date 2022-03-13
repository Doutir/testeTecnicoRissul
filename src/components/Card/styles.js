import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {fontSize} from '~/utils/Layout';

export const Container = styled.View`
  ${({theme}) => css`
    background: ${theme.colors.primary};
  `}
  border-radius: 8px;

  width: 80%;
  height: 90px;
  margin-top: 5%;
  margin-bottom: 10%;
`;

export const WrapperCardHeader = styled.View`
  background-color: blue;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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
`;

export const WrapperPrice = styled.View`
  align-items: flex-end;
  /* background-color: blue; */
  justify-content: flex-start;
`;

export const Price = styled(Typography).attrs({
  isBold: true,
})`
  ${({theme}) => css`
    color: ${theme.colors.highPure};
    font-size: ${fontSize(18)};
  `};
`;

export const SubPrice = styled(Typography)`
  font-size: ${fontSize(6)};
  ${({theme, biggerCharacters}) => css`
    color: ${theme.colors.highPure};
  `};
`;
