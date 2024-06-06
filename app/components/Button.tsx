import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`text-base md:text-lg font-medium px-5 py-3 md:px-10 md:py-4 md:w-[213px] border-[0.5px] rounded grow md:grow-0 shadow focus:outline-none focus:ring-4 focus:ring-offset-7 focus:ring-indigo-100 focus:rounded-sm disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-[#A3A3A3] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
