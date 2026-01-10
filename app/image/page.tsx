import ToolLayout from "@/components/ToolLayout";

export default function ImagePage() {
  return (
    <ToolLayout
      icon="🎨"
      title="AI Image Generator"
      desc="Create images using text prompts."
    >
      <input
        placeholder="Describe your image..."
        className="w-full rounded-xl p-4 bg-black/40 text-white border border-blue-500"
      />
      <button className="glass-btn mt-6 px-8 py-3 rounded-xl">
        Generate Image
      </button>
    </ToolLayout>
  );
}
