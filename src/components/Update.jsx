import axios from "axios";
import Navbar from "./Navbar";
import "./form.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://67489b635801f51535919b47.mockapi.io/crud-app/${id}`, {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then(() => {
        navigate("/read");
        localStorage.removeItem("id")
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("phone")
      localStorage.removeItem("password")
      });
  };

  return ( <><Navbar/>
    <div className="form">
        
      <h1>Update</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Phone No.</label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
    </>
  );
}
