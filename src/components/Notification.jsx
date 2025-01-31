import React from "react";

const Notification = ({ type, message }) => {
  // Check if the message is an instance of Error and extract the message if it is
  const displayMessage = message instanceof Error ? message.message : message;

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } animate__animated animate__fadeIn animate__faster`}
    >
      <div className="flex items-center space-x-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          {type === "success" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
        <span className="font-semibold text-lg">{displayMessage}</span>
      </div>
    </div>
  );
};

export default Notification;
