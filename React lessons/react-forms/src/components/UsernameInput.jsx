import { useState } from "react";

export default function UsernameInput() {
  // ErrorMessage
  const [errorMessage, setErrorMessage] = useState("");
  // Username negali prasidėti su niekuo kitu, tik raide (didžiąja arba mažąja);
  // Ne trumpesnis nei 5 simboliai
  // Ne ilgesnis nei 20 simboliu

  function isUsernameValid(e) {
    const username = e.target.value;
    if (!/^[a-zA-Z]/.test(username))
      return setErrorMessage(
        "Username does not start with Alphabet character!"
      );
    if (username.length < 5)
      return setErrorMessage(
        "Username does not meet minimum character count requirement!"
      );
    if (username.length > 20)
      return setErrorMessage(
        "Username does not meet maximum character count requirement!"
      );
    setErrorMessage("");
  }

  return (
    <div className="my-4 ">
      <input
        type="text"
        className={`${
          errorMessage !== "" ? "border-red-500" : ""
        } border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
        placeholder="username"
        name="username"
        onBlur={isUsernameValid}
        required
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
}
