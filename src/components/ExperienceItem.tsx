interface ItemProps {
  position?: "left" | "right";
}
const Item = ({ position }: Props) => {
  return (
    <>
      <div
        className={`bg-white p-3 font-semibold rounded-b-md ${
          position === "left" ? "rounded-s-md" : "rounded-e-md"
        } `}
      >
        Co-founder
      </div>
      <div className="p-3 text-sm italic">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
        aspernatur?
      </div>
      <div className="p-3 text-red-400 text-sm font-semibold">2021 2024</div>
      <div className="text-sm font-semibold p-1 rounded bg-white w-fit">
        Lat Twae
      </div>
    </>
  );
};

interface Props {
  position?: "left" | "right";
}
export default function ExperienceItem({ position = "left" }: Props) {
  return (
    <div className="flex justify-between h-fit">
      <div className="flex-grow basis-0 hidden sm:block">
        {position === "left" && <Item position={position} />}
      </div>
      <div className="flex justify-center w-10">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute size-2 sm:size-3 rounded-full ring-4 ring-red-400 bg-white -left-[2px] sm:-left-[4px]"></div>
        </div>
      </div>
      {position === "left" && (
        <div className="flex-grow basis-0 block sm:hidden py-5">
          <Item position={position} />
        </div>
      )}
      {position === "right" && (
        <div className="flex-grow basis-0 py-5">
          <Item position={position} />
        </div>
      )}
      {position === "left" && (
        <div className="flex-grow basis-0 py-5 hidden sm:block"></div>
      )}
    </div>
  );
}
