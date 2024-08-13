"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/quinta-tawa/tawa1.png" },
    { image: "/img/quinta-tawa/tawa2.png" },
    { image: "/img/quinta-tawa/tawa3.png" },
    { image: "/img/quinta-tawa/tawa4.png" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <div className="gallery__area section-padding  overflow-hidden">
        <div className="container-fluid pl-50 pr-50">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10  pl-20 pr-20">
                <div className="gallery__area-item">
                  <img className="w-100" src={item.image} alt="image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
