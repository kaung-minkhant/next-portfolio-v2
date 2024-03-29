import Image from "next/image";

export default function Home() {
  return (
    <div
      className="overlay flex flex-col lg:flex-row h-full px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36"
      style={{
        display: "none",
      }}
    >
      {/* image container  */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image
          src={"/hero.png"}
          fill
          alt={"hero image"}
          className="object-contain"
        />
      </div>
      {/* text container */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-3 md:gap-6 lg:gap-8 items-center justify-center">
        {/* title */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        {/* description */}
        <p className="md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
          deleniti, ad blanditiis repudiandae, inventore doloremque qui, error
          veniam sapiente maxime totam eius molestiae sed at impedit? Pariatur,
          eum quae?
        </p>
        {/* buttons */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
