
export default function CompanyHeader() {
  const links = [
    { name: 'Liberty Mutual Insurance', url: 'https://www.libertymutual.com/' },
    { name: 'Army', url: 'https://www.army.mil/82ndairborne' },
    { name: 'Education', url: 'https://www.purdue.edu/' },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm border border-zed-border rounded-full text-zed-text hover:bg-zed-highlight hover:border-zed-accent transition-all duration-200"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
