"use client";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("/chat/api/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage.text }),
    });

    const data = await res.json();
    setMessages([...messages, userMessage, { sender: "ai", text: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-6">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 p-3 rounded-xl max-w-xs ${m.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-700 self-start"}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-xl p-3 bg-gray-800 focus:outline-none"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="bg-cyan-500 px-5 rounded-xl hover:bg-cyan-400">
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
