import React from "react";
import TestPlus from "../../assets/test_plus.svg";
import dayjs from "dayjs";
import { format } from "date-fns";

const ThankYouPage = ({
  customerName,
  customerAddress,
  appointmentDate,
  appointmentTime,
  total,
  selectedIndividualList,
  paymentStatus,
}) => {
  return (
    <div className="container mt-11 px-6">
      <div className="header_container flex justify-center items-center">
        <div className="flex flex-col -space-y-4 slide-in-left">
          <div className="cardiotrack">
            <p className="font-bold text-black">Cardiotrack</p>
          </div>
          <div className="flex justify-center space-x-1 care-medical-test">
            <div className="care">
              <p className="tracking-tighter text-black">Care</p>
            </div>
            <div className="flex items-center justify-center medical-test">
              <p className="px-4 tracking-tighter rounded-lg text-navyBlue bg-paleBlue">
                Medical Home Visit
              </p>
            </div>
          </div>
        </div>
        <div className="plus_container">
          <img src={TestPlus} alt="Test Plus" />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-darkBlue">Thank You!</h2>
        <p className="text-md text-darkBlue mt-2">
          Your appointment is confirmed.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-darkBlue">
            Appointment Details
          </h3>
          <p className="text-md text-darkBlue mt-2">
            <strong>Name:</strong> {customerName}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Address:</strong> {customerAddress.addressLine1},{" "}
            {customerAddress.city}, {customerAddress.state},{" "}
            {customerAddress.pincode}
          </p>
          {/* {customerAddress.addressLine2}, */}
          <p className="text-md text-darkBlue mt-2">
            <strong>Date:</strong>{" "}
            {appointmentDate ? format(appointmentDate, "dd-MM-yy") : ""}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Time:</strong>{" "}
            {appointmentTime
              ? dayjs(appointmentTime, "HH:mm").format("hh:mm A")
              : ""}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Total Amount:</strong> {total}
          </p>
          <p className="text-md text-darkBlue mt-2">
            <strong>Payment Status:</strong> {paymentStatus}
          </p>
        </div>
        {/* <div className="mt-6">
          <button
            className="px-4 py-2 bg-darkGray text-white rounded-lg"
            onClick={() => window.location.href = '/'} // Redirect to homepage or any other page
          >
            Go to Homepage
          </button>
        </div> */}
        <div className="container mt-5">
          <div className="flex justify-center text-2xl">
            <p className="text-darkBlue text-md font-bold">Your Tests</p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap py-4 px-2 rounded-md bg-blue-400 bg-opacity-20 space-y-2 md:space-y-0">
            {selectedIndividualList.map((test, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 text-sm font-semibold text-darkBlue md:py-2"
              >
                {test}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;