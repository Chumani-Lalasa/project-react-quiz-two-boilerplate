import { useState } from 'react'
import './App.css'
import Quiz from './Components/QuizComponent/Quiz'
import quizQuestion from'./resources/quizQuestion.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quiz data={quizQuestion}/>
    </>
  )
}

export default App
