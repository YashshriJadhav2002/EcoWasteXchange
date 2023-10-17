import React from "react";
import seller from "../../../Images/seller.jpg"
import "../../../Styles/Seller_Settings.css"
const Seller_Settings = () => {


    return (

        <div className="seller-container">
            <div className="seller-datas">
                    <div className="seller-data-image">
                        <img src={seller} alt="seller"></img>
                    </div>
                    <div className="seller-data-form">
                    <form >
                        <div className="seller-data">
                            <label>SellerName</label>
                            <input 
                                type="text"
                                name="Name"
                            />

                        </div>

                        <div className="seller-data">
                            <label>Phone no</label>
                            <input 
                                type="number"
                                name="Phone"
                            />

                        </div>

                        <div className="seller-data">
                            <label>Address</label>
                            <input 
                                type="text"
                                name="Address"
                            />

                        </div>

                        <div className="seller-data">
                            <label>Email</label>
                            <input 
                                type="email"
                                name="email"
                            />

                        </div>

                        <div className="seller-data">
                            <label>City</label>
                            <input 
                                type="text"
                                name="city"
                            />

                        </div>

                        <div className="seller-data">
                            <label>State</label>
                            <input 
                                type="text"
                                name="state"
                            />

                        </div>
                        
                        
                        
                        
                        

                    </form>
                    </div>
            </div>
        </div>
    )
}

export default Seller_Settings;