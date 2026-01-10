const features = [
  {
    icon: "🤖",
    title: "AI Chat Assistant",
    desc: "ChatGPT-style smart assistant that answers anything.",
  },
  {
    icon: "🎨",
    title: "AI Image Generator",
    desc: "Create images from text prompts using AI.",
  },
  {
    icon: "🎬",
    title: "AI Video Generator",
    desc: "Generate & edit videos with AI power.",
  },
  {
    icon: "✨",
    title: "Photo Enhancer",
    desc: "Upscale, sharpen & enhance photos instantly.",
  },
  {
    icon: "🚀",
    title: "Video Enhancer",
    desc: "Boost video quality, clarity & resolution.",
  },
  {
    icon: "🎙️",
    title: "Voice & Audio AI",
    desc: "AI voice, dubbing & smart audio tools.",
  },
];

export default function Features() {
  return (
    <section className="ai-bg py-24 px-6">
      <h2 className="text-4xl font-bold text-center glow-text mb-16">
        NomanX AI Features
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="feature-card rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {f.title}
            </h3>
            <p className="text-blue-300 text-sm">{f.desc}</p>

            <button className="mt-6 glass-btn px-6 py-2 rounded-lg text-sm">
              Open Tool →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
