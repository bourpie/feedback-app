import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { FaSpinner } from 'react-icons/fa'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }

    return isLoading ? (
        <div className="center">
            <FaSpinner className='spinner' />
        </div>
        ) : (
        <div className="feedback-list">
            
            <AnimatePresence>
                {feedback.map(item => 
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exite={{opacity:0}}
                    >
                        <FeedbackItem 
                            key={item.id} 
                            item={item}  
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedback.map(item => 
    //             <FeedbackItem 
    //                 key={item.id} 
    //                 item={item} 
    //                 handleDelete={() => handleDelete(item.id)}  
    //             />
    //         )}
    //     </div>
    // )
}

export default FeedbackList