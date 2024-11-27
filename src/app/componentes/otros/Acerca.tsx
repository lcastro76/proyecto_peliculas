import acercaDe from "../../../assets/img/acercaDe.jpg"

export const Acerca = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <img src={acercaDe} className="img-fluid mb-4" alt="Acerca de nosotros"/>
            <h2 className="display-4">Acerca de Nosotros</h2>
            <p className="lead">
              Somos un equipo apasionado por el cine, siempre buscando ofrecerte las mejores
              películas, reseñas y noticias del mundo cinematográfico. Nuestra misión es conectar
              a los amantes del cine con su pasión, proporcionando un sitio fácil de navegar
              y con contenido actualizado.
            </p>
            <button className="btn btn-primary btn-lg mt-3">Saber más</button>
          </div>
        </div>
      </div>
    </>
  );
};
