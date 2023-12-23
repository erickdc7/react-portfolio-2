import '../styles/globals.css';

// Components
import Layout from '../components/Layout';

// Router
import { useRouter } from 'next/router';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
