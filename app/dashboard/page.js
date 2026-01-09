export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Smart Tools for Smart Creators
      </h1>

      <p className="text-gray-400 mb-8">
        All AI tools in one powerful platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "AI Chat Assistant",
          "AI Image Generator",
          "AI Video Generator",
          "Photo Enhancer",
          "Video Enhancer",
          "Subscription System",
        ].map(card => (
          <div
            key={card}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/20 transition"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
