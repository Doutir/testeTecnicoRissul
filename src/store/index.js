import React from 'react';

import {ProductProvider} from './product';

const AppProvider = ({children}) => (
  <ProductProvider>{children}</ProductProvider>
);

export {AppProvider};
