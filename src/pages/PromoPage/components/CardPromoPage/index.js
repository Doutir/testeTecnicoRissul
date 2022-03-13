import React from 'react';
import {CardPrice} from '../CardPrice';
import TagVivaRed from '~/assets/images/tagVivaRed.png';
import Achocolatado from '~/assets/images/achocolatado.png';

import * as S from './styles';

const CardPromoPage = () => {
  return (
    <S.Container>
      <S.TagImg source={TagVivaRed} />
      <S.WrapperImageHeader>
        <S.ImageHeader source={Achocolatado} />
      </S.WrapperImageHeader>
      <S.Title>Achocolatado em pó Nescau Sashê 800g</S.Title>
      <S.Price>RS 8,90</S.Price>
      <S.SubPrice>Cada</S.SubPrice>
      <CardPrice />
    </S.Container>
  );
};

export {CardPromoPage};
