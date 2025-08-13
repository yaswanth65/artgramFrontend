import React from "react";

const DiscountBar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-red-600 text-white py-2 px-3 z-[1031]">
      <p className="text-center text-sm sm:text-base md:text-lg font-medium leading-snug">
        🎉 Special Offer Alert! 🎉{" "}
        <span className="hidden sm:inline">
          Get 10% OFF on all activities – Use code:{" "}
          <strong>SUMMER20</strong> at checkout
        </span>
        <span className="sm:hidden">
          10% OFF this week! Code: <strong>SUMMER20</strong>
        </span>
      </p>
    </div>
  );
};

export default DiscountBar;
