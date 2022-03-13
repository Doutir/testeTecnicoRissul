import React from 'react';
import Achocolatado from '~/assets/images/achocolatado.png';
import TagVivaRed from '~/assets/images/tagVivaRed.png';
import {Card} from '../Card';
import {Chip} from '../Chip';
import * as S from './styles';

const CardProduct = ({withPromotionalPrice}) => {
  return (
    <S.Container withPromotionalPrice={withPromotionalPrice}>
      {withPromotionalPrice ? <S.TagImg source={TagVivaRed} /> : <Chip />}

      <S.WrapperLeft>
        <S.ImageProduct source={Achocolatado} />
      </S.WrapperLeft>
      <S.WrapperRight>
        <S.Title>Achocolatado em pó Nescau Sachê 800g</S.Title>
        <S.Price>R$ 8,90</S.Price>
        <S.SubPrice>Cada</S.SubPrice>
        {withPromotionalPrice && <Card />}
      </S.WrapperRight>
    </S.Container>
  );
};

export {CardProduct};
