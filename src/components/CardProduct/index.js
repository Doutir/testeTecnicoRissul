import React from 'react';
import Achocolatado from '~/assets/images/achocolatado.png';
import TagVivaRed from '~/assets/images/tagVivaRed.png';
import {Card} from '../Card';
import {Chip} from '../Chip';
import * as S from './styles';

const CardProduct = ({
  withPromotionalPrice,
  promotionalPrice,
  price,
  name,
  image,
  onPress,
}) => {
  return (
    <S.Container withPromotionalPrice={withPromotionalPrice} onPress={onPress}>
      {withPromotionalPrice ? <S.TagImg source={TagVivaRed} /> : <Chip />}

      <S.WrapperLeft>
        <S.ImageProduct source={image} />
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Title>{name}</S.Title>
        <S.Price>{price}</S.Price>
        <S.SubPrice>Cada</S.SubPrice>
        {withPromotionalPrice && <Card promotionalPrice={promotionalPrice} />}
      </S.WrapperRight>
    </S.Container>
  );
};

export {CardProduct};
