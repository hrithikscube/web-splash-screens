import React from 'react'

const Input = ({ name, value, type, placeholder, handleChange }) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        className="p-4 w-full rounded-lg border border-[rgba(0, 0, 0, 0.4);] text-black outline-none placeholder:text-[rgba(0, 0, 0, 0.4);]"
      />
    </div>
  )
}

export default Input
