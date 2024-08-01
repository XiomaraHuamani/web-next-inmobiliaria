import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Bloggridcontainer from "./blog-grid-container";

const Bloggrid = () => {
  return (
    <>
      <SEO pageTitle="Blog Grid" />
      <HeaderOne />
      <BreadCrumb
        title="Blog "
        innerTitle="Blog "
        bgImage="/img/departamentos/header-contact.png"
      />
      <Bloggridcontainer />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Bloggrid;
