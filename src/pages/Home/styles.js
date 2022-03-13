import styled, {css} from 'styled-components/native';
import IconPackage from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize, Layout} from '~/utils/Layout';
import {Typography} from '~/components';
import CarouselComponent, {
  Pagination as PaginationComponent,
} from 'react-native-snap-carousel';

export const Container = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  /* align-items: center; */
  flex: 1;
`;

export const Title = styled(Typography).attrs({
  isBold: true,
})`
  margin: ${Layout.height(2)} 0;
  font-size: ${fontSize(15)};
  ${({theme}) => `
    color: ${theme.colors.primary};
  `}
`;

export const Subtitle = styled(Typography)`
  font-size: ${fontSize(15)};
  width: 80%;
  margin: 0 auto;
`;

export const WrapperCarousel = styled.View`
  margin-top: ${Layout.height(1)};
  padding-top: ${Layout.height(1)};
  ${({height = 25}) =>
    css`
      height: ${height}%;
      /* background-color: blue; */
    `}
`;

export const CarouselTop = styled(CarouselComponent).attrs({
  containerCustomStyle: {
    paddingTop: 5,
    // backgroundColor: 'blue',
    zIndex: 2,
  },
})``;

export const CarouselMiddle = styled(CarouselComponent).attrs({
  containerCustomStyle: {},
})``;

export const CarouselFooter = styled(CarouselComponent).attrs({
  containerCustomStyle: {},
})``;

// export const Pagination = styled(PaginationComponent).attrs(({theme}) => ({
//   dotStyle: {
//     backgroundColor: theme.colors.primary,
//   },
//   containerStyle: {
//     backgroundColor: '#ff0',
//     marginTop: '-8%',
//   },
//   dotContainerStyle: {
//     margin: 0,
//     padding: 0,
//   },
// }))`
/* height: 40px; */
// `;

export const FooterTitle = styled(Typography).attrs({
  isBold: true,
})`
  font-size: ${fontSize(12)};
  ${({theme}) => `
    color: ${theme.colors.primary};
  `}
`;

export const FooterSubtitle = styled(Typography)`
  margin-top: ${Layout.height(0.5)};
  font-size: ${fontSize(12)};
  text-decoration-line: underline;
  ${({theme}) => `
    color: ${theme.colors.primary};
  `}
`;

export const Icon = styled(IconPackage)`
  ${({theme, size, color}) => css`
    font-size: ${fontSize(size ?? 14)};
    color: ${color ?? theme.colors.primary};
  `};
`;
