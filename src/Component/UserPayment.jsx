import React from 'react';
import UseAuth from '../Hooks/UseManu/UseAuth';

const UserPayment = () => {
    const  {user} = UseAuth()

    return (
        
        <div className='p-10 text-white'>
            {user.displayName}
        </div>
    );
};

export default UserPayment;