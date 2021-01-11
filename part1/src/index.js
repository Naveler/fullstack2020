import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
  return(
    <div>
      <h1>
        Header {props.course}
      </h1>
    </div>
  )
}

const Content = () => {
  <div>
      <p>
        Content {props.Content}
      </p>
    </div>
}

const Total = () => {
  <div>
      <p>
        Total {props.Total}
      </p>
    </div>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const App = () => {
    // const-definitions
  
    return (
      <div>
        <Header course={course} />
        <Content  />
        <Total  />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))


