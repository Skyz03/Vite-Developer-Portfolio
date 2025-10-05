import React from 'react'
import patternImage from '/images/pattern-rings.svg'

function Skills() {
  const items = [
    ['HTML', '4 Years Experience'],
    ['CSS', '4 Years Experience'],
    ['Javascript', '4 Years Experience'],
    ['Accessibility', '4 Years Experience'],
    ['React', '3 Years Experience'],
    ['Sass', '3 Years Experience']
  ]

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-16 text-white overflow-hidden">
      {/* Background pattern image */}
      <img
        src={patternImage}
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-64 opacity-40 pointer-events-none select-none z-0"
      />

      {/* Skills grid */}
      <div className="border-t border-gray-800 pt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="animate-fadeIn text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {it[0]}
              </h3>
              <p className="text-gray-400 text-sm md:text-base mt-2">{it[1]}</p>
            </div>
          ))}
        </div>

        {/* Horizontal line (mobile only) */}
        <hr className="border-gray-800 mt-10 md:hidden relative z-10" />
      </div>
    </section>
  )
}

export default Skills
