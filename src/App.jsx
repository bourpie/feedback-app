import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/shared/Card'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import { NavLink } from 'react-router-dom'
import Post from './components/Post'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }   
    }

    return (
        <>
            <div className="container">
                        <FeedbackForm handleAdd={addFeedback} />    
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList 
                            feedback={feedback}
                            handleDelete={deleteFeedback}
                        />
                <Card>
                    <NavLink to='/' activeclassname='active'>Home</NavLink>
                    <NavLink to='/about' activeclassname='active'>About</NavLink>
                    <NavLink to='/post' activeclassname='active'>Post</NavLink>
                    <NavLink to='/post/200/Bob' activeclassname='active'>Post with params</NavLink>
                </Card>
                <AboutIconLink />
            </div>
            </>
    )
}

export default App