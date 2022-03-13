import React, {useState} from 'react';
import * as S from './styles';
import {Wrapper, AppButton, Line, CardProduct} from '~/components';
import {Banner} from './components/Banner';
import {Layout} from '~/utils/Layout';

const itens = [1, 2, 3, 4, 5, 6];

const Home = () => {
  // const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item, index}) => {
    return <CardProduct withPromotionalPrice={true} />;
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
            // onSnapToItem={index => setActiveSlide(index)}
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
            // onSnapToItem={index => setActiveSlide(index)}
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
            renderItem={() => <CardProduct withPromotionalPrice={false} />}
            sliderWidth={Layout.width(100, false)}
            itemWidth={Layout.width(80, false)}
            // onSnapToItem={index => setActiveSlide(index)}
          />
        </S.WrapperCarousel>
        <AppButton marginTop={5} marginBottom={15} />
      </S.Container>
    </Wrapper>
  );
};

export {Home};
