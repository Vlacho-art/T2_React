import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const q = (form.search?.value || form.query?.value || '').trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
    else navigate('/')
  }

  return (
    <header
      className="py-3 top w-100"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,.3)",
        borderBottom: "1px solid rgba(255,255,255,.1)",
        zIndex: 1030
      }}
    >
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div className="flex-shrink-0">
            <h1 className="h5 mb-1 text-warning d-flex align-items-center gap-2">
              <i className="bi bi-bag-check-fill"></i>
              Carrito de Compras
            </h1>
            <p className="mb-0 text-light opacity-75 small">
              Arma tu PC Gamer con los mejores productos del mercado.
            </p>
            <p className="mb-0 text-light opacity-75 small">
              ¡Haz tu compra hoy y disfruta de la mejor experiencia gaming!
            </p>
          </div>

          <nav className="d-none d-lg-flex align-items-center gap-2 mb-2 mb-lg-0">
            <NavLink to="/" className="btn btn-link text-light px-2">Inicio</NavLink>
            <NavLink to="/articles" className="btn btn-link text-light px-2">Artículos</NavLink>
            <NavLink to="/props" className="btn btn-link text-light px-2">Props</NavLink>
          </nav>

          <form onSubmit={handleSearch} className="w-100 w-lg-auto flex-grow-1" role="search" id="searchForm">
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-dark text-warning border-0">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="search"
                id="searchInput"
                name="search"
                className="form-control bg-dark text-white border-0"
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
              />

              <button type="submit" className="btn btn-warning text-dark fw-semibold">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}