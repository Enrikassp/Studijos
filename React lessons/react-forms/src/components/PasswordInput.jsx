import { useState } from "react";

export default function PasswordInput({ onPasswordChange = (newValue) => {} }) {
  const [errorMessage, setErrorMessage] = useState("");

  function isPasswordValid(e) {
    const password = e.target.value;
    if (!/[a-z]/.test(password))
      return setErrorMessage(
        "Password does not meet lowercase character requirement"
      );
    if (!/[A-Z]/.test(password))
      return setErrorMessage(
        "Password does not meet uppercase character requirement"
      );
    if (!/[!@#$%^&*()[\]\\?]/.test(password))
      return setErrorMessage(
        "Password does not meet special character requirement"
      );
    if (password.length < 8)
      return setErrorMessage(
        "Password does not meet minimum character count requirement!"
      );
    if (password.length > 50)
      return setErrorMessage(
        "Password does not meet maximum character count requirement!"
      );
    setErrorMessage("");
  }

  return (
    <div className="my-4 ">
      <input
        type="password"
        className={`${
          errorMessage !== "" ? "border-red-500" : ""
        } border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
        placeholder="please enter your password"
        onBlur={isPasswordValid}
        name="password"
        onChange={(e) => onPasswordChange(e.target.value)}
        required
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
}
