import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "AI Chat", href: "/dashboard/chat" },
    { name: "Image AI", href: "/dashboard/image" },
    { name: "Video AI", href: "/dashboard/video" },
    { name: "Enhancer", href: "/dashboard/enhance" },
  ];

  return (
    <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        NomanX AI
      </h2>

      <div className="space-y-4">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-4 py-2 rounded-lg hover:bg-white/10 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
