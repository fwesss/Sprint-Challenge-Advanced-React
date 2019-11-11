import React, { StrictMode } from 'react';
import ThemeProvider from 'mineral-ui/themes/ThemeProvider';
import Box from 'mineral-ui/Box';
import styled from '@emotion/styled';

import Players from './components/Players';
import ThemePicker from './components/ThemePicker';
import useTheme from './hooks/theme';

const App = () => {
  const [theme, setTheme] = useTheme('slate');

  const Container = styled(Box)({
    background: theme.color_theme_20,
  });

  return (
    <ThemeProvider theme={theme}>
      <StrictMode>
        <Container>
          <ThemePicker theme={theme} setTheme={setTheme} />
          <Players theme={theme} />
        </Container>
      </StrictMode>
    </ThemeProvider>
  );
};

export default App;
