import React from 'react';
import * as S from './styles';
import {Wrapper, AppButton, Line, CardProduct} from '~/components';
import {Banner} from './components/Banner';
import {Layout} from '~/utils/Layout';
import {formatPrice} from '~/utils/formatPrice';
import {useProduct} from '~/store/product';

const Home = ({navigation}) => {
  const {itens} = useProduct();
  const renderItem = ({item, index}) => {
    return (
      <CardProduct
        key={item.id}
        price={formatPrice(item.price)}
        name={item.name}
        image={item.image}
        promotionalPrice={formatPrice(item.promotionalPrice)}
        onPress={() => navigation.navigate('PromoPage', {itemId: item.id})}
        withPromotionalPrice={!!item.promotionalPrice}
      />
    );
  };

  return (
    <Wrapper>
      <S.Container>
        <S.Title>Olá, RAFAEL!</S.Title>
        <S.Subtitle>Veja as ofertas que preparamos para você:</S.Subtitle>

        <S.WrapperCarousel>
          <S.CarouselTop
            data={itens}
            renderItem={renderItem}
            sliderWidth={Layout.width(100, false)}
            itemWidth={Layout.width(80, false)}
          />
        </S.WrapperCarousel>
        <AppButton marginTop={1} />
        <Line />

        <S.WrapperCarousel height={18}>
          <S.CarouselMiddle
            data={itens}
            renderItem={() => <Banner />}
            sliderWidth={Layout.width(100, false)}
            itemWidth={Layout.width(80, false)}
          />
        </S.WrapperCarousel>
        <Line />
        <S.FooterTitle>CONFIRA AS OFERTAS DE SUA LOJA!</S.FooterTitle>
        <S.FooterSubtitle>
          Rissul Vila Ipiranga
          <S.Icon name="swap-vertical" />
        </S.FooterSubtitle>

        <S.WrapperCarousel height={18}>
          <S.CarouselFooter
            data={itens}
            renderItem={({item}) => (
              <CardProduct
                key={item.id}
                price={formatPrice(item.price)}
                name={item.name}
                image={item.image}
                promotionalPrice={formatPrice(item.promotionalPrice)}
                withPromotionalPrice={false}
              />
            )}
            sliderWidth={Layout.width(100, false)}
            itemWidth={Layout.width(80, false)}
          />
        </S.WrapperCarousel>
        <AppButton marginTop={5} marginBottom={12} />
      </S.Container>
    </Wrapper>
  );
};

export {Home};
