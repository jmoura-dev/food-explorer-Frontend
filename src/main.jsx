import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';
import { CartProvider } from './hooks/cart';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AuthProvider>
        <CartProvider>
          <Routes/>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
)
