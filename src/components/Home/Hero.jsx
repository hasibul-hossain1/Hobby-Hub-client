import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Hero() {
  return (
    <div className="mt-20 text-center">
      <Carousel responsive={responsive} infinite={true}
      autoPlay={true}>
        {/* Slide 1 */}
        <div className="flex justify-center flex-col lg:flex-row">
          <img
            src="/assets/bike.png"
            className="object-cover object-center h-[50vh] lg:w-1/2 lg:h-[80vh]"
            alt=""
          />
          <div className="bg-base-300 p-10 gap-4 lg:w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold">“Find Your Ride. Find Your Tribe.”</h2>
            <p>Discover hobby groups near you — from biking to baking, there’s something for everyone.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex justify-center flex-col lg:flex-row">
          <img
            src="/assets/code.png"
            className="object-cover lg:w-1/2 object-center h-[50vh] lg:h-[80vh]"
            alt=""
          />
          <div className="bg-base-300 p-10 gap-4 lg:w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold">“Explore. Connect. Enjoy.”</h2>
            <p>Meet people who share your passions and build real-life connections.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex justify-center flex-col lg:flex-row">
          <img
            src="/assets/football.png"
            className="object-cover object-center h-[50vh] lg:w-1/2 lg:h-[80vh]"
            alt=""
          />
          <div className="bg-base-300 p-10 gap-4 lg:w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold">“Kickstart Your Passion.”</h2>
            <p>Join football lovers in your area — play casually, competitively, or just for fun.</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="flex justify-center flex-col lg:flex-row">
          <img
            src="/assets/hockey.png"
            className="lg:object-cover object-center h-[50vh] lg:w-1/2 lg:h-[80vh]"
            alt=""
          />
          <div className="bg-base-300 p-10 gap-4 lg:w-1/2 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold">“Your Local Hockey Hub Awaits.”</h2>
            <p>Find practice buddies, join games, and stay active.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
