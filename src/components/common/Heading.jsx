import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium font-sans">
        {title}
      </h1>
    </div>
  )
}

export default Heading
