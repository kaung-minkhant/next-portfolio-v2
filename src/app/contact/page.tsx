import ContactFormSubmit from "@/components/ContactFormSubmit";
import ContactHeader from "@/components/ContactHeader";

export default function Portfolio() {
  return (
    <div className="overlay h-full overflow-auto" style={{ display: "none" }}>
      <div className="h-full w-full flex flex-col lg:flex-row px-4 sm:px-9 md:px-14 lg:px-20 xl:px-36">
        <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex justify-center items-center">
          <ContactHeader />
        </div>
        <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col justify-center">
          {/* <ContactForm /> */}
          <ContactFormSubmit />
        </div>
      </div>
    </div>
  );
}
