interface ItemProps {
  position?: "left" | "right";
  title: string;
  company: string;
  description: string;
  from: string;
  to: string;
}
const Item = ({
  position,
  title,
  company,
  description,
  from,
  to,
}: ItemProps) => {
  return (
    <>
      <div
        className={`bg-white p-3 font-semibold rounded-b-md ${
          position === "left" ? "rounded-s-md" : "rounded-e-md"
        } `}
      >
        {title}
      </div>
      <div className="p-3 text-sm italic">{description}</div>
      <div className="p-3 text-red-400 text-sm font-semibold">{`${from} - ${to}`}</div>
      <div className="text-sm font-semibold p-1 rounded bg-white w-fit">
        {company}
      </div>
    </>
  );
};

interface Props {
  position?: "left" | "right";
  title: string;
  company: string;
  description: string;
  from: string;
  to: string;
}
export default function ExperienceItem({
  position = "left",
  title,
  company,
  description,
  from,
  to,
}: Props) {
  return (
    <div className="flex justify-between h-fit">
      <div className="flex-grow basis-0 hidden sm:block">
        {position === "left" && (
          <Item
            position={position}
            company={company}
            description={description}
            from={from}
            to={to}
            title={title}
          />
        )}
      </div>
      <div className="flex justify-center w-10">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute size-2 sm:size-3 rounded-full ring-4 ring-red-400 bg-white -left-[2px] sm:-left-[4px]"></div>
        </div>
      </div>
      {position === "left" && (
        <div className="flex-grow basis-0 block sm:hidden py-5">
          <Item
            position={"right"}
            company={company}
            description={description}
            from={from}
            to={to}
            title={title}
          />
        </div>
      )}
      {position === "right" && (
        <div className="flex-grow basis-0 py-5">
          <Item
            position={position}
            company={company}
            description={description}
            from={from}
            to={to}
            title={title}
          />
        </div>
      )}
      {position === "left" && (
        <div className="flex-grow basis-0 py-5 hidden sm:block"></div>
      )}
    </div>
  );
}
