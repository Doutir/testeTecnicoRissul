import React from 'react';
import {View} from 'react-native';

import * as S from './styles';

const Card = ({promotionalPrice}) => {
  return (
    <S.Container>
      <S.WrapperCardHeader>
        <S.CardTitle>Cliente rissul PAGA</S.CardTitle>
      </S.WrapperCardHeader>

      <S.WrapperBody>
        <S.WrapperPrice>
          <S.Price>{promotionalPrice}</S.Price>
          <S.SubPrice>Cada</S.SubPrice>
        </S.WrapperPrice>
      </S.WrapperBody>
    </S.Container>
  );
};

export {Card};
