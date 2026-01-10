import Link from "next/link";

export default function ToolLayout({
  title,
  desc,
  icon,
  children,
}: {
  title: string;
  desc: string;
  icon: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ai-bg px-6 py-16">
      <Link href="/" className="text-blue-400 text-sm">← Back</Link>

      <div className="max-w-3xl mx-auto mt-10 feature-card rounded-2xl p-10 text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h1 className="text-4xl font-bold glow-text mb-3">{title}</h1>
        <p className="text-blue-300 mb-8">{desc}</p>

        {children}

        <p className="mt-10 text-xs text-blue-500">
          AI connection coming in next steps
        </p>
      </div>
    </main>
  );
}
