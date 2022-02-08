import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRouter from './routes';
import CreateStyle from './styles/global';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppRouter />
        <CreateStyle />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
