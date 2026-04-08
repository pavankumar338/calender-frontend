import Calendar from './Calendar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100 font-sans flex items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-6xl">
        <Calendar />
      </main>
    </div>
  )
}

export default App
