import { useState } from "react";
import "./Calc.css";
const Calc = () => {
  const [principle, setPrinciple] = useState();
  const [years, setYears] = useState();
  const [intrest, setInterset] = useState();
  const [tenure, setTenure] = useState("Yearly");
  const [result, setResult] = useState();
  // const [result, setResult] = useState();

  const handleClick = () => {
    console.log(tenure);
    if (tenure === "Yearly") {
      const result =
        principle * Math.pow(1 + Number(intrest / 100), Number(years));
      setResult(result.toFixed(2));
    } else if (tenure === "Monthly") {
      console.log(result);
      const result1 =
        principle *
        Math.pow(1 + Number(intrest / 100) / 12, Number(years) * 12);
      setResult(result1.toFixed(2));
    } else if (tenure === "Daily") {
      console.log(result);
      const result1 =
        principle *
        Math.pow(1 + Number(intrest / 100) / 365, Number(years) * 365);
      setResult(result1.toFixed(2));
    }
  };

  const handle = (e) => {
    const val = e.target.value;
    // val < 0 ? alert("input should be interger") : setInterset(val);
    if (val < 0) {
      alert("input should be interger");
      setInterset(0);
    } else {
      setInterset(val);
    }
  };
  return (
    <>
      <h1>Compund Interest</h1>
      <label htmlFor="principle">Principle</label>
      <input
        type="number"
        id="principle"
        placeholder="Initial Amount"
        onChange={(e) => setPrinciple(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="years">Years</label>
      <input
        type="number"
        id="years"
        placeholder="Years"
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        onChange={(e) =>
          // e.target.value >= 0 ? setYears(e.target.value) : setYears(0)
          setYears(e.target.value)
        }
        // value={years}
        maxLength={2}
      />
      <br />
      <label htmlFor="rate">Rate</label>
      <input
        type="number"
        id="rate"
        placeholder="interest"
        onChange={handle}
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        // value={intrest}
        maxLength={4}
        // min="0"
      />
      <br />
      <select onChange={(e) => setTenure(e.target.value)}>
        <option name="Yearly">Yearly</option>
        <option name="Monthly">Monthly</option>
        <option name="Daily">Daily</option>
      </select>
      <button onClick={handleClick}>Calculate</button>
      <h1>{result > 0 ? result : null} </h1>
    </>
  );
};
export default Calc;
