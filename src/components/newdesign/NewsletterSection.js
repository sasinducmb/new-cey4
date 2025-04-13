import React from 'react';


const NewsletterSection = () => {
    return (
        <div className="container text-center my-5  d-flex flex-column justify-content-center align-items-center">
            <h2 className="" style={{fontWeight:"bold"}}>OUR NEWEST PRODUCTS STRAIGHT TO YOUR INBOX.</h2>
            <p>Be the first to know about our products, limited-time offers, community events, and more.</p>
            <div className="input-group mb-3 w-50 mx-4 d-flex gap-4 ">
                <input 
                    type="email" 
                    className="form-control w-50" 
                    placeholder="Enter your email address" 
                    aria-label="Email address" 
                    aria-describedby="button-addon2" 
                />
                <div className="input-group-append mt-1">
                    <button 
                        className="btn btn-success" 
                        type="button" 
                        id="button-addon2"
                    >
                        Sign UP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;