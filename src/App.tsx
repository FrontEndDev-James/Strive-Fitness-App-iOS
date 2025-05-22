import React, { useEffect, useState } from 'react'
import SignUpForm from './components/SignUpForm'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {!showContent ? (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">STRIVE</h1>
            <p className="text-xl text-white opacity-80">Your Journey to Fitness Starts Here</p>
          </div>
        </div>
      ) : showSignUp ? (
        <div className="animate-fade-in container mx-auto px-4 py-8">
          <SignUpForm onBack={() => setShowSignUp(false)} />
        </div>
      ) : (
        <div className="animate-fade-in h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">STRIVE</h1>
            <p className="text-xl text-white opacity-80 mb-8">Your Journey to Fitness Starts Here</p>
            <div className="space-y-4">
              <button
                onClick={() => setShowSignUp(true)}
                className="w-64 py-3 px-6 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition-all"
              >
                Sign Up
              </button>
              <div>
                <button
                  className="w-64 py-3 px-6 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App