import Link from 'next/link';

const BannerCta = () => {
  return (
    <div className="row">
      <form action="#">
        <div className="check__area">
          {/* <div className="check__area-item">
            <p>
              Tipo de propiedad
              <input id="date" type="date" />
            </p>
          </div> */}
          <div className="check__area-item">
            <div className="check__area-item-room">
              <p>Tipo de propiedad</p>
              <select className="select" name="select">
                <option value="1">Terreno</option>
              </select>
            </div>
          </div>
          {/* <div className="check__area-item">
            <p>
              Ubicacion
              <input id="date2" type="date" />
            </p>
          </div> */}
          <div className="check__area-item">
            <div className="check__area-item-room">
              <p>Ubicacion</p>
              <select className="select" name="select">
                <option value="1">Arequipa</option>
              </select>
            </div>
          </div>
          <div className="check__area-item">
            <div className="check__area-item-room">
              <p>Distrito</p>
              <select className="select" name="select">
                <option value="1">Sabandia</option>
                {/* <option value="2">2 Room</option>
                <option value="3">3 Room</option>
                <option value="4">4 Room</option>
                <option value="5">5 Room</option> */}
              </select>
            </div>
          </div>
          <div className="check__area-item button">
            <Link href="/about" passHref>
              <button className="theme-btn">
                Buscar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BannerCta;
