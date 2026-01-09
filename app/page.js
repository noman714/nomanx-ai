import Hero from "@/components/Hero";

export default function Home() {
  return <Hero />;
    }
import ChatBox from "./ChatBox";

export default function ChatPage() {
  return <ChatBox />;
    }
if (user.used_tokens > 1000 && user.plan === "free") {
  return Response.json({ error: "Limit reached" });
}
