import { useState } from "react";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();
    const output = getResponse(input);
    setHistory((prev) => [...prev, { cmd: input, output }]);
    setInput("");
  };

  const getResponse = (cmd) => {
    switch (cmd.toLowerCase()) {
      case "help":
        return "Commands: help, about, clear";
      case "about":
        return "Kara AI: minimalist assistant for the new world.";
      case "clear":
        setHistory([]);
        return "";
      default:
        return `Unknown command: ${cmd}`;
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono h-screen p-4 overflow-y-auto">
      {history.map((item, idx) => (
        <div key={idx}>
          <div className="text-green-300">$ {item.cmd}</div>
          <div className="ml-2">{item.output}</div>
        </div>
      ))}
      <form onSubmit={handleCommand}>
        <span className="text-green-300">$ </span>
        <input
          className="bg-black text-green-400 outline-none w-4/5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}