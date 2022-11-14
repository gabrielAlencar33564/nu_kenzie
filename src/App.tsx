import React from 'react';
import { NuKenzieProvider } from './context';
import { RoutesPage } from './routes';

function App() {
  return (
    <NuKenzieProvider>
      <RoutesPage />
    </NuKenzieProvider>
  );
}

export default App;