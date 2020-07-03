import React from 'react';

const Navigation1 = ({onRouteChange,isSignedIn}) => {

	    return(
		<nav style={{display:'flex' ,justifyContent:'flex-end'}}>
	    <p onClick={()=>onRouteChange('signin')} className='white f3 dim black underline pa3 pointer grow'>Sign In</p>
	    <p onClick={()=>onRouteChange('register')} className='white f3 dim black underline pa3 pointer grow'>Register</p>
	    </nav>
		);

	
}
export default Navigation1 ;