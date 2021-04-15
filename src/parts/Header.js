import React, { useState } from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  // if (props.name === "/properties/${item._id}") {
  //   return (
  //     <Fade>
  //       <header className="spacing-sm">
  //         <div className="container">
  //           <nav className="navbar navbar-expand-lg navbar-light">
  //             <BrandIcon props={props.isCentered} />
  //           </nav>
  //         </div>
  //       </header>
  //     </Fade>
  //   );
  // }
  const showNavbar = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <Fade>
      <header className="spacing-sm mb-md-5 mb-2 py-3">
        <div className=" relative container p-0 p-0">
          <nav className="navbar navbar-expand-lg d-flex justify-content-between">
            <BrandIcon />
            <Button
              className="nav-link bg-transparent nav-link border-0 d-flex d-md-none outline-none "
              type="button"
              onClick={showNavbar}
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9773 0H1.04219C0.466585 0 0 0.335773 0 0.75C0 1.16423 0.466668 1.5 1.04219 1.5H15.9773C16.5529 1.5 17.0195 1.16423 17.0195 0.75C17.0195 0.335713 16.5529 0 15.9773 0Z"
                  fill="black"
                />
                <path
                  d="M16.0815 6H2.91853C2.41122 6 2 6.33577 2 6.75C2 7.16423 2.41129 7.5 2.91853 7.5H16.0815C16.5888 7.5 17 7.16423 17 6.75C17 6.33571 16.5888 6 16.0815 6Z"
                  fill="black"
                />
                <path
                  d="M16.2039 12H4.79606C4.35639 12 4 12.3358 4 12.75C4 13.1642 4.35645 13.5 4.79606 13.5H16.2039C16.6436 13.5 17 13.1642 17 12.75C17 12.3357 16.6436 12 16.2039 12Z"
                  fill="black"
                />
              </svg>
            </Button>

            <div
              className={[
                "d-none d-md-block transitions ",
                show ? "d-none " : "d-block col-12 col-md-auto p-0",
              ].join("")}
            >
              <ul
                className={[
                  "navbar-nav bg-white  ",
                  show ? "" : "d-flex flex-column flex-md-row",
                ].join("")}
              >
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link " type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link " type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link " type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link " type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
