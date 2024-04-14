import ContactFormSubmit from "@/components/ContactFormSubmit";
import ContactHeader from "@/components/ContactHeader";

export default function Portfolio() {
  return (
    <div
      className="overlay flex-grow flex flex-col"
      // style={{ display: "none" }}
    >
      <div className="px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36 flex-grow flex-col flex items-center lg:flex-row">
        <div className="flex justify-center items-center flex-grow basis-0">
          <ContactHeader />
        </div>
        <div className="flex flex-col justify-center flex-grow w-full sm:w-[90%] md:w-[80%] lg:w-full xl:w-[80%] pb-5 lg:pb-0 basis-0">
          {/* <ContactForm /> */}
          <ContactFormSubmit />
        </div>
      </div>
    </div>
  );
}
