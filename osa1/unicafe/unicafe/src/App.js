import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Results = ({ good, neutral, bad }) => (
  <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <Header text='give feedback'/> 
        <Button handleClick={increaseGood} text='good'/>
        <Button handleClick={increaseNeutral} text='neutral'/>
        <Button handleClick={increaseBad} text='bad'/>
      </div>
      <div>
        <Header text='statistics'/>
        <Results good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App