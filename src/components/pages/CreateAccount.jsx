import React from 'react'
import Heading from '../common/Heading'
import Input from '../common/Input'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-screen">
      <div className="flex flex-col w-full p-10 justify-center items-center">
        <div className="lg:w-[400px]">
          <Heading title="Create Account" />

          <div className="flex flex-col w-full lg:mt-10 mt-5 gap-4">
            <p className="text-sm">Let’s get started with your 30 days trial</p>
            <Input name="name" placeholder="Name" type="text" />
            <Input name="email" placeholder="Email" type="text" />
            <Input name="password" placeholder="Password" type="password" />

            <Link to="/login">
              <Button variant="contained">Create account</Button>
            </Link>
            <p className="text-sm grayShade">
              Already have an account?
              <Link to="/login">
                <span className="text-black hover:underline cursor-pointer">
                  {' '}
                  Log in
                </span>
              </Link>
            </p>
          </div>

          <div className="flex flex-col w-full lg:mt-10 mt-5 gap-4">
            <Button variant="contained">
              <div className="flex flex-row items-center gap-2 justify-center">
                <img src="/apple.svg" alt="appleIcon" />
                <p>Sign up with Apple</p>
              </div>
            </Button>

            <Button variant="outlined">
              <div className="flex flex-row items-center gap-2 justify-center">
                <img src="/google.svg" alt="googleIcon" />
                <p>Sign up with Google</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center relative">
        <img
          src="bgOne.png"
          alt="bgOne"
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

export default CreateAccount
