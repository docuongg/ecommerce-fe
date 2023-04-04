import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './app/store'
import { GlobalStyle } from './components/GlobalStyles'
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate Loading={null} persistor={persistor}>
        <GlobalStyle />
          <GoogleOAuthProvider clientId="454236063133-c1qb8rbrgnnr1bpm4khqhlq3oci5v8m7.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>;
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
