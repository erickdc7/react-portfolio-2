// Next image
import Image from "next/image";

// Next link
import Link from "next/link";

// Icons
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'}>
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
