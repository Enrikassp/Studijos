import { useState } from "react";

export default function RepeatPassword({ password }) {
  // ErrorMessage
  const [errorMessage, setErrorMessage] = useState("");

  function isRepeatPasswordValid(e) {
    const repeatPassword = e.target.value;
    if (repeatPassword !== password)
      return setErrorMessage("Password mismatch");
    setErrorMessage("");
  }

  return (
    <div className="my-4 ">
      <input
        type="password"
        className={`${
          errorMessage !== "" ? "border-red-500" : ""
        } border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
        placeholder="please repeat your password"
        onBlur={isRepeatPasswordValid}
        name="repeatedPassword"
        required
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
}
