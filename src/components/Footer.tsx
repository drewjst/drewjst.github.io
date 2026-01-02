export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-8">
      <p>© {currentYear} All rights reserved.</p>
      <p className="mt-2">Built with React • Tailwind CSS</p>
    </footer>
  );
}
