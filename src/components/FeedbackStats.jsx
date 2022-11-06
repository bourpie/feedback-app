

function FeedbackStats({feedback}) {

    // Calculer la moyenne avec reduce
    let average = feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating
    }, 0) / feedback.length

    // Formater à une décimale: i.e. "8.5" et enlever les zéros
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

export default FeedbackStats