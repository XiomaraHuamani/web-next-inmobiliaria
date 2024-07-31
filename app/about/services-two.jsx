"use client";
import Image from "next/image";
import Seguridad from "../../public/img/quinta-tawa/seguridad.png";
import Natural from "../../public/img/quinta-tawa/natural.png";
import Terreno from "../../public/img/quinta-tawa/terreno.png";
import Vip from "../../public/img/quinta-tawa/vip.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Seguridad} />
                </div>
                <div className="services__two-item-content">
                  <h4>Seguridad Permanente</h4>
                  <p>
                  Vigilancia las 24 horas del día, los 365 días del año para tu tranquilidad y la de tu familia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Natural} />
                </div>
                <div className="services__two-item-content">
                  <h4>Entorno Natural</h4>
                  <p>
                  Ubicado en un área ecológica y natural, perfecto para disfrutar de un estilo de vida saludable y en contacto con la naturaleza.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Terreno} />
                </div>
                <div className="services__two-item-content">
                  <h4>Amplios Lotes</h4>
                  <p>
                  Terrenos desde 236.02 m², ideales para construir la casa de tus sueños con amplio espacio para jardines y áreas recreativas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Vip} />
                </div>
                <div className="services__two-item-content">
                  <h4>Comunidad Exclusiva</h4>
                  <p>
                  Vive rodeado de vecinos que comparten tu estilo de vida y valores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
