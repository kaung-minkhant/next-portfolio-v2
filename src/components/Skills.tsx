import ScrollMouse from "./ScrollMouse";

function Skill({ skill }: { skill: string }) {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {skill}
    </div>
  );
}
export default function Skills() {
  const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwindcss",
    "React",
    "NextJS",
  ];
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* title */}
      <h1 className="text-2xl font-bold">Skills</h1>
      {/* skill list  */}
      <div className="flex gap-4 flex-wrap">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
      {/* scroll svg */}
      <div className="">
        <ScrollMouse />
      </div>
    </div>
  );
}
