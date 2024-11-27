export const PeliAdmin = () => {
  return (
    <>
      {/* Sección de administración */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Título de la sección */}
            <h3 className="text-center text-primary mb-4">Administrar Películas</h3>

            {/* Alerta de éxito */}
            <div className="alert alert-success d-none" role="alert">
              ¡Película agregada correctamente!
            </div>

            {/* Botones de acción */}
            <div className="d-flex justify-content-between mb-4">
              <button className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#agregarPeliculaModal">
                Agregar Película
              </button>
              <button className="btn btn-danger btn-sm">Eliminar Película</button>
            </div>

            {/* Tarjetas (Cards) de películas */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Jurassic World (2022)</h5>
                <p className="card-text">Una nueva entrega de la saga Jurassic, con una historia de supervivencia y dinosaurios más realistas.</p>
                <button className="btn btn-warning btn-sm me-2">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Matrix (1997)</h5>
                <p className="card-text">La película que revolucionó el cine de ciencia ficción, con una historia sobre la realidad virtual y la lucha contra las máquinas.</p>
                <button className="btn btn-warning btn-sm me-2">Editar</button>
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>

            {/* Tabla de películas */}
            <div className="table-responsive">
              <table className="table table-hover table-sm">
                <thead className="table-secondary">
                  <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Año</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jurassic World</td>
                    <td>2022</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">Editar</button>
                      <button className="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Matrix</td>
                    <td>1997</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">Editar</button>
                      <button className="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para agregar película */}
      <div className="modal fade" id="agregarPeliculaModal" aria-labelledby="agregarPeliculaModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="agregarPeliculaModalLabel">Agregar Nueva Película</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">Título</label>
                  <input type="text" className="form-control" id="titulo" placeholder="Ingrese el título de la película" />
                </div>
                <div className="mb-3">
                  <label htmlFor="anio" className="form-label">Año</label>
                  <input type="number" className="form-control" id="anio" placeholder="Ingrese el año de la película" />
                </div>
                <button type="submit" className="btn btn-primary">Agregar Película</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
