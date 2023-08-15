import Image from "next/image";




const Bulb = () => {
  return (
    <div className="absolute right-64 -top-12 rotate-180 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
      src={'/bulb.png'}
      alt="bulb png for animation"
      width={260}
      height={200}
      className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
