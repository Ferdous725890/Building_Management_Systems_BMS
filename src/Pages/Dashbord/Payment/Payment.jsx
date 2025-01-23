import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="p-10 text-white">
      payment
      <Link to={"/dashbord/paymentsuser"}>
        <button className="btn btn-primary">pay</button>
      </Link>
    </div>
  );
};

export default Payment;
