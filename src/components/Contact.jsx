import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="relative px-6 py-16 text-center md:px-32 md:py-24 md:text-left">
      <img
        src="/images/pattern-rings.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-5vw] left-[-10vw] w-[60vw] max-w-[600px] opacity-100 sm:w-[45vw] md:bottom-[20vw] md:w-[30vw] lg:w-[20vw]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center border-b border-gray-600 pb-13 md:flex-row md:items-start md:justify-between">
        {/* Left Text Section */}
        <div className="mb-10 max-w-md md:mr-12 md:mb-0">
          <h2 className="mb-4 text-3xl font-bold text-white">Contact</h2>

          <p className="text-base leading-relaxed text-gray-300">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md flex-col gap-8 md:w-[26rem]"
        >
          {/* Name Field */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="NAME"
              {...register("name", { required: true })}
              className={`w-full border-0 border-b bg-transparent px-2 py-3 text-sm tracking-wide text-white uppercase placeholder-gray-400 focus:outline-none ${
                errors.name
                  ? "border-[rgba(255,111,91,1)]"
                  : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
            />
          </div>

          {/* Email Field */}
          <div className="relative flex flex-col">
            <input
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              className={`w-full border-0 border-b bg-transparent px-2 py-3 text-sm tracking-wide text-white uppercase placeholder-gray-400 focus:outline-none ${
                errors.email
                  ? "border-[rgba(255,111,91,1)]"
                  : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
            />

            {/* Invalid Icon */}
            {errors.email && (
              <img
                src="/images/invalid.svg"
                alt="Invalid email"
                className="absolute top-3 right-0 h-5 w-5"
              />
            )}
            {/* Error Text */}
            {errors.email && (
              <p className="absolute right-0 -bottom-5 text-[11px] text-[rgba(255,111,91,1)]">
                Sorry, invalid format here
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <textarea
              placeholder="MESSAGE"
              rows="3"
              {...register("message", { required: true })}
              className={`w-full resize-none border-0 border-b bg-transparent px-2 py-3 text-sm tracking-wide text-white uppercase placeholder-gray-400 focus:outline-none ${
                errors.message
                  ? "border-[rgba(255,111,91,1)]"
                  : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="relative cursor-pointer font-semibold tracking-[3px] text-white uppercase after:absolute after:-bottom-3 after:left-0 after:h-[1px] after:w-full after:bg-[rgb(78,225,160)] hover:text-[rgb(78,225,160)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
