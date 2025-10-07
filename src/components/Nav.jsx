const socialIcons = [
  {
    image: "/images/icon-github.svg",
    alt: "GitHub Icon",
    link: "https://github.com",
  },
  {
    image: "/images/icon-frontend-mentor.svg",
    alt: "Frontend-mentor Icon",
    link: "https://frontendmentor.io",
  },
  {
    image: "/images/icon-linkedin.svg",
    alt: "LinkedIn Icon",
    link: "https://linkedin.com",
  },
  {
    image: "/images/icon-twitter.svg",
    alt: "Twitter Icon",
    link: "https://twitter.com",
  },
];

export default function Navigation() {
  return (
    <nav className="mx-auto flex flex-col items-center justify-center px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-0">
      {/* Logo */}
      <div className="mb-4 text-xl md:mb-0">adamkeyes</div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <img src={icon.image} alt={icon.alt} className="h-6 w-6" />
          </a>
        ))}
      </div>
    </nav>
  );
}
