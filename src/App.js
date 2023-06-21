import React from 'react';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentB />
        <ComponentC />
      </div>
    </Provider>
  );
}

export default App;
