import { useState } from "react";
import axios from "axios"
import "./form.css"
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";
export default function Create() {

  const toPage= useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const[password, setPassword]= useState("")

    const handleSumbit= (e)=>{
        e.preventDefault()
        const url = 'https://67489b635801f51535919b47.mockapi.io/crud-app'
        const data = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }

        axios.post(url,data)

        .then((response)=>{
          toPage("/read")
          console.log(response.data)
        })
    }

  return ( <><Navbar/>
    <div className="form">
      
      <h1>Create</h1>
      <form onSubmit={handleSumbit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Phone No.</label>
          <input type="tel" className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSumbit}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
