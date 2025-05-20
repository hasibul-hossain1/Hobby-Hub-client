import { FaUserPlus, FaUsers, FaHandshake, FaHeart } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-primary" />,
      title: "Sign Up",
      desc: "Create your account in seconds and get started.",
    },
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: "Join Groups",
      desc: "Find hobby groups that match your passions.",
    },
    {
      icon: <FaHandshake className="text-4xl text-accent" />,
      title: "Meet Offline",
      desc: "Attend events and connect in real life.",
    },
    {
      icon: <FaHeart className="text-4xl text-success" />,
      title: "Share Your Hobby",
      desc: "Post updates and inspire others in the community.",
    },
  ];

  return (
    <section className="py-16 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-base-200 p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="mt-2 text-sm opacity-80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
