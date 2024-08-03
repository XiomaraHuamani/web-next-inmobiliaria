import Link from "next/link";

const Social = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="https://web.facebook.com/territorialinmobiliariaperu/?locale=es_LA&_rdc=1&_rdr" target="_blank">
            <i className="fab fa-facebook-f text-white"></i>
          </Link>
        </li>
        {/* <li>
          <Link href="https://twitter.com" target="_blank">
            <i className="fab fa-twitter"></i>
          </Link>
        </li> */}
        {/* <li>
          <Link href="https://www.behance.net" target="_blank">
            <i className="fab fa-behance"></i>
          </Link>
        </li> */}
        <li>
          <Link href="https://www.tiktok.com/@territorial.inmobiliaria" target="_blank">
            <i className="fab fa-tiktok text-white"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/company/territorial-inmobiliaria/" target="_blank">
            <i className="fab fa-linkedin-in text-white"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Social;
