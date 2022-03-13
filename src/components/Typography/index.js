import React from 'react';
import * as S from './styles';

const Typography = ({children, isBold = false, ...rest}) => {
  return (
    <S.Text isBold={isBold} {...rest}>
      {children}
    </S.Text>
  );
};

export {Typography};
