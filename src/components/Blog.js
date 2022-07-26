import React from "react";
import view from "../assets/Vector (1).svg";
import car from "../assets/blogCar.svg";
import road from "../assets/road.svg";
import bar from "../assets/Line.svg";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-info">
        <div className="blog-detail">
          <div className="blog-post-date">
            <p>Posted on October 6th 2021</p>
          </div>
          <div className="blog-view-Img">
            <img src={view} alt="Not found" />
          </div>
          <div className="blog-views">
            <p>563 views</p>
          </div>
        </div>
        <div className="blog-title">
          <h3>Should I Buy a New Car or Lease a New Car in 2021?</h3>
        </div>
        <div className="blog-discription">
          <p>
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical
          </p>
        </div>
      </div>
      <div className="blog-pic">
        <img src={car} alt="Not found" />
      </div>
      <div className="b-detail">
        <h3>This is a blog post headline</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <p>
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </div>
      <div className="blog-pic1">
        <img src={road} alt="Not found" />
      </div>
      <div className="b-detail">
        <h3>This is a small blog post headline</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <div className='b-text'>
          <img src={bar} alt="Not found" />
          <p>
            Ut non urna a odio condimentum dictum. Proin egestas erat a orci
            ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
            justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
            velit, ultricies eget enim vel, venenatis mollis ante.
          </p>
        </div>
        <p>
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </div>
    </div>
  );
};
export default Blog;
