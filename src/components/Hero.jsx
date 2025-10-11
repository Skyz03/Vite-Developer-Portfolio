export default function Hero() {
  return (
    <section className="relative flex min-h-auto w-auto flex-col items-center justify-center gap-10 overflow-visible py-4 md:min-h-auto md:flex-row-reverse md:items-start md:justify-between md:gap-4 md:py-0">
      {/* Background Patterns */}
      <img
        src="/images/pattern-rings.svg"
        alt=""
        className="pointer-events-none absolute top-0 -left-1/2 w-96 md:w-60"
      />

      <img
        src="/images/pattern-circle.svg"
        alt=""
        className="pointer-events-none absolute top-1/3 -right-1/6 w-32 -translate-y-1/2 md:w-48"
      />

      {/* Profile + Text Container */}
      <div className="z-10 flex w-screen flex-col items-center md:z-1 md:w-full md:flex-row-reverse md:justify-between md:gap-0">
        {/* Profile Image */}
        <div className="w-48 md:-mr-10 md:h-lvh md:w-80 md:flex-1">
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
              className="mx-auto h-auto w-[80%] object-cover shadow-lg md:-z-10 md:mx-0 md:-mt-40 md:ml-auto"
            />
          </picture>
        </div>

        {/* Text Section */}
        <div className="my-4 max-w-xl text-center md:mr-[-8rem] md:w-auto md:flex-1 md:text-left">
          <h1 className="font-heading relative mb-6 text-4xl font-bold md:text-[68px]">
            <span className="block md:inline">Nice to meet you!</span>{" "}
            <span className="block md:inline">
              I'm{" "}
              <span className="decoration-accent underline">Adam Keyes</span>.
            </span>
          </h1>

          <p className="text-light-gray mb-4 px-4 text-sm md:px-0 md:text-base">
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
