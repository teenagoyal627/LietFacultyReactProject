import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
const AllData = ({ props }) => {
  return (
    <div>
    <section className="main-card--cointainer">
      {props.map((data) => {
        return (
          <div key={data.id}>
            <div className="card-container" >
              <div className="card">
                <div className="card-body">
                  <img
                    src={data.image}
                    alt=""
                    style={{flexDirection:"column"}}
                    title="p-Dr.-Pratap-Singh-Patwal-removebg-preview"
                    width="281"
                    height="250"
                    className="card-media"
                  />
                  <h3 className="card-title">{data.name}</h3>
                  <h3 className="card-description subtle">
                       { data.position}
                    <br />
                   {data.degree}
                  </h3>
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
          
        );
      })}
      </section>
    </div>
  );
};

export default AllData;
