import React, { useState } from "react";
import de from '../assets/images/de.png';

const textStyle = {
  marginLeft: '250px',
  fontFamily: 'Ag, sans-serif',
};

export default function CheckOut() {
  // State variables
  const handlePlaceOrder = () => {
    console.log("Billing Details:", billingDetails);}
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <h6 style={{ marginLeft: '100px', marginBottom: '50px', fontFamily: 'Ag, sans-serif', }}>
        <span style={{ opacity: 0.4 }}>Account</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 0.4 }}>MyAccount</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 0.4 }}>Products</span>
        &nbsp; / &nbsp;
        <span style={{ opacity: 1.0 }}>Checkout</span>
      </h6>

      <div className="container-fluid mx-5 ">
        <h2 className="mx-0">Billing Details </h2>
        <div className="mx-2 row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="container">
              <label htmlFor="userName" style={{ marginTop: '50px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>First Name</label>
              <br />
              <input
                className="form-control"
                type="text"
                id="userName"
                name="firstName"
                value={billingDetails.firstName}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container-fluid">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Company Name</label>
              <br />
              <input
                className="form-control"
                type="text"
                id="userName"
                name="companyName"
                value={billingDetails.companyName}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container-fluid">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Street Address</label>
              <br />
              <input
                className="form-control"
                type="text"
                id="userName"
                name="streetAddress"
                value={billingDetails.streetAddress}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Apartment, floor, etc (optional)</label>
              <br />
              <input
                className="form-control"
                type="text"
                id="userName"
                name="apartment"
                value={billingDetails.apartment}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Town/City</label>
              <br />
              <input
                className="form-control"
                type="text"
                id="userName"
                name="townCity"
                value={billingDetails.townCity}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Phone Number</label>
              <br />
              <input
                className="form-control"
                type="number"
                id="userName"
                name="phoneNumber"
                value={billingDetails.phoneNumber}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <div className="container">
              <label htmlFor="userName" style={{ marginTop: '25px', fontFamily: 'Ag, sans-serif', opacity: 0.4, }}>Email Address</label>
              <br />
              <input
                className="form-control"
                type="email"
                id="userName"
                name="emailAddress"
                value={billingDetails.emailAddress}
                onChange={handleInputChange}
                style={{ background: '#F5F5F5', border: 'none' }}
              />
            </div>

            <label style={{ marginTop: '25px', marginBottom: '25px', fontWeight: '100' }}>
              <input
                type="checkbox"
                name="saveInfo"
                checked={billingDetails.saveInfo}
                onChange={handleInputChange}
                style={{ background: 'red', marginRight: '10px' }}
              />
              Save this information for faster checkout next time
            </label>
          </div>

          <div className="my-5 container-fluid col-lg-6 col-sm-12 col-md-6">
            <br />
            <img className="mx-4 img-fluid" src={de} alt="" />
            <div className="my-5 form-check">
              <input
                className="mx-2 form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="exampleRadio1">
                Cash on delivery
              </label>

              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      style={{ textAlign: 'left' }}
                      className='form-control'
                      type="text"
                      placeholder="Coupon code"
                    />
                  </div>

                  <div className="col-lg-6 col-sm-12 mb-3">
                    <button
                      style={{ width: '90%', height: '50px', borderRadius: '0px', fontSize: '18px' }}
                      className='gradient btn text-light'
                      type="submit"
                    >
                      Apply Coupon
                    </button>
                  </div>

                  <button
                    style={{ borderRadius: '0px', fontSize: '18px', width: '90%' }}
                    className='my-4 gradient btn btn-lg text-light'
                    type="submit"  onClick={handlePlaceOrder}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Your existing code */}
      </div>
    </>
  );
}
