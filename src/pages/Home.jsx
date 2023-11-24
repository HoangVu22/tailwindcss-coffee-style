import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="content-wrapper font-Karla max-w-screen-xl text-base mx-auto px-8">
      <Header />
      
      <div className="slider h-[530px] bg-[url('./public/images/slider.jpg')] bg-cover bg-no-repeat bg-bottom">
        <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-30"> 
          <div className="mx-16 text-white text-center">
            <div className="uppercase mb-6 tracking-widest">Best place to buy coffee</div>
            <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
            <div className="font-medium text-lg mb-8">The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
            <div className="flex justify-center ">
              <div className="uppercase bg-white text-gray-950 w-max tracking-widest py-4 px-6 text-sm font-semibold rounded-md cursor-pointer hover:bg-opacity-95">
                Explore our products
              </div>
            </div>
          </div>
        </div>
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