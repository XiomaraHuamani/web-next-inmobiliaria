import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="feature__area">
      <div className="container">
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                alt=""
                src="/img/services/marketing-digital1.png"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Marketing Inmobiliario</span>
                <h2>Atracción de Clientes Potenciales</h2>
                <p>
                Nuestras campañas de marketing estratégicamente diseñadas 
                captan la atención de clientes interesados en comprar, 
                vender o alquilar propiedades, asegurando un flujo 
                constante de prospectos calificados.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Ver mas <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6  order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Proyectos inmobiliarios</span>
                <h2>Desarrollo Comercial</h2>
                <p>
                Potencia tu negocio con nuestro análisis de mercado integral, 
                selección de ubicaciones estratégicas y estrategias de marketing 
                B2B avanzadas que garantizan máxima visibilidad y conexión con
                los mejores inquilinos.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Ver mas <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/services/posicionamiento-comercial.png"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/services/investigacion-mercado.png"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">Investigacion de mercado</span>
                <h2>Planificación y Desarrollo de Proyectos</h2>
                <p>
                Permite una mejor planificación y desarrollo de proyectos, 
                asegurando que los nuevos desarrollos inmobiliarios estén 
                alineados con la demanda del mercado.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Ver mas<FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row align-items-center bg-right flex justify-between">
          <div className="col-xl-6 col-lg-6 order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Experiences</span>
                <h2>Swimming Pool</h2>
                <p>
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor. Mauris sit amet lectus porta,
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/features/feature-4.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
}
