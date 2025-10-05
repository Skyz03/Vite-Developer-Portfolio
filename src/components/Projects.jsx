import React from 'react';
import data from '../data/data.json';

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 text-white">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-extrabold">Projects</h2>
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
              <div
                className="h-56 rounded bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex gap-5">
                  <button className="hover:border-accent border-b-2 border-transparent pb-1 text-xs uppercase">
                    View Project
                  </button>
                  <button className="hover:border-accent border-b-2 border-transparent pb-1 text-xs uppercase">
                    View Code
                  </button>
                </div>
              </div>
            </article>

            {/* Text Outside Card */}
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <div className="mt-1 text-xs text-gray-400">{p.tags.join('  ·  ')}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
