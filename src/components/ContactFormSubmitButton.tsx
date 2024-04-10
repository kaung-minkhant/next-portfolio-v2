"use client";

import { useFormStatus } from "react-dom";

export default function ContactFormSubmitButton() {
  const {pending} = useFormStatus()
  return (
    <button className="bg-purple-300 rounded-lg font-semibold text-gray-600 py-3" type="submit">
      {
        pending ? <span>Sending....</span> : <span>Send</span>
      }
    </button>
  );
}
