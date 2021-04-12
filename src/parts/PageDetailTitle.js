import Breadcrumb from "elements/Breadcrumb";
import React from "react";
import Fade from "react-reveal/Fade";

export default function PageDetailTitle({ data, breadcrumb }) {
  console.log(data);
  return (
    <section className="container spacing-sm mb-5">
      <Fade bottom>
        <div className="row align-items center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-12 col-lg-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <div className="text-gray-400">
              {data.city}, {data.country}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
