import React from 'react';
import {CardPrice} from '../CardPrice';
import TagVivaRed from '~/assets/images/tagVivaRed.png';
import {formatPrice} from '~/utils/formatPrice';
import * as S from './styles';

const CardPromoPage = ({image, title, price = 0, promotionalPrice = 0}) => {
  return (
    <S.Container>
      <S.TagImg source={TagVivaRed} />
      <S.WrapperImageHeader>
        <S.ImageHeader source={image} />
      </S.WrapperImageHeader>
      <S.Title>{title}</S.Title>
      <S.Price>{formatPrice(price)}</S.Price>
      <S.SubPrice>Cada</S.SubPrice>
      <CardPrice promotionalPrice={formatPrice(promotionalPrice)} />
    </S.Container>
  );
};

export {CardPromoPage};
