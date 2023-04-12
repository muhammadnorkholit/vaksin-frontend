import React from "react";

export default function ListGroup({
  countList,
  label,
  value,
  badge,
  headerLabel,
}) {
  let data = [];
  for (let i = 0; i < countList; i++) {
    data.push(
      <div
        key={i}
        className={`list-group-item ${i % 2 == 0 ? "bg-light" : ""}`}
      >
        <div className="row">
          <div className="col-6">
            <small className=" font-weight-bold">{label[i]}</small>
          </div>
          <div className="col-6">
            <small className={i == badge ? `badge badge-primary` : ""}>
              {[value[i]]}
            </small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="list-group">
      {headerLabel && (
        <div className="list-group-item list-group-item-light">
          {headerLabel}
        </div>
      )}
      {data}
    </article>
  );
}
