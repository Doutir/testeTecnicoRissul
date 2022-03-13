import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {fontSize, Layout} from '~/utils/Layout';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: ${Layout.width(80)};
  justify-content: space-between;
  align-items: center;

  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  ${({theme}) => css`
    background-color: ${theme.colors.highPure};
  `}

  ${({withPromotionalPrice}) =>
    !withPromotionalPrice &&
    css`
      height: ${Layout.height(20)};
    `}
`;

export const TagImg = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
`;

export const WrapperLeft = styled.View`
  width: 30%;
`;

export const ImageProduct = styled.Image`
  width: ${Layout.width(23)};
  height: ${Layout.width(23)};
`;

export const WrapperRight = styled.View`
  width: 70%;
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  width: 70%;
  text-align: left;
  ${({theme}) => css`
    color: ${theme.colors.gray200};
  `}
`;

export const Price = styled(Typography).attrs({
  isBold: true,
})`
  text-align: left;
  font-size: ${fontSize(14)};
  margin-top: 5%;
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;

export const SubPrice = styled(Typography)`
  text-align: left;
  font-size: ${fontSize(10)};
  font-weight: 200;

  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;
