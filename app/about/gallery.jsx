"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/quinta-tawa/img1.png" },
    { image: "/img/quinta-tawa/img2.png" },
    { image: "/img/quinta-tawa/img3.png" },
    { image: "/img/quinta-tawa/img4.png" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
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
