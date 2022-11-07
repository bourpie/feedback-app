import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')
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

    return (
        <Card>
            <form>
                <h2>How do you rate your service with us?</h2>
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