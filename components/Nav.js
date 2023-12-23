// Icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// Nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// Next Link
import Link from 'next/link';

// Next Router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <nav>
      {/* Inner */}
      <div>
        {
          navData.map((link, index) => {
            return (
              <Link href={link.path}>
                {link.icon}
              </Link>
            )
          })
        }
      </div>
    </nav>
  );
};

export default Nav;
