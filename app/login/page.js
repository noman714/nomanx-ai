"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await supabase.auth.signInWithPassword({ email, password });
    alert("Logged in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 p-6 rounded-xl">
        <input onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
        <button onClick={signIn}>Login</button>
      </div>
    </div>
  );
}
