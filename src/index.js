import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainProvider from './context';

import App from './App';

import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <MainProvider>
            <App />
        </MainProvider>
    </StrictMode>
);
