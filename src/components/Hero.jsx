export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 md:flex-row md:px-16">
      {/* Background Patterns */}
      <img
        src="/images/pattern-rings.svg"
        alt=""
        className="pointer-events-none absolute top-1/5 -left-1/2 w-96 md:w-60"
      />

      <img
        src="/images/pattern-circle.svg"
        alt=""
        className="pointer-events-none absolute top-1/2 -right-1/5 w-32 -translate-y-1/2 md:w-48"
      />

      {/* Profile Image */}
      <div className="z-10 w-60 md:w-80">
        <picture>
          {/* XL / Desktop and up */}
          <source
            srcSet="/images/image-profile-desktop.webp"
            width={440}
            height={440}
            media="(min-width: 1280px)"
          />
          {/* LG / Laptop and up */}
          <source
            srcSet="/images/image-profile-desktop.webp"
            width={400}
            height={400}
            media="(min-width: 1024px)"
          />
          {/* MD / Tablet and up */}
          <source
            srcSet="/images/image-profile-tablet.webp"
            width={320}
            height={320}
            media="(min-width: 768px)"
          />
          {/* SM / Small devices and up */}
          <source
            srcSet="/images/image-profile-mobile.webp"
            width={220}
            height={220}
            media="(min-width: 480px)"
          />
          {/* Default / Mobile fallback */}
          <img
            src="/images/image-profile-mobile.webp"
            alt="Portrait of Adam Keyes"
            width={170}
            height={170}
            className="mx-auto object-cover shadow-lg md:mx-0"
          />
        </picture>
      </div>

      {/* Text Section */}
      <div className="my-4 max-w-xl text-center md:text-left">
        <h1 className="font-heading mb-2 text-4xl font-bold">Nice to meet you!</h1>
        <h2 className="font-heading mb-6 text-4xl font-bold">
          I'm <span className="decoration-accent underline">Adam Keyes</span>.
        </h2>

        <p className="mb-8 text-sm">
          Based in the UK, I’m a front-end developer passionate about building accessible web apps
          that users love.
        </p>

        <a href="#contact" className="contact-button">
          Contact Me
        </a>
      </div>
    </section>
  );
}
