import { useState } from "react";

export const ChoiceDropDown = ()=>{
 const [TimeChange , setTimeChange] = useState([
  '1 Day' ,
  '1 week' , 
  '1 month' , 
  'All'
 ])
 return(
  <div className="ChoiceDropDown" >
    {
     TimeChange.map( elem => (
      <div className="TimeChange" >
        {elem}
      </div>
     ))
    }
  </div>
 );
}