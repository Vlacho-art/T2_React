
export const Content = () => {
  const productos = [
    {
      id: 1,
      nombre: "ASUS ROG Swift OLED 240Hz",
      precio: 1249,
      img: "/img/monitor.jfif",
    },
    {
      id: 2,
      nombre: "Escritorio Gamer RGB 48",
      precio: 999,
      img: "/img/escritorio.jfif",
    },
    {
      id: 3,
      nombre: "PC Gamer RGB 16GB RAM",
      precio: 1899,
      img: "/img/pc.webp",
    },
    {
      id: 4,
      nombre: "Teclado + Mouse Gamer RGB",
      precio: 59,
      img: "/img/mouse.webp",
    },
    {
      id: 5,
      nombre: "Monitor 27 144Hz",
      precio: 299,
      img: "/img/gamer.png",
    },
    {
      id: 6,
      nombre: "Auriculares Gamer ",
      precio: 59,
      img: "/img/auriculares.webp",
    },
  ];

  return (
    <main className="container-fluid px-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="text-warning mb-3">Productos destacados</h4>

          <div className="row">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow bg-dark text-light">
                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt={p.nombre}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="mb-1">{p.nombre}</h6>
                    <p className="fw-bold text-success mb-2">
                      ${p.precio} USD
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <button type="button" className="btn btn-warning btn-sm flex-fill">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger btn-sm flex-fill">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white rounded shadow p-4" style={{ top: "150px" }}>
            <h5 className="mb-3">Agregar producto</h5>

            <form>
              <div className="mb-2">
                <label className="form-label small">Nombre del producto</label>
                <input name="nombre" className="form-control" placeholder="Nombre del producto" />
              </div>

              <div className="row">
                <div className="col-6 mb-2">
                  <label className="form-label small">Precio (USD)</label>
                  <input name="precio" className="form-control" placeholder="$" />
                </div>
                <div className="col-6 mb-2">
                  <label className="form-label small">Stock</label>
                  <input name="stock" type="number" className="form-control" defaultValue={1} />
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label small">Categoría</label>
                <select name="categoria" className="form-select">
                  <option>Selecciona una categoría</option>
                  <option>Monitores</option>
                  <option>Escritorios</option>
                  <option>PC</option>
                  <option>Auriculares</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="form-label small">URL de imagen</label>
                <input name="img" className="form-control" placeholder="https://..." />
              </div>

              <div className="mb-2">
                <label className="form-label small">Descripción</label>
                <textarea name="descripcion" className="form-control" rows={4}></textarea>
              </div>

              <button type="submit" className="btn btn-warning w-100 mt-2"><i className="bi bi-plus-circle-fill me-2"></i>Agregar al catálogo</button>
              <button type="reset" className="btn btn-outline-secondary w-100 mt-2"><i className="bi bi-trash"></i> Limpiar </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}