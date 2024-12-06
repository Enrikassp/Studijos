import { useState } from "react";

export default function PhoneInput() {
  const [errorMessage, setErrorMessage] = useState("");

  function isPhoneValid(e) {
    const phone = e.target.value;

    if (!/^(\+370|8)(6|7|0)\d{7}$/.test(phone)) {
      return setErrorMessage("Phone number format is not valid");
    }

    setErrorMessage("");
  }

  function handleChange(e) {
    const phone = e.target.value.replaceAll(/[^0-9+]/g, "");
    e.target.value = phone;
  }

  return (
    <div className="my-4 ">
      <input
        type="text"
        className={`${
          errorMessage !== "" ? "border-red-500" : ""
        } border-[1px] w-full rounded-md focus:shadow-md outline-none px-4 py-1`}
        placeholder="please enter your phone number"
        onChange={handleChange}
        onBlur={isPhoneValid}
        name="phone"
        required
      />
      <span className="text-red-500 text-sm">{errorMessage}</span>
    </div>
  );
}
