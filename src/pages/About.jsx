import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function AboutPage() {
  return (
    <>
    <div className="container">
        <Card>
          <h1>About</h1>
          <p><Link to="/">back</Link></p>
        </Card>

        <Card>
            <NavLink to='/' activeclassname='active'>Home</NavLink>
            <NavLink to='/about' activeclassname='active'>About</NavLink>
        </Card>
    </div>
    </>
  )
}

export default AboutPage