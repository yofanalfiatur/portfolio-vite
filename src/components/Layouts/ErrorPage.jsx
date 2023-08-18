import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <section className="h-screen bg-secondary text-primary">
        <div className="m-14">
          <p>404</p>
        </div>
        <div>
          <a href="/#error" className="p-4 rounded-xl bg-white">
            Testt aja{" "}
          </a>
        </div>
      </section>
      <section className="h-screen bg-primary text-white" id="error">
        <div>
          <p>Page Not Found</p>
        </div>
      </section>
    </>
  );
};
