import Image from "next/image";

export default function Services() {
  return (
    <div className="services__area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/cleaning.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                Marketing Inmobiliario
                </h5>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
            
            <div className="services__area-item" >
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/wifi.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                Desarrollo de Proyectos Inmobiliarios
                </h5>
                
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="services__area-item">
              <div className="services__area-item-icon flex justify-center items-center">
                <Image src="/location.png" alt="" width={50} height={50} />
              </div>
              <div className="services__area-item-content">
                <h5>
                Investigación de Mercado
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
