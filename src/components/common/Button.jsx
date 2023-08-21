import React, { Fragment } from 'react'

const Button = (props) => {
  return (
    <Fragment>
      {props.variant === 'contained' && (
        <button onClick={props.onClick} className="w-full flex flex-col justify-center items-center rounded-lg p-4 bg-black text-white text-base font-sans">
          {props.children}
        </button>
      )}

      {props.variant === 'outlined' && (
        <button className="flex w-full flex-col justify-center items-center rounded-lg p-4 bg-white text-black text-base border border-black">
          {props.children}
        </button>
      )}
    </Fragment>
  )
}

export default Button
