import React from "react";

const Seller_Logout = () => {

    
   
    function Logout() {

        window.alert(
            "Logged out"
        )
        localStorage.clear()
        window.location.href = '/Login';

    }
    return (
     
        <>
       {Logout()}
        </>

    );
};

export default Seller_Logout;