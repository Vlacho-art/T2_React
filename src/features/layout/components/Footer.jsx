import React from 'react'

export const Footer = () => {
  return (
    <footer
      className="mt-0 py-3"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        boxShadow: "0 -8px 20px rgba(0,0,0,.3)",
        borderTop: "1px solid rgba(255,255,255,.1)",
        marginTop: 'auto'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <span className="text-light small">
              © {new Date().getFullYear()} Tienda Gamer — Creado por Vladimir Durango Vargas
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
