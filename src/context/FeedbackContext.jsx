import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {

    // Global state
    const [feedback, setFeedback] = useState(FeedbackData)
    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false
    })

    // Delete feedback function
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }   
    }

    // Add feedback function
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated function
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...updItem } : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext