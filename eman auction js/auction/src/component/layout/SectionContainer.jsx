// src/components/SectionContainer.jsx
import React from 'react'

const SectionContainer = ({ children, title, subtitle, className = '' }) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {subtitle && <p className="text-amber-600 font-medium mb-2">{subtitle}</p>}
            {title && <h2 className="text-3xl font-bold text-gray-800">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionContainer