import React from "react";
import data from "../data/data.json";

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 text-white sm:px-6 sm:py-12 md:mx-0 md:px-0">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold sm:text-4xl">Projects</h2>
        <a href="#" className="contact-button">
          CONTACT ME
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {data.map((p, i) => (
          <div key={i}>
            {/* Image + Hover Overlay */}
            <article className="group relative cursor-pointer overflow-hidden rounded bg-gray-900 shadow-lg transition-transform hover:-translate-y-2">
              {/* Image */}
              <div className="h-48 rounded bg-cover bg-center sm:h-56">
                <picture>
                  <source media="(max-width: 799px)" srcSet={p.smallImage} />
                  <source media="(min-width: 800px)" srcSet={p.largeImage} />
                  <img
                    src={p.largeImage}
                    alt={p.title}
                    className="h-56 w-full rounded object-cover"
                  />
                </picture>
              </div>

              {/* Hover Buttons for Desktop */}
              <div className="hidden md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center md:gap-5 md:bg-black/60 md:opacity-0 md:group-hover:opacity-100">
                <button className="hover:border-accent border-b-2 border-transparent pb-1 text-xs uppercase">
                  View Project
                </button>
                <button className="hover:border-accent border-b-2 border-transparent pb-1 text-xs uppercase">
                  View Code
                </button>
              </div>
            </article>

            {/* Title and Tags */}
            <h3 className="mt-4 font-semibold uppercase">{p.title}</h3>
            <div className="mt-0.5 text-sm text-gray-400">
              {p.tags.join("  ·  ")}
            </div>

            {/* Buttons  for Mobile/Tablet */}
            <div className="mt-3 flex gap-2 md:hidden">
              <button className="contact-button">View Project</button>
              <button className="contact-button">View Code</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
