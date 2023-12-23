import '../styles/globals.css';

// Components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <div>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
