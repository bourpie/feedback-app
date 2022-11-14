import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {

    // Global state
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {

        fetchFeedback()
        

    }, [])

    //fetch data
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    // Delete feedback function
    const deleteFeedback = (id) => {
        
        if(window.confirm('Are you sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }   
    }

    // Add feedback function
    const addFeedback = (newFeedback) => {
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
            isLoading,
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