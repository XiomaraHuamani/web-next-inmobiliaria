import terreno1 from "@/public/img/terrenos/terreno1.png";
import terreno2 from "@/public/img/terrenos/terreno2.png";
import Image from "next/image";

const Accommodationsimg = () => {
  return (
    <div className="col-xl-7 col-lg-6">
      <div className="accommodations__area-right">
        <div className="accommodations__area-right-image">
          <Image src={terreno1} alt="" width={500} height={350} />
          <div className="accommodations__area-right-image-two">
            <Image src={terreno2} alt="" width={350} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodationsimg;
