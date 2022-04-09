import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import { ProvideNotification } from '../store/notification-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProvideNotification>
      <Layout>
        <Head>
          <title> Next JS App</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ProvideNotification>
  )
};

export default MyApp;
