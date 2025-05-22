import React, { useEffect, useState } from 'react'
import SignUpForm from './components/SignUpForm'

function App() {
  const [showContent, setShowContent] = useState(false)

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
      ) : (
        <div className="animate-fade-in container mx-auto px-4 py-8">
          <SignUpForm />
        </div>
      )}
    </div>
  )
}

export default App