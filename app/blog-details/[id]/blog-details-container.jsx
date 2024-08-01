"use client";

import blogs from "@/components/data/blogs";
import { useParams, useRouter } from "next/navigation";
import Blogcomment from "./blog-comment";
import BlogSideBar from "./blog-sidebar";

const Blogdetailscontainer = () => {
  const { id } = useParams(); // Desestructuración para obtener el ID
  const router = useRouter();

  // Verifica si `blogs` tiene datos y si `id` es correcto
  const blogsData = blogs.find((blog) => blog.id === id);

  if (!blogsData) {
    router.push("/404-error");
    return null; // Evita renderizar el componente si los datos no están disponibles
  }

  return (
    <>
      <div className="blog__details section-padding">
        <div className="container">
          <div className="row">
            <Blogcomment blogsData={blogsData} />
            <BlogSideBar blogsData={blogsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogdetailscontainer;
