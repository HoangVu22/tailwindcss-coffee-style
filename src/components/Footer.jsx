function Footer() {
  return (
    <footer className="w-[95%] lg:w-[70%] mx-auto pb-24 text-gray-500 text-[15px]">
      <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
        <div className="basis-2/6">
          <div className="font-bold text-xl mb-4 text-gray-800">CoffeeStyle.</div>
          <div className="mb-4 md:mb-14 leading-7">Delivering the best coffee life since 2023. From coffee geeks to the real ones.</div>
          <div className="text-gray-400 hover:text-coffee-400">Nguyen Hoang Vu Inc. © 2023</div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-5 text-sm">Menu</div>
          <div className="flex flex-col gap-3">
            <div><a href="#" className="hover:text-coffee-400">Home</a></div>
            <div><a href="#" className="hover:text-coffee-400">Our Products</a></div>
            <div><a href="#" className="hover:text-coffee-400">About</a></div>
            <div><a href="#" className="hover:text-coffee-400">Contact</a></div>
            <div><a href="#" className="hover:text-coffee-400">Styleguide</a></div>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-5 text-sm">Follow Us</div>
          <div className="flex flex-col gap-3">
            <div><a href="https://www.facebook.com/nguyenhoangvu.22/" target="blank" className="hover:text-coffee-400">Facebook</a></div>
            <div><a href="https://www.instagram.com/_vunh.2206/" target="blank" className="hover:text-coffee-400">Instagram</a></div>
            <div><a href="#" className="hover:text-coffee-400">LinkedIn</a></div>
            <div><a href="#" className="hover:text-coffee-400">Pinterest</a></div>
          </div>
        </div>
        <div className="basis-2/6">
          <div className="uppercase font-semibold tracking-widest text-gray-600 mb-5 text-sm">Contact Us</div>
          <div className="mb-4">We’re Always Happy to Help</div>
          <div className="mb-16 text-gray-800 text-lg"><a href="mailto:hoangvu22062001@gmail.com" className="hover:text-coffee-400">hoangvu22062001@gmail.com</a></div>
          <div><a href="" className="text-gray-400 hover:text-coffee-400">Powered by Nguyen Hoang Vu</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer