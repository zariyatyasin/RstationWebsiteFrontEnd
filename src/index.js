import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
import { persistor, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

 
root.render( 
<QueryClientProvider client={queryClient}>
  <Provider store={store}>
   <PersistGate loading={"loading"} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 