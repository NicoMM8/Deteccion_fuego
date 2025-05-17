import EventCarousel from "@/components/event-carousel"
import MapSection from "@/components/map-section"
import FeatureSection from "@/components/feature-section"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold fs-2">Eventos Destacados</h2>
          <EventCarousel />
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold fs-2">Descubre eventos cerca de ti</h2>
          <MapSection />
        </div>
      </section>

      <FeatureSection />

      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold fs-2">Categorías Populares</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {categories.map((category) => (
              <div key={category.id} className="col">
                <div className="card h-100 shadow-sm hover-shadow">
                  <div className="card-body text-center p-4">
                    <div
                      className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3"
                      style={{ width: "64px", height: "64px" }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="card-title fw-semibold fs-5 mb-2">{category.name}</h3>
                    <p className="card-text text-muted small">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3 fs-2">¿Listo para conectar con tu comunidad local?</h2>
          <p className="mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Únete a Conexión Local y descubre eventos auténticos, conoce a artistas locales y vive experiencias únicas
            en tu ciudad.
          </p>
          <button className="btn btn-light">
            Comenzar ahora <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </section>
    </main>
  )
}

const categories = [
  {
    id: 1,
    name: "Música en vivo",
    description: "Conciertos, jam sessions y presentaciones musicales",
    icon: <i className="bi bi-music-note-beamed fs-4 text-secondary"></i>,
  },
  {
    id: 2,
    name: "Arte y exposiciones",
    description: "Galerías, exhibiciones y talleres artísticos",
    icon: <i className="bi bi-palette fs-4 text-secondary"></i>,
  },
  {
    id: 3,
    name: "Gastronomía",
    description: "Festivales gastronómicos y experiencias culinarias",
    icon: <i className="bi bi-cup-hot fs-4 text-secondary"></i>,
  },
  {
    id: 4,
    name: "Cultura y tradiciones",
    description: "Eventos culturales y celebraciones tradicionales",
    icon: <i className="bi bi-building fs-4 text-secondary"></i>,
  },
]
