import React from "react";
import patternImage from "/images/pattern-rings.svg";

function Skills() {
  const items = [
    ["HTML", "4 Years Experience"],
    ["CSS", "4 Years Experience"],
    ["Javascript", "4 Years Experience"],
    ["Accessibility", "4 Years Experience"],
    ["React", "3 Years Experience"],
    ["Sass", "3 Years Experience"],
  ];

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-10 text-white md:mx-0 md:px-0 md:py-16">
      {/* Background pattern image */}
      <img
        src={patternImage}
        alt=""
        className="pointer-events-none absolute right-0 bottom-0 z-0 w-40 opacity-40 select-none sm:w-52 md:w-64"
      />

      {/* Skills grid */}
      <div className="border-light-gray relative z-10 border-t pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="animate-fadeIn flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {it[0]}
              </h3>
              <p className="mt-2 text-sm text-gray-400 md:text-base">{it[1]}</p>
            </div>
          ))}
        </div>

        {/* Horizontal line (mobile only) */}
        <hr className="border-light-gray relative z-10 mt-10 md:hidden" />
      </div>
    </section>
  );
}

export default Skills;
