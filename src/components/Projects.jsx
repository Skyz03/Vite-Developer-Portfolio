import React from 'react';
import data from '../data/data.json';

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-extrabold">Projects</h2>
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
              <div
                className="h-56 rounded bg-cover bg-center"
          
              >
                <picture>
                  <source media="(width < 800px)" srcset={p.smallImage}/>
                  <source media="(width >= 800px)" srcset={p.largeImage} />
                  <img src={p.largeImage} alt="Chris standing up holding his daughter Elva" />
                </picture>
              </div>

              {/* Hover Buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
                <div className="flex flex-col gap-5">
                  <button className="text-xs uppercase border-b-2 border-transparent hover:border-accent pb-1">
                    View Project
                  </button>
                  <button className="text-xs uppercase border-b-2 border-transparent hover:border-accent pb-1">
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
