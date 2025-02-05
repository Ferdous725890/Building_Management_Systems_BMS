import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import UseAuth from '../../../Hooks/UseManu/UseAuth';
import Swal from 'sweetalert2';

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [paymentHistory, setPaymentHistory] = useState([]);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payment/history/${user.email}`);
      return res.data;
    },
    onError: (error) => {
      Swal.fire({
        title: 'Error',
        text: error.message || 'Failed to fetch data.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    },
  });

  useEffect(() => {
    if (data) {
      setPaymentHistory(data);
    }
  }, [data]);

  // Fake data to display when no payment history is found
  const fakePaymentData = [
    {
      date: '2025-01-01',
      amount: '100',
      status: 'succeeded',
      transactionId: 'txn_4f2h8y4r9d2c9w'
    },
    {
      date: '2025-01-02',
      amount: '150',
      status: 'failed',
      transactionId: 'txn_5g3j9z1w8f6t0b'
    },
    {
      date: '2025-01-03',
      amount: '200',
      status: 'succeeded',
      transactionId: 'txn_6h4k8y5v0t7z1d'
    },
    {
      date: '2025-01-04',
      amount: '250',
      status: 'succeeded',
      transactionId: 'txn_7i6l9z2v3t8w0f'
    },
    {
      date: '2025-01-05',
      amount: '300',
      status: 'failed',
      transactionId: 'txn_8j7m1n3y4s9d2w'
    },
    {
      date: '2025-01-06',
      amount: '120',
      status: 'succeeded',
      transactionId: 'txn_9k8m7n5v0w6y3r'
    },
    {
      date: '2025-01-07',
      amount: '180',
      status: 'succeeded',
      transactionId: 'txn_1m7o3p5v4y2z0r'
    },
    {
      date: '2025-01-08',
      amount: '220',
      status: 'failed',
      transactionId: 'txn_2p6q8s0y3f1z4t'
    },
    {
      date: '2025-01-09',
      amount: '280',
      status: 'succeeded',
      transactionId: 'txn_3q9r5y1z7t6w8d'
    },
    {
      date: '2025-01-10',
      amount: '350',
      status: 'succeeded',
      transactionId: 'txn_4s2t7z3w0y9f1v'
    }
  ];
  

  const displayData = paymentHistory.length > 0 ? paymentHistory : fakePaymentData;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading text-green-500 loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      <Helmet>
        <title>Dashboard || Payment History</title>
      </Helmet>

      <h2 className="text-center text-2xl font-semibold mb-5">Payment History</h2>

      {displayData.length > 0 ? (
        <div className="overflow-x-auto bg-gray-800 p-5 rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Payment Date</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((payment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{new Date(payment.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">${payment.amount}</td>
                  <td className="px-4 py-2">
                    {payment.status === 'succeeded' ? (
                      <span className="text-green-500">Successful</span>
                    ) : (
                      <span className="text-red-500">Failed</span>
                    )}
                  </td>
                  <td className="px-4 py-2">{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-300">No payment history found.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
// import React, { useEffect, useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Helmet } from 'react-helmet';
// import useAxiosPublic from '../../../Hooks/useAxiosPublic';
// import UseAuth from '../../../Hooks/UseManu/UseAuth';
// import Swal from 'sweetalert2';

// const PaymentHistory = () => {
//   const { user } = UseAuth();
//   const axiosPublic = useAxiosPublic();
//   const [paymentHistory, setPaymentHistory] = useState([]);

//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: ['paymentHistory', user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/payment/history/${user.email}`);
//       return res.data;
//     },
//     onError: (error) => {
//       Swal.fire({
//         title: 'Error',
//         text: error.message || 'Failed to fetch data.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       setPaymentHistory(data);
//     }
//   }, [data]);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <span className="loading text-green-500 loading-bars loading-lg"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 text-white">
//       <Helmet>
//         <title>Dashboard || Payment History</title>
//       </Helmet>

//       <h2 className="text-center text-2xl font-semibold mb-5">Payment History</h2>

//       {paymentHistory.length > 0 ? (
//         <div className="overflow-x-auto bg-gray-800 p-5 rounded-lg shadow-lg">
//           <table className="min-w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">Payment Date</th>
//                 <th className="px-4 py-2 text-left">Amount</th>
//                 <th className="px-4 py-2 text-left">Status</th>
//                 <th className="px-4 py-2 text-left">Transaction ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paymentHistory.map((payment, index) => (
//                 <tr key={index}>
//                   <td className="px-4 py-2">{new Date(payment.date).toLocaleDateString()}</td>
//                   <td className="px-4 py-2">${payment.amount}</td>
//                   <td className="px-4 py-2">
//                     {payment.status === 'succeeded' ? (
//                       <span className="text-green-500">Successful</span>
//                     ) : (
//                       <span className="text-red-500">Failed</span>
//                     )}
//                   </td>
//                   <td className="px-4 py-2">{payment.transactionId}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-center text-gray-300">No payment history found.</p>
//       )}
//     </div>
//   );
// };

// export default PaymentHistory;
