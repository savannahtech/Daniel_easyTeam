"use client";
import 'dotenv/config';
import { AppProps } from 'next/app';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import {ReduxProvider} from "../redux/provider"; // Import Polaris styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AppProvider i18n={enTranslations}>
        <Component {...pageProps} />
      </AppProvider>
    </ReduxProvider>
  );
}

export default MyApp;
