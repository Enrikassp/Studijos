import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";

export default function LoginForm({ switchPage }) {
  function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const loginData = {};
    formData.forEach((val, key) => {
      loginData[key] = val;
    });

    const registeredUsers = JSON.parse(localStorage.getItem("users"));
    const findedUser = registeredUsers.find(
      (user) => user.username === loginData.username
    );

    if (!findedUser) return alert("Naudotojas nebuvo rastas!");

    if (findedUser.password === loginData.password) {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || [];

      if (loggedUser.username) {
        return alert("Jūs jau esate prisijungęs");
      }
      loggedUser.push(findedUser);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      switchPage("loggedPage");
    } else {
      return alert("Naudotojo slaptažodis netinka!");
    }
  }

  return (
    <div className="container mx-auto bg-slate-50 py-5 px-10">
      <form onSubmit={handleLogin}>
        <div className="flex items-baseline gap-x-4">
          <h2 className="text-2xl">Login Form</h2>
          <span
            className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              switchPage("register");
            }}
          >
            Pereiti į registraciją
          </span>
        </div>
        <UsernameInput />
        <PasswordInput />
        <SubmitButton>My submit button</SubmitButton>
      </form>
    </div>
  );
}
