export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-background text-foreground px-6 md:px-16 gap-10">
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-5xl font-heading font-bold mb-2">
          Nice to meet you!
        </h1>
        <h2 className="text-5xl font-heading font-bold mb-6 text-primary">
          I'm Adam Keyes.
        </h2>

        <p className="text-lg text-muted-foreground mb-8">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition"
        >
          Contact Me
        </a>
      </div>

      {/* Image Section */}
      <div className="w-60 md:w-80">
        <img
          src="/images/image-profile-mobile.webp"
          alt="Portrait of Adam Keyes"
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
