
import React from 'react';
// TODO: ADD PUBLISHABLE KEY
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
// import {Elements} from '@stripe/react-stripe-js';

const Payment = () => {
    const stripePromise =  loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);
    return (
        <div className='p-10'>
            <h2 className='text-3xl'>Payment</h2>
            <div>
            <Elements stripe={stripePromise}>
<CheckoutFrom></CheckoutFrom>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;