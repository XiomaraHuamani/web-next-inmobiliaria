"use client";
import Image from "next/image";
import disponibilidad from "../../public/img/quinta-tawa/terreno-disponibilidad.svg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                {/* <span className="subtitle__one">Terrenos</span>
                <h2>Quinta Tawa</h2> */}
                <Image src="/img/quinta-tawa/logo.svg" alt="" width={450} height={250} style={{paddingBottom: '50px'}}/>
                <p>
                <h3 style={{paddingBottom: '20px'}}>Vive la Exclusividad en un Entorno Natural y Seguro</h3>
                Bienvenido a Quinta Tawa, uno de los proyectos inmobiliarios más destacados de Territorial, 
                ubicado en el encantador distrito de Sabandia en Arequipa. Ofrecemos lotes en venta desde 
                236.02 m², en un entorno natural y ecológico perfecto para todas las edades. Aquí, la privacidad 
                y seguridad son primordiales, con vigilancia los 365 días del año. Vive la experiencia única de 
                un hogar rodeado de naturaleza, diseñado para brindarte el estilo de vida que siempre has soñado.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {/* <div className="offers__area-image">
                <Image alt="" layout="responsive" src={disponibilidad} />
              </div> */}
              <Image alt="" layout="responsive" src={disponibilidad} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
