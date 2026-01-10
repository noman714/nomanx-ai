import ToolLayout from "@/components/ToolLayout";

export default function VideoPage() {
  return (
    <ToolLayout
      icon="🎬"
      title="AI Video Generator"
      desc="Create & enhance videos using AI."
    >
      <button className="glass-btn px-8 py-3 rounded-xl">
        Generate Video
      </button>
    </ToolLayout>
  );
}
