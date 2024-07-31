import Link from "next/link";

const Accommodationstext = () => {
  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">Inmobiliaria</span>
        <h2>Proyectos Inmobiliarios Destacados</h2>
        <p>
        Explora nuestra selección de propiedades que se adaptan a tus necesidades y presupuesto.
        </p>
        <Link className="theme-btn" href="/about">
            Ver mas <i className="fal fa-long-arrow-right"></i>
        </Link> 
      </div>
    </div>
  );
};

export default Accommodationstext;
