import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://67489b635801f51535919b47.mockapi.io/crud-app")
      .then((response) => {
        setData(response.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://67489b635801f51535919b47.mockapi.io/crud-app/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const setToLocalStorage = (id, name, email, phone, password) => {
      localStorage.setItem("id", id)
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("phone", phone)
      localStorage.setItem("password", password)
  };


  return (
    <div className="table-con">
      <Navbar/>
      <h1>Read</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <tbody>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.password}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email,
                          eachData.phone,
                          eachData.password
                        );
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(eachData.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
