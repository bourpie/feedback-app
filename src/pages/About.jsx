import Card from '../components/shared/Card'
import Header from '../components/Header'

function AboutPage() {
  return (
    <>
    <Header />
    <div className="container">
        <Card>
          <h1>About</h1>
          <p><a href="/">back</a></p>
        </Card>
    </div>
    </>
  )
}

export default AboutPage