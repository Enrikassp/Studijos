import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import LoggedPage from "./components/LoggedPage";

function App() {
  const [currentlyActivePage, setCurrentlyActivePage] = useState("login");

  const isPageNotFound = !(
    currentlyActivePage === "login" ||
    currentlyActivePage === "register" ||
    currentlyActivePage === "loggedPage"
  );

  return (
    <>
      {currentlyActivePage === "login" && (
        <LoginForm switchPage={setCurrentlyActivePage} />
      )}

      {currentlyActivePage === "register" && (
        <RegistrationForm switchPage={setCurrentlyActivePage} />
      )}
      {currentlyActivePage === "loggedPage" && (
        <LoggedPage switchPage={setCurrentlyActivePage} />
      )}
      {isPageNotFound && <div>Puslapis nerastas</div>}
    </>
  );
}

export default App;
