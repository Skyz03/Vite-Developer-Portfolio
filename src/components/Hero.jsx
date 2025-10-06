export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 md:min-h-auto md:flex-row-reverse md:items-start md:justify-between md:gap-4 md:px-4">
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

      {/* Profile + Text Container */}
      <div className="z-10 flex w-screen flex-col items-center md:mx-auto md:w-auto md:flex-row-reverse md:gap-3.5">
        {/* Profile Image */}
        <div className="w-48">
          <picture>
            <source
              srcSet="/images/image-profile-desktop.webp"
              media="(min-width: 1440px)"
            />
            <source
              srcSet="/images/image-profile-tablet.webp"
              media="(min-width: 768px)"
            />
            <img
              src="/images/image-profile-mobile.webp"
              alt="Portrait of Adam Keyes"
              className="mx-auto h-full w-full object-cover shadow-lg md:mx-0"
            />
          </picture>
        </div>

        {/* Text Section */}
        <div className="my-4 max-w-xl text-center md:text-left">
          <h1 className="font-heading relative mb-6 text-4xl font-bold md:text-7xl">
            <span className="block md:inline">Nice to meet you!</span>{" "}
            <span className="block md:inline">
              I'm{" "}
              <span className="decoration-accent underline">Adam Keyes</span>.
            </span>
          </h1>

          <p className="mb-8 text-sm md:text-base">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <a href="#contact" className="contact-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
