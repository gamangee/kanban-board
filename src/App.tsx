import React from 'react';
import { ThemeProvider } from 'styled-components';
import KanbanBoard from './KanbanBoard';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <KanbanBoard />
      </ThemeProvider>
    </>
  );
}

export default App;
