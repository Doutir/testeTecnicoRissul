import styled, {css} from 'styled-components/native';
import {fontSize, Layout} from '~/utils/Layout';
import {Typography} from '../Typography';

console.log('layout negocio,', Layout.height(5));

export const Container = styled.TouchableOpacity`
  background-color: blue;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 4%;
  border-radius: 4px;
  ${({theme, marginTop, marginBottom, buttonColorBackground}) => css`
    margin-top: ${Layout.height(marginTop)};
    margin-bottom: ${Layout.height(marginBottom)};
    background-color: ${theme.colors[buttonColorBackground]};
  `}

  ${({theme, buttonStyle}) =>
    buttonStyle === 'stroked' &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
    `}
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  font-size: ${fontSize(12)};
  ${({theme, buttonStyle}) =>
    css`
      color: ${theme.colors.highPure};
    `}

  ${({theme, buttonStyle}) =>
    buttonStyle === 'stroked' &&
    css`
      color: red;
    `}
`;
