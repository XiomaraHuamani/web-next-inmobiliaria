"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonialData = [
  { image: "/img/asesores/Paulo.png", name: 'Paulo Castro', position: 'Asesor Comercial', des: 'Soy un asesor comercial dinámico y proactivo con más de 11 años de experiencia en el sector inmobiliario. Con una pasión por la innovación, siempre estoy a la vanguardia de las últimas tendencias y tecnologías que pueden beneficiar a mis clientes. Mi enfoque estratégico y mi capacidad para adaptarme rápidamente a los cambios del mercado me permiten ofrecer soluciones creativas y efectivas. Soy conocido por mi energía y mi compromiso con la excelencia, siempre buscando superar las expectativas de mis clientes.' },
  { image: "/img/asesores/Julio.png", name: 'Julio Vargas', position: 'Asesor Comercial', des: 'Soy asesor comercial con más de 10 años de experiencia en el sector inmobiliario. Mi conocimiento profundo del mercado y mi capacidad para identificar oportunidades de inversión me han convertido en un referente para mis clientes. Me destaco por mi habilidad para negociar y cerrar tratos, siempre buscando el mejor beneficio para mis clientes. Además, mi enfoque centrado en el cliente y mi dedicación para entender sus necesidades individuales garantizan un servicio personalizado y eficiente.' },
  { image: "/img/asesores/Patricia.png", name: 'Patricia Medina', position: 'Asesor Comercial', des: 'Soy una asesora comercial conocida por mi meticulosidad y atención al detalle. Con más de 8 años en el rubro, he ayudado a numerosos clientes a encontrar su hogar ideal o la inversión perfecta. Mi habilidad para realizar análisis de mercado precisos y mi talento para presentar propiedades de manera atractiva hacen de mí una experta invaluable. También soy muy apreciada por mi empatía y mi capacidad para construir relaciones duraderas con mis clientes.' },
]

const Testimonial = () => {
  return (
    <>
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 4500,
                  }}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                >
                  {testimonialData?.map((data, id) => (
                    <SwiperSlide key={id}>
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src={data.image}
                            alt="image"
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>{data.name}</h4>
                          <span>{data.position}</span>
                          <p>{data.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>

                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
