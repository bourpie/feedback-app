import { useState } from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState("Feedback iem")
    const handleClick = () => {

        // Set with function in order to 
        // access previous state
        setRating((previousState) => {
            return previousState + 1
        })
        // or just set state directly
        setText("New text")
    }
    
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">
           {text}
        </div>
        <button onClick={handleClick}>Set state</button>
    </div>
  )
}

export default FeedbackItem