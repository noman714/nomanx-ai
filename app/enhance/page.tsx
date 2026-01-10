import ToolLayout from "@/components/ToolLayout";

export default function EnhancePage() {
  return (
    <ToolLayout
      icon="✨"
      title="Photo & Video Enhancer"
      desc="Upscale & enhance quality instantly."
    >
      <button className="glass-btn px-8 py-3 rounded-xl">
        Upload File
      </button>
    </ToolLayout>
  );
}
