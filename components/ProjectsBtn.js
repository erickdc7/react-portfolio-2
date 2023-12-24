// Next image
import Image from "next/image";

// Next link
import Link from "next/link";

// Icons
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={'/work'}></Link>
    </div>
  );
};

export default ProjectsBtn;
