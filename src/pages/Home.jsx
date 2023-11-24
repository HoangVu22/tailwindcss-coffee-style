import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="content-wrapper font-Karla max-w-screen-xl text-base mx-auto px-8 bg-slate-200">
      <Header />
      
      <div className="slider">
        Slider
      </div>

      <div className="story">
        Story
      </div>

      <div className="featured-mugs">
        Featured mugs
      </div>

      <div className="more-products">
        More products
      </div>

      <div className="coffee-magazine">
        Coffee magazine
      </div>

      <div className="lifestyle-stories">
        lifestyle stories
      </div>

      <div className="subscribe-us">
        Subscribe us
      </div>

      <Footer />
    </div>
  )
}

export default Home