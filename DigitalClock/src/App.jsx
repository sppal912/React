import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // 12-hour format
  const displayHour = hours % 12 || 12;
  const amPm = hours >= 12 ? "PM" : "AM";

  // Date
  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="rounded-2xl border border-green-500 bg-black p-10 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-green-400">
          DIGITAL CLOCK
        </h1>

        <h2 className="text-center font-mono text-6xl font-bold text-green-400">
          {String(displayHour).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          <span className="ml-3 text-2xl">{amPm}</span>
        </h2>

        <p className="mt-6 text-center text-lg text-gray-300">{date}</p>
      </div>
    </div>
  );
}

export default App;
