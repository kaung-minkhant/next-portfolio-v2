import Biography from "@/components/Biography";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function About() {
  return (
    <div className="h-full">
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:p-9 md:p-14 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 h-full">
          {/* biography */}
          <Biography />
          {/* skills */}
          <Skills />          
          {/* experience */}
          <Experience />
        </div>
        {/* svg container */}
        <div className="hidden"></div>
      </div>
    </div>
  );
}
