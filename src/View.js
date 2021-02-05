import * as React from 'react';
import styled from 'styled-components';

const View = styled.div`
  background: #ffffff;
  flex: 1 1 auto;
  margin: 20px;
  border-radius: 15px;
  flex-flow: column;
  justify-content: center;
  display: flex;
  flex-flow: column;
  justify-content; center;
  text-align: center;
`;

const Camera = styled.img`
  flex: 0 0 auto;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  cursor: pointer;
`;

const Button = styled.button`
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 0 20px;
  padding: 15px;
  color: #ffffff;
  background: green;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  width: 250px;
  cursor: pointer;
`;

const ButtonWraper = styled.div`
  flex: 0 0 auto;
  width: calc(100vw - 40px);
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  margin: 20px;
  flex: 0 0 auto;
  height: calc(100vh - 225px);
`;

export default function AppView() {
  const [state, setState] = React.useState({
    foto: undefined
  });

  return <View>
    {
      state.foto
      ? <React.Fragment>
          <Image
            alt='foto'
            src={state.foto}
          />
          <ButtonWraper>
            <Button
              onClick={() => console.log('hledám koblihu!')}
            >
              Najít koblihu
            </Button>
          </ButtonWraper>
        </ React.Fragment>
      : <React.Fragment>
          <Camera
            src='camera.png'
            alt='camera'
            onClick={() => {
              const el = document.getElementById('camera');
              if (el) {
                el.click();
              }
            }}
          />
          <input
            onChange={(e) => {
              if (e.target.files[0]) {
                setState({
                  ...state,
                  foto: URL.createObjectURL(e.target.files[0])
                })
              }
            }}
            hidden
            type="file"
            id="camera"
            name="picture"
            accept="image/png, image/jpeg"
          />
        </React.Fragment>
    }
  </View>
};
