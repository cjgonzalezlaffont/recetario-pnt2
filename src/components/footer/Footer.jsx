import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary pt-3">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">ORT PNT2</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                Proyecto final para las materias PNT2 y TP2 <br />
                (Programacion en nuevas tecnologías 2) <br />
                (Taller de Programacion 2) <br />
                El mismo consiste en una app de recetas.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Integrantes</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>Lucía Liascovich</p>
              <p>Federico Guibert</p>
              <p>Jonathan Caucota</p>
              <p>César González</p>
              <p>Luz Aldana Victoria</p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <Link to="https://github.com/LuzAldanaVictoria/recetario-tp2">
                  <i className="fab fa-github m-2"></i> Repositorio Github TP2
                </Link>
              </p>
              <p>
                <Link to="https://github.com/LuLias/recetario-pnt2">
                  <i className="fab fa-github m-2"></i> Repositorio Github PNT2
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> Av. Del Libertador 6796,
                CABA, ARG
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> itesort@ort.edu.ar
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 54 11 47896500
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex justify-content-between p-1">
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <i className="fab fa-facebook-f m-2"></i>
          <i className="fab fa-twitter m-2"></i>
          <i className="fab fa-google m-2"></i>
          <i className="fab fa-instagram m-2"></i>
          <i className="fab fa-linkedin m-2 "></i>
          <i className="fab fa-github m-2"></i>
        </div>
      </section>
      <div className="text-center p-3">
        © 2023 Copyright :<a className="text-white"> ORT</a>
      </div>
    </footer>
  );
};
