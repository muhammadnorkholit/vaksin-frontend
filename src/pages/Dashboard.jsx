import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ListGroup from "../components/ListGroup";
import { Link } from "react-router-dom";
import data from "../data.json";
import { env } from "../environment";
import { dashboard } from "../controller/DashboardController";
export default function Dashboard() {
  const [Consultation, setConsultation] = useState();
  const [Vaccination, setVaccination] = useState();
  useEffect(() => {
    dashboard
      .getDataConsultation()
      .then((data) => setConsultation(data?.consultation));
    dashboard
      .getDataVaccines()
      .then((data) => setVaccination(data?.vaccinations));
  }, []);
  const { first, second, both } = data?.vaccinations;
  const consul = data?.consultation;
  return (
    <>
      <Navbar />
      <section className="container pt-4">
        <h1 className="display-4">Dashboard</h1>
        <h5 className="text-muted">My Consultation</h5>
        <div className="row">
          <article className="col-lg-4 col-md-6">
            {Consultation?.status == "accepted" ? (
              <ListGroup
                countList={5}
                badge={0}
                headerLabel={"Second Vaccination"}
                label={[
                  "Status",
                  "Diases History",
                  "Current Symtomps",
                  "Doctor Name",
                  "Doctor Notes",
                ]}
                value={[
                  Consultation?.status,
                  Consultation?.disease_history,
                  Consultation?.current_symtoms,
                  Consultation?.doctor?.name,
                  Consultation?.doctor_notes,
                ]}
              />
            ) : (
              <article className="list-group">
                <div className="list-group-item list-group-item-light">
                  Consultation
                </div>
                <div className="list-group-item">
                  <Link to={"/consultation"}>+ Request consultation</Link>
                </div>
              </article>
            )}
          </article>
        </div>
      </section>
      <section className="container">
        <h5 className="text-muted">My Vaccinations</h5>
        {Consultation?.status != "accepted" && (
          <div className="alert alert-warning">
            Your consultation must be approved by doctor to get the vaccine
          </div>
        )}
        <div className="row">
          {Consultation?.status == "accepted" && (
            <article className="col-lg-4 col-md-6">
              {Vaccination?.first ? (
                <ListGroup
                  countList={5}
                  badge={0}
                  headerLabel={"First Vaccination"}
                  label={["Status", "Date", "Spot", "Vaccine", "Vaccinator"]}
                  value={[
                    Vaccination?.first.status == "done"
                      ? "Vaccinated"
                      : "Pending",
                    Vaccination?.first?.date,
                    Vaccination?.first?.spot?.addres,
                    Vaccination?.first?.vaccine?.nama ??
                      "----------------------",
                    Vaccination?.first?.doctor?.name ??
                      "----------------------",
                  ]}
                />
              ) : (
                <article className="list-group">
                  <div className="list-group-item list-group-item-light">
                    First Vaccination
                  </div>
                  <div className="list-group-item">
                    <Link to={"/spots"}>+ Request vaccine</Link>
                  </div>
                </article>
              )}
            </article>
          )}
          {Vaccination?.first?.status == "done" &&
            Consultation?.status == "accepted" && (
              <article className="col-lg-4 col-md-6">
                {Vaccination?.second ? (
                  <ListGroup
                    countList={5}
                    badge={0}
                    headerLabel={"Second Vaccination"}
                    label={["Status", "Date", "Spot", "Vaccine", "Vaccinator"]}
                    value={[
                      Vaccination?.second.status == "done"
                        ? "Vaccinated"
                        : "Pending",
                      Vaccination?.second?.date,
                      Vaccination?.second?.spot?.addres,
                      Vaccination?.second?.vaccine?.nama ??
                        "----------------------",
                      Vaccination?.second?.doctor?.name ??
                        "----------------------",
                    ]}
                  />
                ) : (
                  <article className="list-group">
                    <div className="list-group-item list-group-item-light">
                      Second Vaccination
                    </div>
                    <div className="list-group-item">
                      <Link to={"/spots"}>+ Request vaccine</Link>
                    </div>
                  </article>
                )}
              </article>
            )}
          {Vaccination?.second?.status == "done" &&
            Consultation?.status == "accepted" && (
              <article className="col-lg-4 col-md-6">
                {both ? (
                  <ListGroup
                    countList={5}
                    badge={0}
                    headerLabel={"Both Vaccination"}
                    label={["Status", "Date", "Spot", "Vaccine", "Vaccinator"]}
                    value={[
                      Vaccination?.both.status == "done"
                        ? "Vaccinated"
                        : "Pending",
                      Vaccination?.both?.date,
                      Vaccination?.both?.spot?.addres,
                      Vaccination?.both?.vaccine?.nama ?? ".............",
                      Vaccination?.both?.doctor?.name ?? "...........",
                    ]}
                  />
                ) : (
                  <article className="list-group">
                    <div className="list-group-item list-group-item-light">
                      Both Vaccination
                    </div>
                    <div className="list-group-item">
                      <Link to={"/spots"}>+ Request vaccine</Link>
                    </div>
                  </article>
                )}
              </article>
            )}
        </div>
      </section>
    </>
  );
}
