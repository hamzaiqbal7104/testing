import React, { useContext } from "react";
import { blogContext } from "../Global/blogContext";

const Blogs = () => {
  const { blogs } = useContext(blogContext);
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <div className="card">
            <div className="blog-Img">
            <a href="/blog " target="_blank">
              <img src={blog.image} alt="Not found" />
            </a>
            </div>
            <div className="blog-Detail">
              <div className="blog-post-date">
                <p>{blog.postDate}</p>
              </div>
              <div className="blog-view-Img">
                <img src={blog.viewImg} alt="Not found" />
              </div>
              <div className="blog-views">
                <p>{blog.views}</p>
              </div>
            </div>
            <div className="blog-title">
              <h4>{blog.title}</h4>
            </div>
            <div className="blog-discription">
              <p>{blog.discription}</p>
            </div>
          </div>
        </div>
      ))}
      <div className='button'>
        <a href="/blogs " target="_blank">
          <button type='button'>Load More</button>
        </a>
      </div>
    </div>
  );
};
export default Blogs;
