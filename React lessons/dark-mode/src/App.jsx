import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#141414" : "white";
    document.body.style.color = isDarkMode ? "white" : "#141414";
    localStorage.setItem("isDark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className="flex flex-col gap-2 justify-center place-items-center h-[100vh]">
      <h1 className="text-4xl font-bold">Hello world!</h1>
      <p className="font-semibold">Theme is: {isDarkMode ? "Dark" : "Light"}</p>
      <button
        className="bg-gray-500 hover:bg-gray-400 p-2 rounded font-semibold"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        Change theme
      </button>
    </div>
  );
}

export default App;
