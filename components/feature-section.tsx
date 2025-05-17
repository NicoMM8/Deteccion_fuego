export default function FeatureSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-2 mb-3">¿Por qué usar Conexión Local?</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Nuestra plataforma conecta a organizadores de eventos con el público interesado en experiencias locales
            auténticas
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center bg-light rounded-3 mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="card-title fw-semibold fs-5 mb-2">{feature.title}</h3>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    id: 1,
    title: "Descubre eventos locales",
    description: "Encuentra eventos culturales, artísticos y sociales cerca de ti con nuestro mapa interactivo.",
    icon: <i className="bi bi-geo-alt fs-5 text-secondary"></i>,
  },
  {
    id: 2,
    title: "Gestión de eventos",
    description: "Crea, edita y administra tus propios eventos con herramientas intuitivas para organizadores.",
    icon: <i className="bi bi-calendar-event fs-5 text-secondary"></i>,
  },
  {
    id: 3,
    title: "Reservas simplificadas",
    description: "Sistema de reservas fácil de usar con notificaciones y confirmaciones en tiempo real.",
    icon: <i className="bi bi-people fs-5 text-secondary"></i>,
  },
  {
    id: 4,
    title: "Chat en tiempo real",
    description: "Comunícate directamente con organizadores y otros asistentes para resolver dudas al instante.",
    icon: <i className="bi bi-chat-dots fs-5 text-secondary"></i>,
  },
  {
    id: 5,
    title: "Pagos seguros",
    description: "Compra entradas de manera segura con nuestra pasarela de pagos integrada y protegida.",
    icon: <i className="bi bi-credit-card fs-5 text-secondary"></i>,
  },
  {
    id: 6,
    title: "Privacidad garantizada",
    description: "Tu información personal está protegida con nuestro sistema de seguridad avanzado.",
    icon: <i className="bi bi-shield-check fs-5 text-secondary"></i>,
  },
]
