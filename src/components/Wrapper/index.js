import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';
import Logo from '../../assets/images/Logo.png';

const Header = ({bodyScrollView = false}) => {
  return (
    <S.HeaderWrapper>
      <S.Icon color="#fff" name="menu" />
      <S.Logo source={Logo} />
      <S.WrapperNotification>
        <S.WrapperNotificationQuantity>
          <S.NotificationQuantity>2</S.NotificationQuantity>
        </S.WrapperNotificationQuantity>
        <S.Icon color="#fff" name="bell-outline" />
      </S.WrapperNotification>
    </S.HeaderWrapper>
  );
};

const Body = ({children}) => {
  return <S.WrapperBodyView>{children}</S.WrapperBodyView>;
};

const Footer = () => (
  <S.WrapperFooter>
    <S.WrapperIcon>
      <S.Icon name="cart-outline" />
      <S.IconText>minhas listas</S.IconText>
    </S.WrapperIcon>

    <S.SearchIconWrapper>
      <S.Icon color="#fff" size={30} name="magnify" />
    </S.SearchIconWrapper>

    <S.WrapperIcon>
      <S.Icon name="barcode-scan" />
      <S.IconText>scanner</S.IconText>
    </S.WrapperIcon>
  </S.WrapperFooter>
);

const Wrapper = ({children}) => {
  return (
    <S.Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </S.Container>
  );
};

export {Wrapper};
