import ScrollMouse from "./ScrollMouse";
import Signature from "./Signature";

export default function Biography() {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* title */}
      <h1 className="font-bold text-2xl">Biography</h1>
      {/* description */}
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque
        impedit aut excepturi esse quos laudantium doloremque facere beatae
        aspernatur?
      </p>
      {/* quote */}
      <span className="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      {/* signature */}
      <div className="self-end">
        <Signature />
      </div>
      {/* scroll svg */}
      <div className="">
        <ScrollMouse />
      </div>
    </div>
  );
}
