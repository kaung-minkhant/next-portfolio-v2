import ScrollMouse from "./ScrollMouse";
import Signature from "./Signature";

export default function Biography() {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <h1 className="font-bold text-2xl">Biography</h1>
      <p className="text-lg">
        My journey into the world of web development started during my studies
        in Electronic Engineering at Yangon Technological University. However,
        as life's twists and turns often do, I found myself drawn to the dynamic
        realm of web technologies amidst changing circumstances. 
      </p>
      <p className="text-lg">

        Although I hold
        a degree in Electrical and Electronic Engineering from Liverpool John
        Moores University, my true passion lies in crafting immersive digital
        experiences. With a penchant for tinkering with tools and a relentless
        drive for innovation, I've honed my skills in React and NextJS,
        platforms where I feel most at home. Notably, I had the opportunity to
        showcase my talents at the Hong Kong APICTA 2023 competition, an
        experience that further fueled my passion for web development. Today,
        I'm dedicated to pushing the boundaries of what's possible in web
        development. From elegant user interfaces to robust backend systems, I
        thrive on bringing ideas to life in the digital space. Every project is
        an opportunity to create something meaningful and impactful, and I'm
        excited to see where this journey takes me next.
      </p>
      <span className="font-semibold text-lg">
        Let's build something amazing together!
      </span>
      <div className="self-end">
        <Signature />
      </div>
      <div className="">
        <ScrollMouse />
      </div>
    </div>
  );
}
