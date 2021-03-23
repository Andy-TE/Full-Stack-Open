import React, { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statsnew = ({type, value}) => {
    if (isNaN(value)){
        return (<><p>{type} 0</p></>)
    }
    return (
        <><td>{type}</td><td>{Math.floor(value*100)/100}</td></>
    )
}

const App = () => {
    const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const sum = (clicks) => { return (clicks.good + clicks.neutral + clicks.bad)}
    const average = (clicks) => {return ((clicks.good - clicks.bad) / sum(clicks))}
    const positive = (clicks) => {return (clicks.good /sum(clicks)*100)}

    const handleClick = (props) => {
        setClicks({...clicks, [props]: clicks.[props] + 1})
    }

    const Statsobj = () => {
        if (sum(clicks) ===0 ) {return (<><p>No feedback given</p></>)}
    return (
        <>
        <table>
            <colgroup>
            <col style={{background: 'yellow'}} span="2"/>
            </colgroup>
            <tbody>
            <tr><Statsnew type = "good" value = {clicks.good}/></tr>
            <tr><Statsnew type = "neutral" value = {clicks.neutral}/></tr>
            <tr><Statsnew type = "bad" value = {clicks.bad}/></tr>
            <tr><Statsnew type = "all" value = {sum(clicks)}/></tr>
            <tr><Statsnew type = "average" value = {average(clicks)}/></tr>
            <tr><Statsnew type = "positive" value = {positive(clicks)}/></tr>
            </tbody>
        </table>
        </>
        )
    }
  return (
    <div>
            <h1>give feedback</h1>
        <>
            <Button handleClick = {() => handleClick("good")} text = "good" />
            <Button handleClick = {() => handleClick("neutral")} text = "neutral" />
            <Button handleClick = {() => handleClick("bad")} text = "bad" />
        </>
        <h1>statistics</h1>
        <>
        <Statsobj/>
        </>

    </div>
  )
}

export default App