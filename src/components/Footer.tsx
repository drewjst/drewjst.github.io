export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-dark-muted text-xs">
          &copy; {new Date().getFullYear()} Andrew Stalker
        </p>
        <p className="text-dark-muted text-xs">
          React + Tailwind
        </p>
      </div>
    </footer>
  );
}
