
import React from 'react';
import Calculator from './Calculator';
import NumberProvider from './NumberProvider';

const App = () => (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
)

export default App;
