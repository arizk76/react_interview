import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../src/util/themeManager';



import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
