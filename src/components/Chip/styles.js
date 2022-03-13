import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {fontSize, Layout} from '~/utils/Layout';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;

  ${({theme}) => css`
    background-color: ${theme.colors.secondary};
  `}
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  font-size: ${fontSize(10)};
  margin: 5px;
  color: #fff;
`;
