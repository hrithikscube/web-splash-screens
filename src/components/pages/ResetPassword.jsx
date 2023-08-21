import React from 'react'
import Heading from '../common/Heading'
import Input from '../common/Input'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-screen">
      <div className="flex flex-col w-full p-10 justify-start items-center">
        <div className="lg:w-[400px]">
          <Heading title="Password reset" />

          <div className="flex flex-col w-full lg:mt-10 mt-5 gap-4">
            <p className="text-sm grayShade">
              We sent the code to
              <span className="text-black hover:underline cursor-pointer">
                {' '}
                hrithik@scube.me
              </span>
            </p>
            <Input name="code" placeholder="Code" type="text" />

            <Link to="/login">
              <Button variant="contained">Reset password</Button>
            </Link>
            <p className="text-sm grayShade">
              Didn't receive the email?
              <span className="text-black hover:underline cursor-pointer">
                {' '}
                Click to resend
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center bg-gray-400 relative">
        <img
          src="bgFour.png"
          alt="bgFour"
          className="w-full h-screen object-cover"
        />
        <div className="absolute p-10 top-10 left-10 text-white">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium font-sans">
            {' '}
            We’re here to optimised <br /> your workflow
          </h1>
          <p className="text-lg mt-5 font-light">
            Your docs, projects, notes and reminders. Together.
          </p>
        </div>
        <div className="absolute p-10 bottom-10 left-10 text-white">
          <p className="text-lg font-light">
            Finally, all your work in one place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
