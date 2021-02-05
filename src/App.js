import * as React from 'react';
import styled from 'styled-components';
import AppHeader from './Header';
import View from './View';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  Flex-flow: column;
  background: green;
`;

function App() {
  return (
    <Wrapper>
      <AppHeader />
      <View />
    </Wrapper>
  );
};

export default App;
