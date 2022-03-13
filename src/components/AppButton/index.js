import React from 'react';
import * as S from './styles';

const AppButton = ({
  title = 'VER MAIS OFERTA EXCLUSIVAS',
  buttonStyle,
  marginTop = 0,
  marginBottom = 0,
  buttonColorBackground = 'primary',
}) => {
  return (
    <S.Container
      buttonStyle={buttonStyle}
      buttonColorBackground={buttonColorBackground}
      marginTop={marginTop}
      marginBottom={marginBottom}>
      <S.Title buttonStyle={buttonStyle}>{title}</S.Title>
    </S.Container>
  );
};

export {AppButton};
