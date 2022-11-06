function App(){

    const title = 'blog post'
    const body = 'My content'
    const commentsData = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]

    const loading = false;

    const comments = (
        <>
        {commentsData && (
        <>
            <h2>Comments</h2>
            <p>{`Number of comments: ${commentsData.length}`}</p>
            
                <ul>
                    {commentsData.map(
                        (comment, index) => <li key={index}>{comment.text}</li>
                    )}
                </ul> 
            </>
            ) }
        </>
    )

    if(loading) return <h1>Loading ...</h1>

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            { commentsData && comments}
        </div>
    )
}

export default App