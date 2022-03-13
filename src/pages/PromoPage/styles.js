import styled, {css} from 'styled-components/native';
import {Typography} from '~/components';
import {fontSize, Layout} from '~/utils/Layout';
import CarouselComponent from 'react-native-snap-carousel';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
})``;

export const Title = styled.Text``;

export const CardWrapper = styled.View``;

export const WrapperBanner = styled.View`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  margin-top: ${Layout.height(1)};
  width: ${Layout.width(90)};
  padding: ${Layout.width(4)};
`;

export const TitleBanner = styled(Typography).attrs({
  isBold: true,
})`
  font-size: ${fontSize(10)};
  font-weight: 700;
  text-transform: uppercase;
`;

export const ContentBanner = styled(Typography)`
  margin-top: ${Layout.height(1)};
  font-size: ${fontSize(11)};
  font-weight: 500;
  text-transform: uppercase;
  text-align: ${({textAlign}) => textAlign ?? 'center'};

  ${({theme, link}) =>
    link &&
    css`
      text-decoration: underline solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    `};
`;

export const FooterTitle = styled(Typography).attrs({
  isBold: true,
})`
  font-size: ${fontSize(12)};
  text-transform: uppercase;
  ${({theme}) => `
    color: ${theme.colors.primary};
  `}
`;

export const FooterSubtitle = styled(Typography)`
  margin-top: ${Layout.height(0.5)};
  font-size: ${fontSize(12)};
  ${({theme}) => `
    color: ${theme.colors.gray};
  `}
`;
export const CarouselFooter = styled(CarouselComponent).attrs({
  containerCustomStyle: {
    paddingTop: 5,
    paddingBottom: 5,
  },
})``;
