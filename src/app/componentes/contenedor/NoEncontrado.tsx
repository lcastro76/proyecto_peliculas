import error from "../../../assets/img/404.jpeg"

export const NoEncontrado = () => {
    return (
      <>
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
          <div className="row text-center">
            <div className="col-md-12">
              {/* Imagen o icono de error */}
              <img src={error} className="img-fluid mb-4" alt="Error 404"/>
              <h1 className="display-1 text-danger">404</h1>
              <h2 className="text-muted mb-3">Página No Encontrada</h2>
              <p className="lead text-muted">Lo sentimos, pero la página que buscas no existe. Verifica la URL o regresa a la página principal.</p>
              {/* Botón para regresar */}
              <a href="/" className="btn btn-primary btn-lg">
                Regresar al Inicio
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  