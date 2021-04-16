import React from "react";

import { withRouter } from "react-router-dom";

import Button from "elements/Button";

function NotFound(props) {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-6">
          <p className="pt-4">
            {props.title
              ? props.title
              : "Some page are still in development, maybe you can go back if youwant "}
          </p>
          <div>
            <Button className="btn mt-5" type="link" href="/" isLight>
              {props.titleButton
                ? props.titleButton
                : "  Yes, bring me to safe place please"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
