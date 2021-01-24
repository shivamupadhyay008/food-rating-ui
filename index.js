import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [rating1, setRating1] = useState("");
  const [rating2, setRating2] = useState("");
  const [rating3, setRating3] = useState("");
  function onClickHandler1() {
    setText1("Pani Puri");
    setText2("Poha");
    setText3("Samosa");
    setRating1("4.5/5");
    setRating2("3/5");
    setRating3("4/5");
  }
  function onClickHandler2() {
    setText1("Dim Sums");
    setText2("Hot and Sour Soup");
    setText3("Spring Rolls");
    setRating1("4.5/5");
    setRating2("4/5");
    setRating3("3/5");
  }
  function onClickHandler3() {
    setText1("Aloo gobi. Crisp golden potatoes and cauliflower.");
    setText2("Chana masala. Chickpea stew.");
    setText3("Palak paneer.");
    setRating1("5/5");
    setRating2("4.5/5");
    setRating3("4.7/5");
  }
  function onClickHandler4() {
    setText1("Za’atar ");
    setText2("Pita (Arab) bread");
    setText3("Dates");
    setRating1("3.9/5");
    setRating2("4.2/5");
    setRating3("4.6/5");
  }
  return (
    <div className="App">
      <h1>Food Rating App</h1>
      <div className="containerCenter">
        <div className="container">
          {" "}
          <span
            className="foodList"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler1}
          >
            Street
          </span>
          <span
            className="foodList"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler2}
          >
            Chinese
          </span>
          <span
            className="foodList"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler3}
          >
            Traditional Indian
          </span>
          <span
            className="foodList"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler4}
          >
            Arabic
          </span>
        </div>
        <div className="topping">
          <div className="menuItem">
            {text1}
            <span className="itemRating"> {rating1}</span>
          </div>
          <div className="menuItem">
            {text2}
            <span className="itemRating">{rating2}</span>
          </div>
          <div className="menuItem">
            {text3}
            <span className="itemRating"> {rating3}</span>
          </div>
        </div>
      </div>
      <h1 style={{ padding: "7rem" }}>everthing about food</h1>
    </div>
  );
}
