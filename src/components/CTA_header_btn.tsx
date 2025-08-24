"use client";

import React, { use, useState } from 'react';
import { motion } from 'framer-motion';
import { on } from 'events';

interface AnimatedCTAButtonProps {
  onLeftBtnClick: () => void;
  onRightBtnClick?: () => void;
}


export const AnimatedCTAButton: React.FC<AnimatedCTAButtonProps> = ({ onLeftBtnClick, onRightBtnClick }) => {
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex justify-center items-center w-[221px] h-[41px]">
      <div className="relative w-full max-w-lg h-full">
        {/* Left Button */}
        <motion.button
          className="absolute h-full rounded-l-lg overflow-hidden flex items-center border-2 border-primary cursor-pointer"
          style={{
            originX: 1,
            zIndex: hoveredButton === 'left' ? 0 : 5
          }}
          animate={{
            width: hoveredButton === 'right' ? "10%" : "35%",
            left: hoveredButton === 'right' ? "35%" : "0%",
            borderTopRightRadius: hoveredButton === 'right' ? "8px" : "0px",
            borderBottomRightRadius: hoveredButton === 'right' ? "8px" : "0px"
          }}
          initial={{ width: "50%", left: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredButton('left')}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => {
            onLeftBtnClick();
            window.location.href = "tel:+1(808)219-5749";
          }}
        >
          <div className="flex items-center justify-between w-full">
            <motion.div className='overflow-hidden text-nowrap text-normal2 font-bold text-grey mx-auto'
              animate={{
                width: hoveredButton === 'right' ? "0%" : "100%",
                borderTopLeftRadius: hoveredButton === 'left' ? "8px" : "0px",
                borderBottomLeftRadius: hoveredButton === 'left' ? "8px" : "0px",
              }}
              initial={{ width: "100%", right: "0%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Call us
            </motion.div>
          </div>
        </motion.button>

        {/* Right Button */}
        <motion.button
          className="absolute h-full rounded-r-lg overflow-hidden flex flex-row items-center bg-primary cursor-pointer pr-2 pl-2"
          style={{
            originX: 0,
            zIndex: hoveredButton === 'right' ? 10 : 5
          }}
          animate={{
            width: hoveredButton === 'left' ? "18%" : "65%",
            right: hoveredButton === 'left' ? "50%" : "0%",
            borderTopLeftRadius: hoveredButton === 'right' ? "8px" : "0px",
            borderBottomLeftRadius: hoveredButton === 'right' ? "8px" : "0px"
          }}
          initial={{ width: "50%", right: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setHoveredButton('right')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <div className="flex flex-row items-center w-full">
            <motion.a
              href="https://www.clover.com/online-ordering/sun-tea-mix-honolulu"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden text-nowrap text-normal2 font-bold text-white flex-1 text-left pl-0 pr-2 py-2 rounded-lg"
              animate={{
                width: hoveredButton === 'left' ? "0%" : "50%",
                borderTopLeftRadius: hoveredButton === 'right' ? "8px" : "0px",
                borderBottomLeftRadius: hoveredButton === 'right' ? "8px" : "0px",
                opacity: hoveredButton === 'left' ? 0 : 1,
              }}
              initial={{ width: "50%", right: "0%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={onRightBtnClick}
              style={{ zIndex: hoveredButton === 'right' ? 10 : 5 }}
            >
              Order Now
            </motion.a>
            <motion.div
              className="flex justify-end items-center z-0"
              animate={{
                marginLeft: hoveredButton === 'left' ? -12 : 20,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="w-[31px] h-[31px] bg-black/25 rounded-[7px] flex items-center justify-center ml-0 z-0">
                <svg className="w-6 h-6 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

