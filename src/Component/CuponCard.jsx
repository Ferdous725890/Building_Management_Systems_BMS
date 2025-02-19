import React from 'react';
import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const CuponCard = ({ cupon }) => {
  const { cupons, cuponscode, discount, Discription, expiredate, status } = cupon;
  const [copid, setcopid] = useState()


  return (
    <div className="border bg-white/10 shadow-md rounded-lg p-6 w-full  ">
      {/* Coupon Title */}
      <h2 className="text-lg font-semibold text-gray-800">{cupons}</h2>

      {/* Coupon Code */}
      <p className="mt-2 text-sm">
        <span className="font-medium text-gray-600">Code-: </span>
        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{cuponscode}</span>
      </p>

 <div className="flex flex-col items-center justify-center  text-gray-800">
    

      <CopyToClipboard text={cuponscode} onCopy={() => setcopid(true)}>
        <div className=" bg-red-50 w-full text-center rounded-md mt-2 cursor-pointer hover:bg-blue-100">
          Copy Cupons Code 
        </div>
      </CopyToClipboard>

  
   
    </div>




      {/* Discount */}
      <p className="mt-2 text-sm text-green-600 font-bold">
        Discount: {discount}%
      </p>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm">{Discription}</p>

      {/* Expiry Date */}
      <p className="mt-2 text-gray-500 text-xs">
        <span className="font-medium">Expires on:</span> {expiredate}
      </p>

      {/* Status */}
      <p
        className={`mt-4 text-sm font-medium py-1 px-3 rounded ${
          status === "active"
            ? "text-green-700 bg-green-100"
            : "text-red-700 bg-red-100"
        }`}
      >
        {status === "active" ? "Active" : "Expired"}
      </p>
    </div>
  );
};

export default CuponCard;



