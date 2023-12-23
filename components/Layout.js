// Fonts
import { Sora } from "@next/font/google"

// Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

// Components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return <div>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>;
};

export default Layout;
