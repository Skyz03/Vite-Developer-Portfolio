import React from 'react';
import data from '../data/data.json';

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 text-white">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold">Projects</h2>
        <a href="#" className="text-sm tracking-widest border-b-2 border-accent pb-1">
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
              <div className="h-48 sm:h-56 rounded bg-cover bg-center">
                <picture>
                  <source media="(max-width: 799px)" srcSet={p.smallImage} />
                  <source media="(min-width: 800px)" srcSet={p.largeImage} />
                  <img src={p.largeImage} alt={p.title} className="w-full h-56 object-cover rounded" />
                </picture>
              </div>

              {/* Hover Buttons for Desktop */}
              <div className="hidden md:absolute md:inset-0 md:flex md:items-center md:justify-center md:opacity-0 md:group-hover:opacity-100 md:bg-black/60 md:flex-col md:gap-5">
                <button className="text-xs uppercase border-b-2 border-transparent hover:border-accent pb-1">
                  View Project
                </button>
                <button className="text-xs uppercase border-b-2 border-transparent hover:border-accent pb-1">
                  View Code
                </button>
              </div>
            </article>

            {/* Title and Tags */}
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <div className="mt-0.5 text-xs text-gray-400">{p.tags.join('  ·  ')}</div>

            {/* Buttons  for Mobile/Tablet */}
            <div className="mt-3 flex  gap-2 md:hidden">
              <button className="text-xs uppercase border-b-2 border-accent pb-1">
                View Project
              </button>
              <button className="text-xs uppercase border-b-2 border-accent pb-1">
                View Code
              </button>
            </div>



          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
