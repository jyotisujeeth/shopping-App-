import React, { useContext, useRef } from "react";
import classes from "./Form.module.css";
import CreateList from "../../Store/ListContext/Create-List";

const Form = () => {
  const ListCtx = useContext(CreateList);
  const candyRef = useRef();
  const desRef = useRef();
  const priceRef = useRef();
  const addCandyHandler = (e) => {
    e.preventDefault();

    const medicine = candyRef.current.value;
    const description = desRef.current.value;
    const price = priceRef.current.value;
    console.log(
      candyRef.current.value,
      desRef.current.value,
      priceRef.current.value
    );

    ListCtx.addItem({ medicine, description, price });
  };

  return (
    <form className={classes.form}>
      <label>Type of shoes</label>
      <select ref={candyRef}>
        <option>Asian men</option>
        <option>Action Men</option>
        <option>Zoom Shoes</option>
        <option>crocs</option>
      </select>

      <label placeholder="please select size">Size</label>
      <select ref={desRef}>
        <option>please select size</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
      </select>
      <label>Price</label>
      <input type="number" ref={priceRef} />
      <button onClick={addCandyHandler}>select</button>
    </form>
  );
};

export default Form;
