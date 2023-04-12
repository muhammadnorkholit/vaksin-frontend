import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListGroup from "../components/ListGroup";
import { Link, useParams, useNavigate } from "react-router-dom";
import { spots } from "../controller/spotsController";
export default function SpotDetail() {
  const { id } = useParams();
  const redirect = useNavigate();
  const [Data, setData] = useState();
  const [DateVaccine, setDateVaccine] = useState(
    new Date().toISOString().substr(0, 10)
  );
  useEffect(() => {
    document.getElementById("date").valueAsDate = new Date();
    spots.getDataDetail(id, DateVaccine).then((data) => setData(data));
  }, [DateVaccine]);
  const html = [];
  const data_detail = Data;
  const capacity = data_detail?.spot?.capacity;
  const capacity_per_sesi = Math.ceil(capacity / 3);
  const vaccinations_count = data_detail?.spot?.vaccinations_count;
  const time = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00"];

  function ChildElement({ index }) {
    const htmlChild = [];
    for (let i = 1; i <= capacity_per_sesi; i++) {
      const number = i + capacity_per_sesi * index - capacity_per_sesi;
      if (number <= capacity) {
        htmlChild.push(
          <div key={i} className="col-4 mb-4">
            <span
              className={`card ${
                number <= vaccinations_count && "border-success"
              } ${number == vaccinations_count + 1 && "bg-primary text-white"}`}
            >
              <div className="card-body text-center">{number}</div>
            </span>
          </div>
        );
      }
    }
    return htmlChild;
  }

  for (let i = 1; i <= 3; i++) {
    html.push(
      <div key={i} className="col-md-4 col-sm-6">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between">
            <h5 className="m-0">Session {i}</h5>
            <p className="m-0">{time[i - 1]}</p>
          </div>
          <div className="card-body">
            <div className="row">
              <ChildElement index={i} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  const handleSubmit = () =>
    spots
      .sendData({ date: DateVaccine, spot_id: id })
      .then((result) => redirect("/dashboard"));
  return (
    <>
      <Navbar />
      <section className="container pt-4">
        <div className="d-flex justify-content-between mb-1 align-items-center">
          <h1 className="display-4  ">{data_detail?.spot?.name}</h1>
          <button onClick={handleSubmit} className="btn btn-primary">
            Send Request
          </button>
        </div>
        <h6 className="text-muted mb-5">{data_detail?.spot?.addres}</h6>
        <div className="col-lg-4 p-0 mb-4">
          <label htmlFor="">Select vaccination date</label>
          <input
            type="date"
            onChange={(e) => setDateVaccine(e.target.value)}
            className="form-control"
            name=""
            id="date"
            value={DateVaccine}
          />
        </div>
        <div className="row align-items-stretch">{html}</div>
      </section>
    </>
  );
}
