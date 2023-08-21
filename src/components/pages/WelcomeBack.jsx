import React from 'react'
import Heading from '../common/Heading'
import Input from '../common/Input'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const WelcomeBack = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-screen">
      <div className="flex flex-col w-full p-10 justify-center items-center">
        <div className="lg:w-[400px] md:w-[400px] w-full">
          <Heading title="Welcome Back" />

          <div className="flex flex-col w-full lg:mt-10 mt-5 gap-4">
            <Input name="email" placeholder="Email" type="text" />
            <Input name="password" placeholder="Password" type="password" />
            <Link to="/forgot-password">
              <p className="text-sm cursor-pointer hover:underline text-end">
                Forgot password?
              </p>
            </Link>

            <Button variant="contained">Log in</Button>
            <p className="text-sm grayShade">
              Don't have an account?
              <Link to="/">
                <span className="text-black hover:underline cursor-pointer">
                  {' '}
                  Sign up
                </span>
              </Link>
            </p>
          </div>

          <div className="flex flex-col w-full lg:mt-10 mt-5 gap-4">
            <Button variant="contained">
              <div className="flex flex-row items-center gap-2 justify-center">
                <img src="/apple.svg" alt="appleIcon" />
                <p>Log in with Apple</p>
              </div>
            </Button>

            <Button variant="outlined">
              <div className="flex flex-row items-center gap-2 justify-center">
                <img src="/google.svg" alt="googleIcon" />
                <p>Log in with Google</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex hidden flex-col justify-center items-center relative">
        <img
          src="bgTwo.png"
          alt="bgTwo"
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

export default WelcomeBack
