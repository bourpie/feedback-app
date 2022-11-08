import Card from '../components/shared/Card'
import { 
    Link, 
    NavLink, 
    useParams, 
    Navigate, 
    useNavigate,
    Routes,
    Route,
 } from 'react-router-dom'

function Post() {

    const params = useParams()
    const status = 200
    if (status === 404) {
        return <Navigate to="/notfound" />
    }

    const navigate = useNavigate()

    const clickHandler = (e) => {
        e.preventDefault();
        navigate('/about')
    }

    const Show = () => {
        return <h1>Show</h1>
    }

    return (
        <>
            <div className="container">
                <Card>
                <h1>Post {params.id && params.id}</h1>
                {params.name && (
                    <p>Name {params.name}</p>
                )}
                <p><Link to="/">back</Link></p>
                </Card>

                <button onClick={clickHandler}>Go to about</button>

                <Card>

                    <Routes>
                        <Route path='/show' element={<Show />}>Allo</Route>
                    </Routes>
                    <NavLink to='/' activeclassname='active'>Home</NavLink>
                    <NavLink to='/about' activeclassname='active'>About</NavLink>
                </Card>
            </div>
        </>
    )
}

export default Post