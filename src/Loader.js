import * as React from 'react';
import styled from 'styled-components';

const Loader = styled.h2`
  flex: 0 0 auto;
  text-align: center;
  margin: auto;
  color: green;
`;

export default function AppLoader () {
  return <Loader>Načítám model</Loader>
};
