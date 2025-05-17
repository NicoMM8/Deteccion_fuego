"use client"

import { useState } from "react"

export default function MapSection() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <div className="row g-4">
      <div className="col-lg-8">
        <div className="bg-white rounded shadow-sm position-relative" style={{ height: "400px" }}>
          {/* Simulación de mapa */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center p-4">
              <p className="text-muted mb-2">Mapa interactivo</p>
              <p className="small text-muted">Aquí se mostraría el mapa de Google Maps con los eventos cercanos</p>
            </div>
          </div>

          {/* Marcadores de eventos simulados */}
          {mapEvents.map((event) => (
            <div
              key={event.id}
              className={`position-absolute translate-middle d-flex align-items-center justify-content-center cursor-pointer ${
                selectedEvent === event.id ? "ring" : ""
              }`}
              style={{
                top: `${event.position.y}%`,
                left: `${event.position.x}%`,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#212529",
                color: "white",
                cursor: "pointer",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.2s",
                boxShadow: selectedEvent === event.id ? "0 0 0 4px rgba(173, 181, 189, 0.5)" : "none",
              }}
              onClick={() => setSelectedEvent(event.id)}
            >
              <i className="bi bi-geo-alt-fill small"></i>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h3 className="fw-semibold fs-5 mb-3">Eventos cercanos</h3>
            <div className="d-flex flex-column gap-2">
              {mapEvents.map((event) => (
                <div
                  key={event.id}
                  className={`p-3 rounded cursor-pointer ${selectedEvent === event.id ? "bg-light" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedEvent(event.id)}
                >
                  <h4 className="fw-medium fs-6 mb-1">{event.title}</h4>
                  <div className="d-flex align-items-center small text-muted">
                    <i className="bi bi-calendar me-1"></i>
                    <span>{event.date}</span>
                    <span className="mx-1">•</span>
                    <i className="bi bi-geo-alt me-1"></i>
                    <span>{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="btn btn-primary w-100">Ver todos los eventos</button>
      </div>
    </div>
  )
}

const mapEvents = [
  {
    id: 1,
    title: "Festival de Jazz en el Parque",
    date: "15 Jun 2025",
    location: "Parque Central",
    position: { x: 30, y: 40 },
  },
  {
    id: 2,
    title: "Exposición de Arte Contemporáneo",
    date: "22 Jun 2025",
    location: "Galería Moderna",
    position: { x: 50, y: 60 },
  },
  {
    id: 3,
    title: "Noche de Poesía y Música",
    date: "28 Jun 2025",
    location: "Café Literario",
    position: { x: 70, y: 30 },
  },
]
