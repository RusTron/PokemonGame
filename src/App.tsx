import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Header from './components/Header';
import EmptyPage from './pages/EmptyPage';
// import Home from './pages/Home';

const App = () => {
  const match = useRoutes(routes);

  return (
    <>
      <Header />
      {match || <EmptyPage />}
    </>
  );
};

export default App;
