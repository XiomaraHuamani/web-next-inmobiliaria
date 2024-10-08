"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Videoarea() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="video__area" style={{ backgroundImage: `url('/img/departamentos/portada-5tawa.png')` }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Title */}
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="video__area-title">
              <h2>Reserva tu terreno ideal y construye tu terreno ya!</h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-4">
            <div className="video__area-right">
              <div className="video__play">
                <React.Fragment>
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="nYgB-x6dfn0"
                    onClose={() => setOpen(false)}
                  />
                  <span onClick={() => setOpen(true)}>
                    <i className="fas fa-play"></i>
                  </span>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
