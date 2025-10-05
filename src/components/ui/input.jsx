"use client";

import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  className = "",
  textarea = false,
  rows = 4,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="font-medium text-sm text-black">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`p-3 outline-none rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-all resize-none ${className}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`h-12 px-3 outline-none rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-all ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
