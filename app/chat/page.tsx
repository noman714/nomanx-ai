import ToolLayout from "@/components/ToolLayout";

export default function ChatPage() {
  return (
    <ToolLayout
      icon="🤖"
      title="AI Chat Assistant"
      desc="Ask anything. Smart AI replies instantly."
    >
      <textarea
        placeholder="Type your message..."
        className="w-full h-40 rounded-xl p-4 bg-black/40 text-white border border-blue-500"
      />
      <button className="glass-btn mt-6 px-8 py-3 rounded-xl">
        Send
      </button>
    </ToolLayout>
  );
}
