import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <Fade bottom>
      <section className="container pt-4 mb-5">
        <div className="row align-items-center d-block d-lg-none">
          <div className="col-auto order-2 order-lg-1 h-full">
            <h3 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h3>
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-12 col-lg-6 order-2 order-lg-1 h-full d-flex flex-wrap flex-column  ">
            <h1 className="font-weight-bold line-height-1 mb-3 d-none d-lg-block">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500  text-lg-left text-center col-lg-9 col-12 px-0"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5 mx-auto mx-lg-0 mr-lg-auto "
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5 d-flex justify-content-around">
              <div className="col-auto text-center">
                <img
                  width="36"
                  height="36"
                  src="/images/icon-traveler.svg"
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto text-center">
                <img
                  width="36"
                  height="36"
                  src="/images/icon-treasure.svg"
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto text-center mt-3 mt-lg-0">
                <img
                  width="36"
                  height="36"
                  src="/images/icon-cities.svg"
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1  d-flex justify-content-center order-lg-2 mb-lg-0 mb-4">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
