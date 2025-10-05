import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="flex mx-auto text-5xl w-full justify-center items-center h-screen font-bold text-blue-600">
        Vite + React
      </h1>
    </>
  );
}

export default App;
