export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-background text-foreground px-6 md:px-16 gap-10 overflow-hidden">
      {/* Background Patterns */}
      <img
        src="/images/pattern-rings.svg"
        alt=""
        className="absolute -left-1/2 top-1/5 w-96 md:w-60 pointer-events-none"
      />

      <img
        src="/images/pattern-circle.svg"
        alt=""
        className="absolute -right-1/5 top-1/2 -translate-y-1/2 w-32 md:w-48  pointer-events-none"
      />

      {/* Profile Image */}
      <div className="w-60 md:w-80 z-10">
        <img
          src="/images/image-profile-mobile.webp"
          alt="Portrait of Adam Keyes"
          width={170}
          height={170}
          className="rounded-xl object-cover shadow-lg mx-auto md:mx-0"
        />
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl z-10">
        <h1 className="text-4xl font-heading font-bold mb-2">
          Nice to meet you!
        </h1>
        <h2 className="text-4xl font-heading font-bold mb-6 text-primary">
          I'm Adam Keyes.
        </h2>

        <p className="text-sm mb-8">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a href="#contact" className="contact-button">
          Contact Me
        </a>
      </div>
    </section>
  );
}
