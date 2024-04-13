"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/app/actions";
import ContactFormSubmitButton from "./ContactFormSubmitButton";

const initialState = {
  message: "",
};
export default function ContactFormSubmit() {
  const [state, formAction] = useFormState(sendEmail, initialState);
  return (
    <form
      action={formAction}
      className="w-full bg-red-300 rounded-xl flex flex-col gap-8 justify-center p-10"
    >
      <span className="">Dear Kaung,</span>
      <textarea
        name="message"
        rows={4}
        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
      />
      <span className="">My name is:</span>
      <input
        type="text"
        name="user_name"
        className="bg-transparent border-b-2 border-b-black outline-none"
      />
      <span className="">My email address is: </span>
      <input
        type="email"
        name="user_email"
        className="bg-transparent border-b-2 border-b-black outline-none"
      />
      <span className="">Regards</span>
      <ContactFormSubmitButton />
      {state.message === "success" && (
        <span className="text-green-600 font-semibold">
          Your message has been sent successfully
        </span>
      )}
      {state.message === "failed" && (
        <span className="text-red-600 font-semibold">Something went wrong</span>
      )}
    </form>
  );
}
