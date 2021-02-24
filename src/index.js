import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  if(props.percent===true) {
    return (
      <tr>
        <td>{props.name}</td>
        <td>{props.value}%</td>
      </tr>
    )
  }
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  if(props.good+props.neutral+props.bad===0) {
    return (
      <p>No feedback given</p>
    )
  } else return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic name="good" value={props.good}/>
          <Statistic name="neutral" value={props.neutral}/>
          <Statistic name="bad" value={props.bad}/>
          <Statistic name="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
          <Statistic name="positive" value={props.good/(props.good+props.neutral+props.bad)*100} percent={true}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={function(){setGood(good+1)}}>good</button>
      <button onClick={function(){setNeutral(neutral+1)}}>neutral</button>
      <button onClick={function(){setBad(bad+1)}}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)