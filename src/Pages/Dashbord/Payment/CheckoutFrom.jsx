import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/UseManu/useAxiosSecure';
import useCats from '../../../Hooks/UseManu/useCats';

const CheckoutFrom = () => {
    const [error, seterror] = useState('')
    const [clientSecret, setclientSecret] = useState()
    const stripe =useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
   const cart = useCats()
   const totalprice =  cart.reduce((total, item) => total + item.price, 0);

useEffect(()=>{
    axiosSecure.post(`/created-payment-intent`, {price: totalprice })
    .then( res=>{
        console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret)
    })
},[])


const handelSubmite =async(event) =>{
    event.preventDefault()
    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)
    if(card==null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        console.log('payment error', error);
        seterror(error.message)
    }else{
        console.log('payment method ', paymentMethod);
        seterror('')
    }

}


    return (
       <div className='p-20'>
         <form onSubmit={handelSubmite}>
            <CardElement
               
            
            >
             
            </CardElement>
            <button className='btn btn-primary mt-5' type='submit' disabled={!stripe || !clientSecret}>
                pay
            </button>
            <p className='text-red-600'>
{
    error
}
            </p>

        </form>
       </div>
    );
};

export default CheckoutFrom;







/// 7 minutes 


