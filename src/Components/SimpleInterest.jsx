import { useState } from "react";

const SimpleInterest = () => {
  const [principle, setPrinciple] = useState(0);
  const [years, setYears] = useState(0);
  const [intrest, setInterset] = useState(0);
  const [result, setResult] = useState(0);

  const handleClick = () => {
    console.log(principle);
    console.log(intrest);

    const result =
      Number(principle) * (1 + Number(intrest / 100) * Number(years));
    console.log(result);
    const nav = 100 * (1 + 1);
    console.log(nav);

    setResult(result);
  };

  return (
    <>
      <h1>Simple Interest</h1>
      <label htmlFor="principle">Principle</label>
      <input
        type="number"
        id="principle"
        placeholder="Initial Amount"
        onChange={(e) => setPrinciple(e.target.value)}
      />{" "}
      <br />
      <label htmlFor="">Years</label>
      <input
        type="number"
        placeholder="Years"
        onChange={(e) => setYears(e.target.value)}
      />
      <br />
      <label htmlFor="">rate</label>
      <input
        type="number"
        placeholder="intrest"
        onChange={(e) => setInterset(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Calculate</button>
      <h1>{result > 0 ? result : null} </h1>
    </>
  );
};
export default SimpleInterest;
