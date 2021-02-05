import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column;
  padding: 0 20px;
`;

const Title = styled.h3`
  flex: 0 0 auto;
  margin-bottom: 0;
  color: #ffffff;
`;

const SubTitle = styled.div`
  flex: 0 0 auto;
  color: #ffffff;
`;

export default function AppHeader() {
  return <Header>
    <Title>
      Is there a cat?
    </Title>
    <SubTitle>
      Image classifier
    </SubTitle>
  </Header>
};
