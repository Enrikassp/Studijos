import { useState } from "react";

export default function EmailInput() {
  // ErrorMessage
  const [errorMessage, setErrorMessage] = useState("");
  // turi atitikti šabloną tekstas@tekstas.tekstas
  // turi domenas atitikti bent vieną iš šių tiekėjų: gmail, facebook, yahoo, mail

  function isEmailInputValid(e) {
    const email = e.target.value;

    if (!/^[A-Za-z0-9]{2,40}@.{2,40}\.[a-z]{1,4}$/.test(email))
      return setErrorMessage("Email has not a valid pattern!");
    if (!/@(gmail|mail|yahoo|facebook)\./.test(email))
      return setErrorMessage("Email has not a valid email provider!");
    if (!/^[A-Za-z0-9]{2,40}@.{2,40}\.[a-z]{1,4}$/.test(email))
      return setErrorMessage("Email has not a valid pattern!");
    if (email.length < 8)
      return setErrorMessage(
        "Email does not meet minimum character count requirement!"
      );
    if (email.length > 40)
      return setErrorMessage(
        "Email does not meet maximum character count requirement!"
      );
    setErrorMessage("");
  }

  return (
    <div className="my-4 ">
      <input
        type="email"
        className={`${
          errorMessage !== "" ? "border-red-500" : ""
        } border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
        placeholder="email"
        name="email"
        onBlur={isEmailInputValid}
        required
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
}
