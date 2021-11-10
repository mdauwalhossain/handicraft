import React from 'react';

const Data = (props) => {
    const {name,image, details, price} = props.data;
    return (
        <div>
            <img src={image} alt="" />
            <h4> {price}</h4>
            {name}
           
            {details}
        </div>
    );
};

export default Data;