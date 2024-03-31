interface ItemProps {
  position?: "left" | "right";
}
const Item = ({position}: Props) => {
  return (
    <>
      <div className={ `bg-white p-3 font-semibold rounded-b-md ${position === 'left' ? "rounded-s-md": "rounded-e-md" } ` }>
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
      {/* left */}
      <div className="w-5/12">
        {position === "left" && (
          <Item position={position} />
        )}
      </div>
      {/* center */}
      <div className="w-1/12 flex justify-center">
        {/* line */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* circle */}
          <div className="absolute size-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* right */}
      <div className="w-5/12">
        {position === "right" && (
          <Item position={position} />
        )}
      </div>
    </div>
  );
}
