import React from "react"
import data from "../data/data.json"

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-extrabold">Projects</h2>
        <a
          href="#contact"
          className="text-sm tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          CONTACT ME
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {data.map((p, i) => (
          <div key={i}>
            {/* Image + Hover Overlay */}
            <article
              className="group relative bg-gray-900 rounded overflow-hidden shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div
                className="h-56 bg-cover bg-center rounded transition-all duration-500 group-hover:brightness-[0.75]"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-b from-transparent via-black/40 to-black/80">
                <div className="flex flex-col gap-5">
                  <button className=" font-bold text-xs uppercase border-b-2 border-transparent pb-1 hover:border-accent hover:text-accent transition-colors duration-200">
                    View Project
                  </button>
                  <button className="font-bold text-xs uppercase border-b-2 border-transparent pb-1 hover:border-accent hover:text-accent transition-colors duration-200">
                    View Code
                  </button>
                </div>
              </div>
            </article>

            {/* Text Outside Card */}
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <div className="text-xs text-gray-400 mt-1">{p.tags.join("  ·  ")}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
