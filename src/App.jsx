function App(){

    const title = 'blog post'
    const body = 'My content'
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]


    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            <h2>Comments</h2>
            <p>{`Number of comments: ${comments.length}`}</p>
            <ul>
                {comments && comments.map(
                    (comment, index) => <li key={index}>{comment.text}</li>
                )}
            </ul>
        </div>
    )
}

export default App