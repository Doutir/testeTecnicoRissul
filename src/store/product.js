import React, {createContext, useState, useContext} from 'react';
import Achocolatado from '~/assets/images/achocolatado.png';
import TridentCanela from '~/assets/images/tridentCanela.png';
import TridentMelancia from '~/assets/images/tridentMelancia.png';
import TridentMenta from '~/assets/images/tridentMenta.png';
import TridentMorango from '~/assets/images/tridentMorango.png';

const DataContext = createContext({});

const ProductProvider = ({children}) => {
  const itens = [
    {
      id: 1,
      name: 'Achocolatado em pó Nescau Sachê 800g',
      price: 8.9,
      image: Achocolatado,
      promotionalPrice: 2.0,
    },
    {
      id: 2,
      name: 'Goma de Mascar Trident Canela 8g',
      price: 2.39,
      image: TridentCanela,
      promotionalPrice: 0.5,
    },
    {
      id: 3,
      name: 'Goma de Mascar Trident Melancia 8g',
      price: 2.39,
      image: TridentMelancia,
      promotionalPrice: 0.5,
    },
    {
      id: 4,
      name: 'Goma de Mascar Trident Menta 8g',
      price: 2.39,
      image: TridentMenta,
      promotionalPrice: 0.5,
    },
    {
      id: 5,
      name: 'Goma de Mascar Trident Morango 8g',
      price: 2.39,
      image: TridentMorango,
      promotionalPrice: 0.5,
    },
  ];

  return (
    <DataContext.Provider
      value={{
        itens,
      }}>
      {children}
    </DataContext.Provider>
  );
};
function useProduct() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useProduct must be used within an ProductProvider');
  }
  return context;
}
export {ProductProvider, useProduct};
