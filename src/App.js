import * as React from 'react';
import styled from 'styled-components';
import AppHeader from './Header';
import View from './View';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  Flex-flow: column;
  background: green;
`;

function App() {

  const [state, setState] = React.useState({
    net: undefined,
    catInFoto: undefined,
    loading: true,
    test: ''
  });

  React.useEffect(() => {
    mobilenet.load()
      .then((net) => {
        console.log('Model loaded!');
        setState((actState) => ({...actState, net, loading: false}));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Wrapper>
      <AppHeader />
      <View
        test={state.test}
        loading={state.loading}
        catInFoto={state.catInFoto}
        reset={() => setState({...state, catInFoto: undefined, test: undefined})}
        onCheck={() => {
          const el = document.getElementById('foto');
          if (el && state.net) {
            state.net.classify(el)
              .then(result => {
                console.log(result);
                const fotoWithCat = result.find(item => (item.className.includes('cat') || item.className.includes('pussy')));
                if (fotoWithCat) {
                  setState({...state, catInFoto: true, test: result});
                } else {
                  setState({...state, catInFoto: false, test: result});
                }
              })
              .catch(err => {
                console.error(err);
              });
          } else {
            console.log('Cant find the foto element...');
          }
        }}
      />
    </Wrapper>
  );
};

export default App;
