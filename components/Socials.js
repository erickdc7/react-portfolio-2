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
    </div>
  );
};

export default Socials;
