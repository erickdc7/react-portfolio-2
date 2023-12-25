// Next Image
import Image from "next/image";

// Next Link
import Link from "next/link";

// Components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div>
          {/* Logo */}
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              width={220}
              height={48} alt=""
              priority={true}
            />
          </Link>
          {/* Socials */}
        </div>
      </div>
    </header>
  );
};

export default Header;
