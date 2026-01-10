import ToolLayout from "@/components/ToolLayout";

export default function VoicePage() {
  return (
    <ToolLayout
      icon="🎙️"
      title="Voice & Audio AI"
      desc="AI voice, dubbing & audio tools."
    >
      <button className="glass-btn px-8 py-3 rounded-xl">
        Record / Upload Audio
      </button>
    </ToolLayout>
  );
}
