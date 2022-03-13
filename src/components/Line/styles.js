import styled from 'styled-components/native';
import {Layout} from '~/utils/Layout';

console.log('size', Layout.height(2));
export const Container = styled.View`
  margin: ${Layout.height(2)} 0;
  border: 1px solid #dddddd;
  width: ${Layout.width(100)};
`;
