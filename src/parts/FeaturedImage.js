import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
  return (
    <section className="container mb-5">
      <div className="d-flex flex-wrap ">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={` ${
                index > 0 ? "col-12 col-md-6 mb-3 px-2" : "col-12 mb-3"
              } `}
            >
              <Fade bottom delay={300 * index}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img className="img-cover" src={item.url} alt={item._id} />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
