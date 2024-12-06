import { useState } from "react";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";
import RepeatPassword from "./RepeatPassword";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

export default function RegistrationForm({ switchPage }) {
  const [password, setPassword] = useState("");

  function handleRegistration(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registrationData = {};
    formData.forEach((val, key) => {
      registrationData[key] = val == "on" ? true : val;
    });

    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    const uniqueValidation = uniqueFieldsValidation(
      registeredUsers,
      registrationData,
      ["email", "username"]
    );

    if (!uniqueValidation) return;

    registeredUsers.push(registrationData);
    localStorage.setItem("users", JSON.stringify(registeredUsers));
    window.location.href = "/";
  }

  function uniqueFieldsValidation(
    registeredUsersArray,
    registrationData,
    validatedFields
  ) {
    for (const field of validatedFields) {
      const isFieldNotUnique = registeredUsersArray.some(
        (user) => user[field] === registrationData[field]
      );

      if (isFieldNotUnique) {
        alert(`Naudotojas su tokiu ${field} jau egzistuoja`);
        return false;
      }
    }

    return true;
  }

  return (
    <div className="container mx-auto bg-slate-50 py-5 px-10">
      <form onSubmit={handleRegistration}>
        <div className="flex items-baseline gap-x-4">
          <h2 className="text-2xl">Register Form</h2>
          <span
            className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              switchPage("login");
            }}
          >
            Go to Log In
          </span>
        </div>
        <UsernameInput />
        <PasswordInput onPasswordChange={setPassword} />
        <RepeatPassword password={password} />
        <EmailInput />
        <PhoneInput />
        <div>
          <label htmlFor="acceptTermsInput">
            Do you accept Terms&Conditions?
          </label>
          <input
            type="checkbox"
            className="ml-4 accent-violet-700"
            name="checkbox"
            required
            id="acceptTermsInput"
          />
        </div>

        <SubmitButton>My submit button</SubmitButton>
      </form>
    </div>
  );
}
