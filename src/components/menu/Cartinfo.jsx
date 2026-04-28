import React, { useEffect, useRef } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../../redux/slices/cartSlice';


const Cartinfo = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  const scrollRef = useRef();

  // ✅ Auto scroll to last item
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [cartData.length]);

  return (
    <div className='px-4 py-2'>
      <h1 className='text-lg text-[#1a1a1a] font-semibold tracking-wide'>
        Order details
      </h1>

      {/* ✅ Single scroll container */}
      <div className='flex flex-col gap-4 mt-4 max-h-[400px] overflow-y-auto'>
        
        {cartData.length === 0 ? (
          <p className="text-[#888888] text-sm flex justify-center items-center h-[380px]">
            Your Cart is Empty
          </p>
        ) : (
          cartData.map((item, index) => {
            const isLast = index === cartData.length - 1;

            return (
              <div
                key={item.id}
                ref={isLast ? scrollRef : null}
                className={`bg-[#f0f0f0] rounded-lg px-4 py-4 mb-2 ${
                  isLast ? "border border-green-500" : ""
                }`}
              >
                <div className='flex items-center justify-between'>
                  <h1 className='text-[#1a1a1a]'>{item.name}</h1>
                  <p className='text-[#555555] font-semibold'>
                    x{item.quantity}
                  </p>
                </div>

                <div className='flex items-center justify-between mt-3'>
                  <div className='flex items-center gap-3'>
                    <RiDeleteBin2Fill
                      onClick={() => handleRemove(item.id)}
                      className='text-[#888888] cursor-pointer hover:text-red-500'
                      size={20}
                    />
                    <FaNotesMedical
                      className='text-[#888888] cursor-pointer hover:text-blue-500'
                      size={20}
                    />
                  </div>

                  <p className='text-[#1a1a1a] text-md font-bold'>
                    ₹ {item.totalprice}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cartinfo;