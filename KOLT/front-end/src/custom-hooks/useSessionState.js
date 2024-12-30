import { useEffect, useState } from "react";

export function useSessionState() {
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

  return { sessionState, setSessionState };
}
