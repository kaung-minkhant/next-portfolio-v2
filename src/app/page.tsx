import Image from "next/image";

export default function Home() {
  return (
    <div
      className="overlay flex flex-col lg:flex-row flex-grow px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36"
      style={{
        display: "none",
      }}
    >
      <div className="relative flex-grow lg:w-1/2 basis-0">
        <Image
          src={"/hero.png"}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt={"hero image"}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 items-center justify-center flex-grow lg:w-1/2 basis-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod
          deleniti, ad blanditiis repudiandae, inventore doloremque qui, error
          veniam sapiente maxime totam eius molestiae sed at impedit? Pariatur,
          eum quae?
        </p>
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
