export default function HeroSection() {
  return (
    <section className="position-relative bg-dark text-white">
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark"></div>
      </div>

      <div
        className="position-relative container px-4 py-5 text-center"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <h1 className="display-4 fw-bold mb-3">Conexión Local</h1>
        <p className="fs-4 mb-4 mx-auto" style={{ maxWidth: "800px" }}>
          Descubre eventos auténticos y conecta con artistas y organizadores en tu comunidad
        </p>

        <div className="bg-white rounded p-2 d-flex mx-auto" style={{ maxWidth: "600px" }}>
          <div className="flex-grow-1 d-flex align-items-center px-3 py-2">
            <i className="bi bi-search text-muted me-2"></i>
            <input
              type="text"
              placeholder="Buscar eventos, artistas o lugares..."
              className="form-control border-0 shadow-none"
            />
          </div>
          <button className="btn btn-dark">Buscar</button>
        </div>
      </div>
    </section>
  )
}
