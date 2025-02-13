import './App.css'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 animate-gradient-xy">
      <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-10 shadow-2xl shadow-purple-500/20 w-full max-w-md border border-white/10 hover:border-purple-500/30 transition-all duration-500">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-8 animate-pulse">
          Counter App
        </h1>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-center text-white mb-4 animate-bounce">Current Count: {count}</h2>
            <input 
              className="w-full bg-black/30 border-2 border-purple-500/30 rounded-xl p-4 text-center text-2xl text-white focus:ring-4 ring-purple-500/30"
              value={count}
              readOnly
            />
          </div>

          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <IncrementButton 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                onClick={() => setCount(count + 1)}
              />
              <button 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
                onClick={() => setCount(count + 2)}
              >
                Double Increment
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DecrementButton 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/30"
                onClick={() => setCount(count - 1)}
              />
              <button
                className="bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
                onClick={() => setCount(count - 2)}
              >
                Double Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
