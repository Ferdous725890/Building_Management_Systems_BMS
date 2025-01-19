import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='w-3/12 mx-auto text-center mb-5' >
            <p className='text-yellow-500'> {subheading}</p>
            <h2 className='text-4xl uppercase text-white' > {heading} </h2>
        </div>
    );
};

export default SectionTitle;