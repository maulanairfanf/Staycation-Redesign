import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className=" d-flex flex-wrap justify-content-around">
        {data.features.length === 0
          ? "Tidak Ada Feature"
          : data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="m-2 "
                  style={{ width: 110, height: 70 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty}</span>{" "}
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
