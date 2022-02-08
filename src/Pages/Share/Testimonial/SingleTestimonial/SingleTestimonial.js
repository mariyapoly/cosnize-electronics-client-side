import React from "react";
import clientImg from "../../../../images/client1.png";
import "./SingleTestimonial.css";

const SingleTestimonial = () => {
  return (
    <div className="single-testimonial">
      <img src={clientImg} alt="" />
      <p>
        " There are many variations of passages of Lorem Ipsum available Mirum
        est notare quam littera gothica, quam nunc putamus parum claram,
        anteposuerit litterarum formas humanitatis per seacula quarta decima et
        quinta decima. have randomized If you are going to use a passage "
      </p>
      <h5>Richard Victor </h5>
      <span>CEO of Sunpark</span>
    </div>
  );
};

export default SingleTestimonial;
