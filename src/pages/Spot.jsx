import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListGroup from "../components/ListGroup";
import { Link } from "react-router-dom";
import { spots } from "../controller/spotsController";
export default function Spot() {
  const [datas, setDatas] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    spots
      .getData()
      .then((data) => setDatas(data.spots))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className="container pt-4">
        <h1 className="display-4 mb-3">First Vaccination</h1>
        <h6 className="text-muted mb-3">
          List Vaccination Spots In Central Jakarta
        </h6>
        <div>
          {datas?.map((dat, i) => {
            return (
              <Link
                className={`text-decoration-none text-dark  
                // ${data?.vaccinations_count == dat?.capacity && "disabled"}
                // `}
                key={i}
                to={"/spots/" + dat.id}
              >
                <article className={`${i % 2 == 0 ? "bg-light" : ""} p-3`}>
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="text-primary">{dat.name}</h5>
                      <p>{dat.addres}</p>
                    </div>
                    <div className="col-md-4">
                      <h6 className="">Available Vaccines</h6>
                      <p>
                        {dat?.available_vaccines.map(
                          (d, i) =>
                            d.nama +
                            (i + 1 < dat?.available_vaccines.length
                              ? " ,"
                              : ".")
                        )}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6 className="">Serve</h6>
                      <p>{dat?.serve == 1 && "first vaccine "}</p>
                      <p>{dat?.serve == 2 && "second vaccine "}</p>
                      <p>{dat?.serve == 3 && "both vaccine "}</p>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
