import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderCard = () => {
  return (
    <div className="w-full md:w-[400px] p-2">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#eaeaea] text-sm">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="bg-[#d3a000] text-white font-bold w-10 h-10 flex items-center justify-center rounded-md">
              AM
            </div>

            <div>
              <h1 className="text-[#1a1a1a] font-semibold text-sm">
                Amrit Rai
              </h1>
              <p className="text-[#888888] text-xs">
                #101 / Dine in
              </p>
            </div>
          </div>

          {/* STATUS */}
          <div className="text-right">
            <p className="text-green-600 bg-[#d4edda] text-xs flex items-center justify-end gap-1 px-2 py-1 rounded-lg">
              <FaCheckDouble /> Ready
            </p>
            <p className="text-[#888888] text-xs flex items-center justify-end gap-1">
              <FaCircle className="text-green-500 text-[8px]" />
              Ready to serve
            </p>
          </div>
        </div>

        {/* DATE + ITEMS */}
        <div className="flex items-center justify-between mt-3 text-xs text-[#888888]">
          <p>January 18, 2025 08:32 PM</p>
          <p>8 Items</p>
        </div>

        {/* DIVIDER */}
        <hr className="my-3 border-[#eaeaea]" />

        {/* TOTAL */}
        <div className="flex items-center justify-between">
          <p className="text-[#555555] font-medium">Total</p>
          <p className="text-[#1a1a1a] font-semibold text-base">₹250.00</p>
        </div>

      </div>
    </div>
  );
};

export default OrderCard;