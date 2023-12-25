// Next Image
import Image from "next/image";

const Circles = () => {
  return (
    <div>
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  )
};

export default Circles;
