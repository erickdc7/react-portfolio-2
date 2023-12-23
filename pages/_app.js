import '../styles/globals.css';

// Components
import Layout from '../components/Layout';

// Router
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
