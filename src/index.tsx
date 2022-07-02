import React from 'react';
import ReactDOM from 'react-dom/client';
import { DestinationContext } from './components/Destinations/Context';
import './index.css';
import { RootPage } from './pages/RootPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <DestinationContext>
      <RootPage />
    </DestinationContext>
  </React.StrictMode>
);
