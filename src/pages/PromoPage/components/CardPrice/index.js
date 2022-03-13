import React from 'react';
import * as S from './styles';

const CardPrice = () => {
  return (
    <S.Container>
      <S.WrapperCardHeader>
        <S.CardTitle>Cliente rissul PAGA</S.CardTitle>
      </S.WrapperCardHeader>

      <S.WrapperBody>
        <S.WrapperPrice>
          <S.Price>R$ 2,00</S.Price>
          <S.SubPrice>
            De crédito por unidade{'\n'} na compra de 2 unidades
          </S.SubPrice>
        </S.WrapperPrice>
      </S.WrapperBody>
      <S.FooterCard>Limite por CPF: R$ 50,00</S.FooterCard>
    </S.Container>
  );
};

export {CardPrice};
