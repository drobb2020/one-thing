import { useState } from 'react'

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

import CustomForm from './components/CustomForm'
import OneThing from './components/OneThing'

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great Job!",
    "Don't you feel great!",
    "Up, up, and up!",
    "Um... okay",
    "Did you though?",
    "Don't feel like you tried your best...",
    "Way to go!",
    "Awesome!",
    "Super!",
    "One down, many more to go!",
    "Check your list of things, there's more to go!"
  ]
  return messages[Math.floor(Math.random() * messages.length)]
}

function App() {
  const [thing, setThing] = useState('')
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCompleted(false)
  }

  const handleInput = (e) => {
    setThing(e.target.value)
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true)
    setThing(getSuccessMessage())
    await jsConfetti.addConfetti({
      emojis: ['🖖', '😸', '🚀'],
    })
    e.target.removeAttribute('disabled')
    setThing("")
    setIsCompleted(true)
  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-400 dark:from-slate-600 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
        {!isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  )
}

export default App
