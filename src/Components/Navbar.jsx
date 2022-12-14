import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/Calc">Compound Interest</NavLink>
        <NavLink to="/Simple">Simple Interest</NavLink>
      </div>
    </>
  );
};
export default Navbar;
