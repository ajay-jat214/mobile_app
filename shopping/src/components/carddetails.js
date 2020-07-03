import React from 'react';
//import Values from './values';

function CardDetails({id}){

		return(
           <div className="dib tl flex flex-row flex justify-between">
           <h1>Products</h1>
           <h1 className="mr6">Name of Products</h1>
           <h1 className="mr6">Quantity</h1>
           <h1 className="mr5">Remove</h1>
           <h1 className="pr0">Price</h1>
           </div>
			);

}

export default CardDetails;