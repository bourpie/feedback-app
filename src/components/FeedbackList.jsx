import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
    
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
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
                    handleDelete={() => handleDelete(item.id)}  
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