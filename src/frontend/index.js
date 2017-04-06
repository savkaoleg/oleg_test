import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import configureStore from './redux/configureStore';
import "babel-polyfill";
import "babel-core/register";


const store = configureStore();
const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
      <AppContainer>
    <Provider store={store} >
        <App />
    </Provider>
      </AppContainer>,
    rootEl
  );
};

if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./component/App', render);
  }
}

render();
