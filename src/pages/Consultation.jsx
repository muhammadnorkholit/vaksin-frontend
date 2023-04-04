
import React, { useState } from 'react'
import Navbar from '../components/navbar'

export default function Consultation() {
    const [Disease,setDisease] = useState(false)
    const [Symptoms,setSymptoms] = useState(false)
    
  return (
    <><Navbar/>
    <section className="container">
        <h1 className='display-4'>Request Consultation</h1>
        <div className="mb-3">
            <label htmlFor="">Do you have disease history</label>
        <select name="" onChange={(e)=>setDisease(!Disease)} className='form-control' id="">
            <option >No</option>
            <option >Yes i have</option>
        </select>
       {Disease && <textarea name="" className={`form-control mt-3`}  rows={'8'} placeholder='Describe your disease history' id=""></textarea>}
        </div>
        <div className="mb-3"><label htmlFor="">Do you have symptoms now</label>
        <select name="" onChange={(e)=>setSymptoms(!Symptoms)} className='form-control' id="">
            <option >No</option>
            <option >Yes i have</option>
        </select>
       {Symptoms && <textarea name="" className={`form-control mt-3`}  rows={'8'} placeholder='Describe your disease symtoms' id=""></textarea>}
       </div>
       <button className='btn btn-primary'>Send Request</button>
        </section></>

  )
}

       

