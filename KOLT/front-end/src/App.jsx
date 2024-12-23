import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SessionContext from "./context/SessionContext";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  const [sessionState, setSessionState] = useState({
    user: { email: "", username: "" },
    isLogged: false,
  });

  useEffect(() => {
    async function checkSession() {
      const response = await fetch("/server/api/auth/check-session", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setSessionState({
          user: {
            email: data.session.user.email || "",
            username: data.session.user.username || "",
          },
          isLogged: true,
        });
      } else {
        setSessionState({
          user: { email: "", username: "" },
          isLogged: false,
        });
      }
    }

    checkSession();
  }, []);

  return (
    <SessionContext.Provider value={{ sessionState, setSessionState }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              sessionState.isLogged ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/dashboard"
            element={
              sessionState.isLogged ? <Dashboard /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/login"
            element={
              sessionState.isLogged ? <Navigate to="/dashboard" /> : <Login />
            }
          />

          <Route
            path="/register"
            element={
              sessionState.isLogged ? (
                <Navigate to="/dashboard" />
              ) : (
                <Register />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
}

export default App;
