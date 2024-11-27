import imagen1 from "../../../assets/img/imagenes_inicio/jurassicworld.jpg"
import imagen2 from "../../../assets/img/imagenes_inicio/harrypotter.jpg"
import imagen3 from "../../../assets/img/imagenes_inicio/madmax.jpg"

export const Inicio = () => {
  return (
    <>
      <div className="pt-3">
        <div className="col-md-12">
          <div className="card-group">
            <div className="card">
              <img src={imagen1} className="card-img-top" alt="jurassicworld" />
              <div className="card-body">
                <h5 className="card-title">Jurassic World Dominion</h5>
                <p className="card-text">
                  Jurassic World Dominion (2022) explora la convivencia entre humanos y dinosaurios, uniendo personajes clásicos y nuevos en una lucha por el equilibrio ecológico.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={imagen2} className="card-img-top" alt="harrypotter" />
              <div className="card-body">
                <h5 className="card-title">Harry Potter And The Prisoner Of Azkaban</h5>
                <p className="card-text">
                  Harry Potter and the Prisoner of Azkaban (2004) sigue a Harry en su tercer año en Hogwarts, enfrentando al peligroso Sirius Black mientras descubre verdades de su pasado.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={imagen3} className="card-img-top" alt="madmax" />
              <div className="card-body">
                <h5 className="card-title">Mad Max Fury Road</h5>
                <p className="card-text">
                  Mad Max: Fury Road (2015) es una intensa persecución en un mundo postapocalíptico, donde Max y Furiosa luchan por la libertad contra un tiránico líder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
