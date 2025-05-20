import { FaQuoteLeft } from "react-icons/fa";

const initialReviews = [
  {
    name: "Amina Rahman",
    hobby: "Cycling Enthusiast",
    text: "HobbyHub connected me with amazing people who love cycling as much as I do. Weekend rides have never been this fun!",
  },
  {
    name: "Tanvir Alam",
    hobby: "Gaming & Tech",
    text: "I joined a gaming group through HobbyHub and found real friends. It's more than just a hobby app — it's a community!",
  },
  {
    name: "Shamima Nahar",
    hobby: "Photography",
    text: "From photo walks to workshops, HobbyHub made it easy to find others passionate about photography in my area.",
  },
];

export default function Reviews() {


  return (
    <section className="py-16 my-32 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {initialReviews.map((review, index) => (
            <div
              key={index}
              className="bg-base-100 p-6 rounded-xl shadow-md flex flex-col items-start"
            >
              <FaQuoteLeft className="text-primary text-2xl mb-4" />
              <p className="text-sm mb-4 opacity-80">“{review.text}”</p>
              <div className="mt-auto">
                <h4 className="font-semibold">{review.name}</h4>
                <span className="text-xs text-primary">{review.hobby}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <form
          
          className="bg-base-100 p-6 rounded-xl shadow-md space-y-4 max-w-3xl mx-auto mb-8"
        >
          <h3 className="text-xl font-semibold mb-2">Leave Your Review</h3>
          <textarea
            placeholder="Your Review"
            className="textarea textarea-bordered w-full"
            rows={3}
            
         
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Submit Review
          </button>
        </form>

        {/* Show All Reviews Button */}
        <div className="text-center">
          <button className="btn btn-outline btn-secondary">
            Show All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
