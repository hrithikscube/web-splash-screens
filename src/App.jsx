import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateAccount from './components/pages/CreateAccount'
import ForgotPassword from './components/pages/ForgotPassword'
import ResetPassword from './components/pages/ResetPassword'
import WelcomeBack from './components/pages/WelcomeBack'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<WelcomeBack />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  )
}

export default App
