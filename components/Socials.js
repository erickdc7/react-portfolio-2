// Links
import Link from "next/link";

// Icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from "react-icons/ri"

const Socials = () => {
  return (
    <div>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
