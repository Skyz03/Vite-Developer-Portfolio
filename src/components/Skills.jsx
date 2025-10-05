import React from 'react'

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
        <section className="max-w-6xl mx-auto px-6 py-12 text-white">
            <div className="border-t border-gray-800 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((it, idx) => (
                        <div key={idx} className="animate-fadeIn">
                            <h3 className="text-2xl font-bold">{it[0]}</h3>
                            <p className="text-gray-400 text-sm mt-2">{it[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills
