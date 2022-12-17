import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { FormProvider } from 'react-hook-form';
// import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

 
  
  
  
  
  
  // This give the hydration error 
  return <Component {...pageProps} />

}
