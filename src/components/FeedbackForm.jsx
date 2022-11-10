import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setmessage] = useState('')

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setmessage(null)
        } else if(text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true)
            setmessage("Text must be at least 10 characters")
        } else {
            setBtnDisabled(false)
            setmessage(null)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            addFeedback(newFeedback)

            setText('')
            setRating(0)
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How do you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review"
                        onChange={handleTextChange} 
                        value={text}
                         />
                    <Button isDisabled={btnDisabled} type="submit">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm