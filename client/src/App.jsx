import React, { StrictMode } from 'react';
import createTheme from 'mineral-ui/themes/createTheme';
import ThemeProvider from 'mineral-ui/themes/ThemeProvider';

import Players from './components/Players';

const slate = createTheme({
  colors: { theme: 'slate' },
});

const App = () => (
  <ThemeProvider theme={slate}>
    <StrictMode>
      <Players theme={slate} />
    </StrictMode>
  </ThemeProvider>
);

export default App;
