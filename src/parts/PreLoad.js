import React from "react";

export default function PreLoad() {
  return (
    <>
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="">
            <div
              className="spinner-grow"
              role="status"
              style={{ width: 100, height: 100 }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
