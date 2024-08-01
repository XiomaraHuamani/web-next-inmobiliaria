const Blogcomment = ({ blogsData }) => {
  if (!blogsData) {
    return <p>No data available</p>;
  }

  // Asegúrate de que todos los datos sean consistentes entre el servidor y el cliente
  return (
    <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
      <div className="blog__details-left">
        <img src={blogsData.img} alt={blogsData.title} />
        <div className="blog__details-left-meta">
          <ul>
            <li>
              <a href="#">
                <i className="fal fa-user"></i>realizado - {blogsData.postby}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fal fa-calendar-alt"></i>
                {blogsData.date}/{blogsData.month}/{blogsData.year}
              </a>
            </li>
          </ul>
        </div>
        <h3 className="mb-20">{blogsData.title}</h3>
        <p className="mb-25">
          <div
            className="webinar-description"
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: blogsData.detalles }}
          ></div>
        </p>
        <p></p>
        <div className="blog__details-left-box">
          <div className="blog__details-left-box-icon">
            <img src="/img/icon/quote.png" alt="quote" />
          </div>
          <p>{blogsData.frase}</p>
          <h5>{blogsData.postby}</h5>
        </div>
      </div>
    </div>
  );
};

export default Blogcomment;
