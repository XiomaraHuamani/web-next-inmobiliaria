import BreadCrumb from "@/app/breadcrumb/breadcrumb";
import Footer from "../../footer/footer";
import Blogdetailscontainer from "./blog-details-container";
import HeaderOne from "@/app/header/HeaderOne";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Blogdetails = () => {
  return (
    <>
      <SEO pageTitle="Blog " />
      <HeaderOne />
      <BreadCrumb
        title="Blog"
        innerTitle="Blog "
        bgImage="/img/departamentos/header-contact.png"
      />
      <Blogdetailscontainer />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Blogdetails;
