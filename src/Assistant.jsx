// src/Assistant.jsx
import { useState } from "react";

function Assistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://bumper-freeze-apache-oc.trycloudflare.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4", // Replace with "NemoMix-Unleashed" if needed
          messages: updatedMessages
        })
      });

      const data = await response.json();
      const reply = data.choices[0]?.message?.content;

      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
      setLogs((prevLogs) => [
        ...prevLogs,
        `> ${input}`,
        reply || "❌ No reply received from Arcadia AI."
      ]);
    } catch (err) {
      console.error("API error:", err);
      setMessages([...updatedMessages, { role: "assistant", content: "❌ Failed to reach Arcadia AI." }]);
      setLogs((prevLogs) => [
        ...prevLogs,
        `> ${input}`,
        "❌ Failed to reach Arcadia AI."
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black text-green-400 font-vt p-4">
      <div className="border border-green-500 w-full max-w-2xl">
        {/* Terminal-style header bar */}
        <div className="flex justify-between items-center bg-black text-green-400 border-b border-green-500 px-2 py-1 text-sm font-bold font-mono">
          <span>C:\WINDOWS\System32\Arcadia_AI</span>
          <div className="flex space-x-1">
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">_</div>
            <div className="border border-green-500 w-4 h-4 text-center leading-3 cursor-pointer">X</div>
          </div>
        </div>

        {/* Output display */}
        <div className="p-4 h-[500px] overflow-y-auto bg-black border-t border-green-500">
          {logs.map((line, idx) => (
            <p key={idx} className="font-mono text-green-300">{line}</p>
          ))}
          {loading && <p className="blinking-cursor font-mono">Thinking...</p>}
        </div>

        {/* Input field */}
        <form onSubmit={handleSubmit} className="flex border-t border-green-500">
          <input
            type="text"
            className="bg-black border-none text-green-300 w-full px-4 py-2 font-mono focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your command..."
          />
        </form>
      </div>
    </div>
  );
}

export default Assistant;