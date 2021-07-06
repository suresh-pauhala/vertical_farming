import React from 'react';

function Welcome(props)
{
    if(localStorage.getItem('login')!=="true"){
        props.history.push("/")
    }
    return(
        <div>Welcome</div>
    );
        
    
}
export default Welcome ;