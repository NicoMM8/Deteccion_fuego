import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Conexión Local - Eventos culturales y experiencias auténticas",
  description:
    "Descubre eventos culturales, artísticos y sociales cerca de ti. Conecta con organizadores y vive experiencias locales auténticas.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* Bootstrap Icons */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />

        {/* Bootstrap JS Bundle with Popper */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          Conexión Local
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explorar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Eventos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Organizadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre nosotros
              </a>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary">Iniciar sesión</button>
            <button className="btn btn-primary">Registrarse</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <h5 className="mb-3">Conexión Local</h5>
            <p className="text-muted small">
              Conectando organizadores de eventos con el público interesado en experiencias locales auténticas.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Explorar eventos
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Crear evento
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Términos y condiciones
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Política de privacidad
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted small">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="mb-3">Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted small d-flex align-items-center">
                <i className="bi bi-envelope me-2"></i>
                info@conexionlocal.com
              </li>
            </ul>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-decoration-none text-muted">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-decoration-none text-muted">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-decoration-none text-muted">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-4 pt-4 text-center text-muted small">
          <p>© {new Date().getFullYear()} Conexión Local. Todos los derechos reservados.</p>
          <p className="mt-2">Proyecto universitario desarrollado con fines educativos.</p>
        </div>
      </div>
    </footer>
  )
}
