import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Header = (props) => (
  <h1>{props.text}</h1>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return(
      <div>No feedback was given</div>
    )
  }
  return (
  <table>
    <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positive}/>
    </tbody>
  </table>
)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good*1 + neutral*0 + bad*-1)/all
  const positive = all === 0 ? 0 : (good/all) * 100 +"%"

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
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      </div>
    </div>
  )
}

export default App