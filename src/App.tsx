import { useState } from 'react'
import { useMultistepForm } from './useMultistepForm'

function App() {
  const { step, steps, currentStepIndex, next, back, goto, isFirstStep, isFinishStep } = useMultistepForm([<div>One</div>, <div>Two</div>, <div>Three</div>])

  return (
    <div
      className="App"
      style={{
        border: '1px solid #333333',
        borderRadius: '0.5rem',
        maxWidth: 'max-content',
        padding: '2rem',
        margin: '1rem',
        position: 'relative'
      }}>
      <form>
        <div style={{
          position: 'absolute',
          top: ".5rem",
          right: ".5rem"
        }}>{currentStepIndex + 1} / {steps.length}</div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}>
          {!isFirstStep && (
            <button onClick={back}>Back</button>
          )}
          <button onClick={next}>{isFinishStep ? 'Finish' : 'Next'}</button>
        </div>

      </form>
    </div>
  )
}

export default App
