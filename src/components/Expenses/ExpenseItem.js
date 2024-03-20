import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //props is an argument which react method that holds object
  //outputting dynamic data and working with expressions

  // const expenseDate = new Date(2023, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 345.43;
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated");
  //let title = props.title;

  const clickHandler = () => {
    setTitle("updated!!");
    console.log(title);
  };
  // const ExpenseItem = (props) => {
  //   // function clickHandler() {}
  //   const [title, setTitle] = useState(props.title);
  //   console.log('ExpenseItem evaluated by React');
    
  //   const clickHandler = () => {
  //     setTitle('Updated!');
  //     console.log(title);
  //   };
//the above is arrow functon 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      {/* <div>{props.date.toISOString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      {/* click event function is very simple just need to create a function in react no need of .addevent listner. */}
    </Card>
  );
}

export default ExpenseItem;
//before it was div tag but now we changed to card component

{
  /* <div className="expense-item">
      <div>March 28th 2021</div>  
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div> */
} //before compenents we used to hard coded the values like this
