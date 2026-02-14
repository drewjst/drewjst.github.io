export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-dark-muted text-sm">
          &copy; {new Date().getFullYear()} Andrew Stalker
        </p>
        <p className="text-dark-muted text-sm font-mono">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
