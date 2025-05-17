"use client"

import { useState } from "react"

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxVisibleItems = 3

  const nextSlide = () => {
    if (currentIndex < events.length - maxVisibleItems) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="position-relative">
      <div className="position-absolute top-50 start-0 translate-middle-y" style={{ zIndex: 10 }}>
        <button
          className="btn btn-outline-secondary rounded-circle shadow-sm"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
      </div>

      <div className="carousel-container overflow-hidden">
        <div
          className="d-flex transition-transform"
          style={{
            transform: `translateX(-${currentIndex * (100 / maxVisibleItems)}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="px-2"
              style={{
                flex: `0 0 ${100 / maxVisibleItems}%`,
              }}
            >
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="position-relative" style={{ paddingTop: "56.25%" }}>
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-light"
                    style={{
                      backgroundImage: `url(/placeholder.svg?height=200&width=400)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center text-muted small mb-2">
                    <i className="bi bi-calendar me-1"></i>
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <i className="bi bi-geo-alt me-1"></i>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="card-title fw-semibold fs-5 mb-2">{event.title}</h3>
                  <p className="card-text text-muted small mb-3 text-truncate-2">{event.description}</p>
                  <button className="btn btn-outline-secondary w-100">Ver detalles</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="position-absolute top-50 end-0 translate-middle-y" style={{ zIndex: 10 }}>
        <button
          className="btn btn-outline-secondary rounded-circle shadow-sm"
          onClick={nextSlide}
          disabled={currentIndex >= events.length - maxVisibleItems}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

const events = [
  {
    id: 1,
    title: "Festival de Jazz en el Parque",
    description:
      "Disfruta de una tarde de jazz con los mejores músicos locales en un ambiente relajado y al aire libre.",
    date: "15 Jun 2025",
    location: "Parque Central",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Exposición de Arte Contemporáneo",
    description: "Una muestra de los artistas emergentes más prometedores de la escena local con obras innovadoras.",
    date: "22 Jun 2025",
    location: "Galería Moderna",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Noche de Poesía y Música",
    description: "Un evento íntimo donde poetas locales comparten sus obras acompañados de música acústica.",
    date: "28 Jun 2025",
    location: "Café Literario",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Taller de Cocina Tradicional",
    description: "Aprende a preparar platos tradicionales de la región con ingredientes locales y técnicas auténticas.",
    date: "5 Jul 2025",
    location: "Mercado Central",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Concierto de Rock Independiente",
    description: "Las bandas emergentes más prometedoras se reúnen para una noche de rock alternativo y energía pura.",
    date: "12 Jul 2025",
    location: "Sala Underground",
    image: "/placeholder.svg?height=200&width=400",
  },
]
