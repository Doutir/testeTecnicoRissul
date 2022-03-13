import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {Layout, fontSize} from '~/utils/Layout';

export const Container = styled.View`
  background-color: #fff;
  width: ${Layout.width(90)};
  width: 90%;
  align-items: center;
  margin-top: ${Layout.height(2)};
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const TagImg = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
`;

export const WrapperImageHeader = styled.View`
  width: ${fontSize(148)};
  height: ${fontSize(148)};
  border-radius: ${Layout.height(200)};
  background: #ffffff;
  border: 5px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  margin-top: -6%;
`;

export const ImageHeader = styled.Image`
  width: 80%;
  height: 80%;
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  width: 60%;
  text-align: center;
  margin-top: ${Layout.height(1.5)};

  ${({theme}) => css`
    color: ${theme.colors.gray200};
  `}
`;

export const Price = styled(Typography).attrs({
  isBold: true,
})`
  text-align: left;
  margin-top: ${Layout.height(1)};
  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;

export const SubPrice = styled(Typography)`
  text-align: left;
  font-size: ${fontSize(10)};
  font-weight: 200;
  margin-top: ${Layout.height(0.5)};
  margin-bottom: ${Layout.height(12)};

  ${({theme}) => css`
    color: ${theme.colors.primary};
  `}
`;
