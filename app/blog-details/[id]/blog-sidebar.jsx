import blogsData from "@/components/data/blogs";
import Link from "next/link";
import Image from "next/image";
const BlogSideBar = () => {
  const blogs = blogsData.slice(0, 3);

  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4">
      <div className="all__sidebar">
        <div className="all__sidebar-item">
          <h5>Blogs Recientes</h5>
          {blogs?.map((blog, index) => (
            <div key={blog.id} className="all__sidebar-item-post">
              <div className="all__sidebar-item-post-item">
                <div className="all__sidebar-item-post-item-image">
                  <Link href={`/blog-details/${blog.id}`}>
                    <Image
                      src={blog.img}
                      alt="blog-image"
                      width={500}
                      height={500}
                      style={{ objectFit: "cover" }} // Ajuste para estilo
                    />
                  </Link>
                </div>
                <div className="all__sidebar-item-post-item-content">
                  <span>
                    <i className="fal fa-calendar-alt"></i> {blog.date}/
                    {blog.month}/{blog.year}
                  </span>
                  <h6>
                    <Link href={`/blog-details/${blog.id}`} className="fs-6">
                      {blog.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="all__sidebar-item">
          <h5>Etiquetas</h5>
          <div className="all__sidebar-item-tag">
            <ul>
              <li>
                <a href="#">Tip</a>
              </li>
              <li>
                <a href="#">Consejo</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Inmobiliaria</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
