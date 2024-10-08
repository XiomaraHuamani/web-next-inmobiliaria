import Link from "next/link";

const RoomItem = ({ project = {} }) => {
    const { price, image, title = [] } = project;
    return (
        <>
            <div className="deluxe__area-item-image">
                <img className="img__full" src={image} alt="image" />
            </div>
            <div className="deluxe__area-item-content">
                <h6><span>${price}</span> / Vendido</h6>
                {/* <h4><Link href="/room-details">{title}</Link></h4> */}
                <h4 className="text-white">{title}</h4>
                <Link className="simple-btn" href="/contact"><i className="far fa-chevron-right"></i>Contactanos</Link>
            </div>
        </>
    );
};

export default RoomItem;
