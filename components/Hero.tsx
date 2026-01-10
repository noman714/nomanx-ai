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
