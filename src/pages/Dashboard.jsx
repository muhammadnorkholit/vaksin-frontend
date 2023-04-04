import React from 'react'
import Navbar from '../components/navbar'
import ListGroup from '../components/ListGroup'

export default function Dashboard() {
  return (
    <><Navbar/>
    <section className="container pt-4">
        <h1 className='display-4'>Dashboard</h1>
        <h5 className='text-muted'>My Consultation</h5>
       <div className="row">
        <article className="col-lg-4 col-md-6">
             <div className="list-group">
            <div className="list-group-item list-group-item-light">Consultation</div>
            <div className="list-group-item "><a href="">+ Request consultation</a></div>
        </div>
        </article>
        <article className="col-lg-4 col-md-6">
         <ListGroup countList={5} badge={0} headerLabel={'Consultation'} label={['Status','Diases History','Current Symtomps','Doctor Name','Doctor Notes']} value={['Accepted','Diabetes','Flu','Dr Ratna Pradipta ','oke']}/>
        </article>
       </div>
        </section>
        <section className='container'>
             <h5 className='text-muted'>My Vaccinations</h5>
             <div className="alert alert-warning">Your consultation must be approved by doctor to get the vaccine</div>
       <div className="row">
        <div className="col-lg-4 col-md-6">
             <article className="list-group">
            <div className="list-group-item list-group-item-light">First Vaccination</div>
            <div className="list-group-item"><a href="">+ Request consultation</a></div>
            </article>   
        </div>
        <article className="col-lg-4 col-md-6">
            <ListGroup countList={5} badge={0} headerLabel={'First Vaccination'} label={['Status','Date','Spot','Vaccine','Vaccinator']} value={['Vaccinated','October 27,2021','Usamah Hospital','Sinovac ','Dr Raina Pradipta']}/>
        </article>
   
       </div>
        </section>
        </>
  )
}
