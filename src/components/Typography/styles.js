import styled, {css} from 'styled-components/native';
import {fontSize} from '~/utils/Layout';

export const Text = styled.Text`
  font-style: normal;
  font-size: ${fontSize(14)};

  text-align: center;
  ${({theme, isBold}) => css`
    font-weight: ${isBold ? 'bold' : '400'};
    color: ${theme.colors.gray};
  `}
`;
