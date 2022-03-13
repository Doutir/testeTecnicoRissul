import styled, {css} from 'styled-components/native';
import {Layout, fontSize} from '../../../../utils/Layout';
import {Typography} from '~/components';

export const Container = styled.View`
  width: ${Layout.width(80)};
  height: ${Layout.height(20)};
  background-color: red;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${({theme}) => css`
    background-color: ${theme.colors.gray300};
  `}
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  ${({theme}) => css`
    font-size: ${fontSize(20)};
    color: ${theme.colors.gray400};
  `}
`;
