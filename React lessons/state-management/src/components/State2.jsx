import { useState } from "react";

export default function State2() {
  const [username, setUsername] = useState("Skywalkeris19");
  return (
    <div>
      <input
        type="text"
        className="border-2 border-slate-700 m-4"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value.replace(" ", ""));
        }}
      />
    </div>
  );
}
