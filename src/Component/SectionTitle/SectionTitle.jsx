import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='w-3/12 mx-auto text-center mb-5' >
            <p className='text-yellow-500'>--- {subheading}--- </p>
            <h2 className='text-4xl uppercase border-y-4 py-4 ' > {heading} </h2>
        </div>
    );
};

export default SectionTitle;