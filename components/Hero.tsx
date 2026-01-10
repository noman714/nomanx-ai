export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        NomanX <span className="text-primary">AI</span>
      </h1>

      <p className="mt-4 text-blue-300 text-lg">
        Your Creative AI Partner
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:scale-105 transition">
          AI Chat Assistant
        </button>

        <button className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black transition">
          AI Image Tools
        </button>
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="ai-bg min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-5xl md:text-6xl font-bold glow-text">
        NomanX <span className="text-primary">AI</span>
      </h1>

      <p className="mt-4 text-blue-300 text-lg max-w-xl">
        Smart Tools for Smart Creators — AI that thinks, creates & helps like a pro.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-5">
        
        <button className="glass-btn px-8 py-4 rounded-xl text-white text-lg hover:scale-110 transition">
          🤖 AI Chat Assistant
        </button>

        <button className="glass-btn px-8 py-4 rounded-xl text-white text-lg hover:scale-110 transition">
          🎨 AI Image Tools
        </button>

        <button className="glass-btn px-8 py-4 rounded-xl text-white text-lg hover:scale-110 transition">
          🎤 Voice Tools
        </button>

      </div>

      <p className="mt-12 text-sm text-blue-400 opacity-80">
        Secure • Fast • Built for Creators
      </p>

    </section>
  );
}
