import React from "react";
import { AuthorImageCard } from "../../../componentsUi";
import author from "../../../../public/assets/cagupta.jpeg";

export function Instructor({ title }: any) {
  return (
    <div
      className={`section-container`}
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title">{title}</h3>
      </div>
      <div className="card-holder">
        <AuthorImageCard
          title={"Charted Accountant"}
          image={author}
          description={
            "He has a vast experience of GST, Income Tax, Accounting and Finance. He is practicing since 15 years."
          }
          name={"CA. Ravi Shankar Gupta"}
          height={"17.5rem"}
          leaders
        />
      </div>
    </div>
  );
}
