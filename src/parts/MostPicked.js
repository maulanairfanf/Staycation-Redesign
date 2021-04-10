import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  console.log(props);
  return (
    <section className="container my-5" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>

        <div className="d-flex flex-row overflow-auto">
          {props.data.map((item, index) => {
            return (
              <div key={`mospicked-${index}`}>
                <Fade bottom delay={500 * index}>
                  <div
                    className="card card-featured mr-3"
                    style={{ width: 300, height: 270 }}
                  >
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="streched-link d-block text-white"
                        type="link"
                        href={"/properties/${item._id}"}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city},{item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
