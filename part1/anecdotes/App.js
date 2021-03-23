import React, { useState } from 'react'

const Button = (props) => {
  return (
      <><button onClick={props.handleClick}>{props.text} </button> </>
  )
}
const Vote = (props) => {
  return (
      <><button onClick={props.increaseVote}>{props.text}</button> </>
  )
  }
const Top = (topanec) => {
  return (
    <>{topanec['topanec']}</>
  )
}
const points = [0,0,0,0,0,0]
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    const random = () => {return (Math.floor(Math.random() * anecdotes.length))}
    setSelected(random())
  }

  const increaseVote = () => {
    points[selected] += 1
    console.log(points)
  }

  const topanec = anecdotes[points.indexOf(Math.max(...points))]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p></p>
      <Button handleClick = {() => handleClick()} text = "next anecdote" />
      <Vote increaseVote = {() => increaseVote()} text = "vote"/>
      <h1>Anecdote with most votes</h1>
      <Top topanec = {topanec} />
    </div>
  )
}

export default App