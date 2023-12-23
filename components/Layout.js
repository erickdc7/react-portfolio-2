// Fonts
import { Sora } from "@next/font/google"

// Font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = () => {
  return <div>Layout</div>;
};

export default Layout;
