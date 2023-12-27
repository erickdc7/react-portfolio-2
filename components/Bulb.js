// Next Image
import Image from "next/image";

const Bulb = () => {
  return (
    <div>
      <Image
        src={'/bulb.png'}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
