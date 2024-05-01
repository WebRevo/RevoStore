import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/App.css";
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
        <div className="flex flex-col space-y-4 items-center justify-center bg-white py-12">
         <p className="text-gray-1000 text-4xl font-bold">Testimonials</p>
         </div>
          <div className="myCarousel">
            <h3>Emma B</h3>
            <h4>Designer</h4>
            <p>
            In my perspective, having a streamlined ecommerce platform devoid of intrusive advertisements allows for a more focused and enjoyable shopping experience, empowering users to make informed decisions without unnecessary distractions.
            </p>
          </div>
        </div>
        <div>
        <div className="flex flex-col space-y-4 items-center justify-center bg-white py-12">
         <p className="text-gray-1000 text-4xl font-bold">Testimonials</p>
         </div>
          <div className="myCarousel">
            <h3>Alexander G</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>
        <div>
        <div className="flex flex-col space-y-4 items-center justify-center bg-white py-12">
         <p className="text-gray-1000 text-4xl font-bold">Testimonials</p>
         </div>
          <div className="myCarousel">
            <h3>Isabella M</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}