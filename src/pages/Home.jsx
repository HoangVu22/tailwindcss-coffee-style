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
              <div className="nhv-button bg-white text-gray-950 w-max rounded-md">
                Explore our products
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="story flex justify-center items-center">
        <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-72 py-32 text-center">
          <div className="text-3xl mb-6 leading-10 text-gray-900">Even the all-powerful Pointing has no control about the blind texts.</div>
          <div className="text-gray-500 mb-6 leading-7">It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
          <div className="">
            <a href="#" className='text-coffee-400 hover:text-coffee-600 relative after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-coffee-50 hover:after:bg-coffee-200 after:transition-all after:ease-in-out after:duration-300'>Read the full Story</a>
          </div>
        </div>
      </div>

      <div className="nhv-subheading">
        <div className="nhv-subheading-deco-line"></div>
        <div className="nhv-subheading-label">Featured mugs</div>
        <div className="nhv-subheading-deco-line"></div>
      </div>
      <div className="featured-mugs w-[95%] lg:w-[70%] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-10">
          <div className="nhv-product-cart">
            <div className="h-[400px] sm:h-[500px] bg-[url('./public/images/featured-mugs-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Featured-mugs">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="nhv-button absolute bg-white text-gray-950 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">Explore mug</div>
                </div>
              </a>
            </div>
            <div className="nhv-product-info text-center mt-8">
              <a href="" alt="Product-name">
                <div className="text-xl mb-2 font-medium hover:text-coffee-400">Pink Premium Ceramic</div>
              </a>
              <div>
                <span className='text-gray-400'>$99.00 USD</span>
              </div>
            </div>
          </div>
          <div className="nhv-product-cart">
            <div className="h-[400px] sm:h-[500px] bg-[url('./public/images/featured-mugs-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#" alt="Featured-mugs">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-300 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400 rounded-md">On Sale.</div>
                  <div className="nhv-button absolute bg-white text-gray-950 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">Explore mug</div>
                </div>
              </a>
            </div>
            <div className="text-center mt-8">
              <a href="" alt="Product-name">
                <div className="text-xl mb-2 font-medium hover:text-coffee-400">Golden Designers Mug</div>
              </a>
              <div>
                <span className="text-xl text-coffee-400 font-medium">$50.00</span>
                <span className='ml-2 text-gray-400 line-through'>$69.00 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nhv-subheading">
        <div className="nhv-subheading-deco-line"></div>
        <div className="nhv-subheading-label">More products</div>
        <div className="nhv-subheading-deco-line"></div>
      </div>
      <div className="more-products">
        More products
      </div>

      <div className="nhv-subheading">
        <div className="nhv-subheading-deco-line"></div>
        <div className="nhv-subheading-label">Coffee magazine</div>
        <div className="nhv-subheading-deco-line"></div>
      </div>
      <div className="coffee-magazine">
        Coffee magazine
      </div>

      <div className="nhv-subheading">
        <div className="nhv-subheading-deco-line"></div>
        <div className="nhv-subheading-label">Behind the mugs, lifestyle stories</div>
        <div className="nhv-subheading-deco-line"></div>
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