import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="overlay flex flex-col lg:flex-row flex-grow px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36 relative"
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
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-8 items-start justify-center flex-grow lg:w-1/2 basis-0">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hii. My name is Kaung Min Khant
        </h1>
        <p className="md:text-2xl">
          I am from Myanmar, and I am a full stack developer. This site is my
          on-going portfolio and it is built with NextJS. I am improving it bit by bit and some usefull tools, relating to development will be added later.
        </p>
        <div className="flex gap-4 w-full">
          <Link href={"/portfolio"}>
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
