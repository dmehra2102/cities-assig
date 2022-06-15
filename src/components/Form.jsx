import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

function Form() {
      const [info, setInfo] = useState({
            country : "",
            name : "",
            population : ""
      });
      const handlechange = (e)=>{
            const {value,id} = e.target;
            setInfo({
                  ...info,
                  [id] : value
            });
      };
      const handlesubmit = (info)=>{
            const payload = {
                  name: info.name,
                  country : info.country,
                  population : info.population
            };
            axios.post("http://localhost:8080/country",payload);
            console.log(payload);
      }
      return (
            <div className="form-box">
                  <div>
                        <p>Fill Country Name :</p>
                        <input type="text" id="country" onChange={handlechange}/>
                  </div>
                  <div>
                        <p>Fill City Details :</p>
                        <input type="text" id="name" onChange={handlechange}/>
                        <input type="number" id="population" onChange={handlechange}/>
                  </div>
                  <button onClick={()=> handlesubmit(info)}>Submit</button>
            </div>
      );
}

export default Form;
