import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutFrom = () => {
    const [error, seterror] = useState('')
    const stripe =useStripe()
    const elements = useElements()
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
            <button className='btn btn-primary mt-5' type='submit' disabled={!stripe}>
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


