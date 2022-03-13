import React from 'react';
import {Linking} from 'react-native';
import {Wrapper, AppButton, Line, CardProduct} from '~/components';
import {Layout} from '~/utils/Layout';
import {useProduct} from '~/store/product';
import {formatPrice} from '~/utils/formatPrice';
import {CardPromoPage} from './components/CardPromoPage';
import * as S from './styles';

const PromoPage = ({route}) => {
  const {itemId} = route.params;
  const {itens} = useProduct();
  const [product] = itens.filter(item => item.id === itemId);
  console.log({product});
  const handleClickLink = () =>
    Linking.openURL(
      'https://www.google.com/maps/place/Supper+Rissul/@-30.017852,-51.2012189,15z/data=!4m2!3m1!1s0x0:0x89184bab3efd93c5?sa=X&ved=2ahUKEwiOyri77cP2AhWprpUCHQPfCYwQ_BJ6BAg0EAU',
    );
  return (
    <Wrapper>
      <S.Container>
        <CardPromoPage
          image={product.image}
          title={product.name}
          price={product.price}
          promotionalPrice={product.promotionalPrice}
        />
        <AppButton
          buttonColorBackground="secondary"
          title="ADICIONAR À LISTA DE COMPRAS"
          marginTop={8}
        />

        <S.WrapperBanner>
          <S.TitleBanner>
            produto indisponível na sua loja favorita
          </S.TitleBanner>
          <S.ContentBanner>
            mas, você pode encontra-lo na loja{' '}
            <S.ContentBanner onPress={handleClickLink} link>
              Rissul Cristovão Colombo
            </S.ContentBanner>
          </S.ContentBanner>
        </S.WrapperBanner>

        <S.WrapperBanner>
          <S.TitleBanner>O Ministério da Saúde adverte:</S.TitleBanner>
          <S.ContentBanner textAlign="left">
            O aleitamento materno evita infecções e alergias e é recomendado até
            os dois anos de idade ou mais.
          </S.ContentBanner>
        </S.WrapperBanner>
        <Line />
        <S.FooterTitle>Confira as ofertas de sua loja</S.FooterTitle>
        <S.FooterSubtitle>Rissul Vila Ipiranga</S.FooterSubtitle>
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
        <AppButton
          title="VER MAIS OFERTAS EXCLUSIVAS"
          buttonStyle="stroked"
          marginTop={2}
          marginBottom={4}
        />
      </S.Container>
    </Wrapper>
  );
};

export {PromoPage};
