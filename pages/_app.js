import React from 'react';
import { Toaster } from 'react-hot-toast';

import { StateContext } from '../Context/StateContext';

import { Layout } from '../components';
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  return (
  <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
   
)
}


