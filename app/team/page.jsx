import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Servicesteam from "./servicesteam";
import SEO from "@/components/seo";

const Team = () => {
  return (
    <>
      <SEO pageTitle="Team" />
        <HeaderOne />
        <BreadCrumb title='Nuestro grupo de asesores' innerTitle='Asesores' bgImage='/img/asesores/header-asesores.png'  />
        <Servicesteam />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Team;
