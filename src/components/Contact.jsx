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
    reset()
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-[rgb(36,36,36)] px-6 py-16 text-center md:flex-row md:items-start md:text-left md:px-16 md:py-24">

      <img
        src="/images/pattern-rings.svg"
        alt=""
        className="pointer-events-none absolute top-10 left-0 w-40 opacity-25 md:w-60"
      />

      {/* Left Text Section */}
      <div className="max-w-md mb-10 md:mb-0 md:mr-12">
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>

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
            className={`w-full bg-transparent border-0 border-b px-2 py-3 text-sm uppercase tracking-wide text-white placeholder-gray-400 focus:outline-none ${errors.name ?
                "border-[rgba(255,111,91,1)]"
                : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col relative">
          <input
            type="email"
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            className={`w-full bg-transparent border-0 border-b px-2 py-3 text-sm uppercase tracking-wide text-white placeholder-gray-400 focus:outline-none ${errors.email
                ? "border-[rgba(255,111,91,1)]"

                : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
          />

          {/* Invalid Icon */}
          {errors.email && (
            <img
              src="/images/invalid.svg"
              alt="Invalid email"
              className="absolute right-0 top-3 w-5 h-5"
            />
          )}
        </div>


        {/* Message Field */}
        <div className="flex flex-col">
          <textarea
            placeholder="MESSAGE"
            rows="3"
            {...register("message", { required: true })}
            className={`w-full bg-transparent resize-none border-0 border-b px-2 py-3 text-sm uppercase tracking-wide text-white placeholder-gray-400 focus:outline-none ${errors.message ? "border-[rgba(255,111,91,1)]" : "border-gray-500 focus:border-[rgb(78,225,160)]"
              }`}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="relative text-white font-semibold tracking-[3px] uppercase after:absolute after:left-0 after:-bottom-3 after:h-[1px] after:w-full after:bg-[rgb(78,225,160)] hover:text-[rgb(78,225,160)] cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
