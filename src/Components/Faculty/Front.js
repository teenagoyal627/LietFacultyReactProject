import React, { useState } from "react";
import "./Style.css";
import Data from "./DataApi";
import AllData from "./AllData";

const uniqueList=[new Set(Data.map((data)=>{
   return data.category;

}))]
console.log(uniqueList)
const Front = () => {
  const [intialData, setData] = useState(Data);
  // console.log(intialData);

  const filterHandler = (category) => {
    const updatedList = Data.filter((data) => {
      return data.category === category;
    })
    setData(updatedList);
  }
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filterHandler("administration")}>Administrator</button>
          <button className="btn-group__item" onClick={() => filterHandler("cse")}>CSE</button>
          <button className="btn-group__item" onClick={() => filterHandler("EE")}>EE</button>
          <button className="btn-group__item" onClick={() => filterHandler("ME")}>ME</button>
          <button className="btn-group__item" onClick={() => filterHandler("Civil")}>Civil</button>
          <button className="btn-group__item" onClick={()=>setData(Data)} >All Faculty</button>


        </div>
      </nav>
      <AllData props={intialData} />
      {/* send the data from intialData to props .send the data from parent Data file to the front.js file means children */}
    </>
  );
};

export default Front;
