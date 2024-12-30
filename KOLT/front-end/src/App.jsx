import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SessionContext from "./context/SessionContext";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useSessionState } from "./custom-hooks/useSessionState";

function App() {
  const { sessionState, setSessionState } = useSessionState();
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
