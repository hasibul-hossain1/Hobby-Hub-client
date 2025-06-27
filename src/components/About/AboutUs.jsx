import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 py-16 px-4 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-base-100 p-10 rounded-2xl shadow-md space-y-8">
        <h1 className="text-4xl font-bold text-primary text-center">About HobbyHub</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What is HobbyHub?</h2>
          <p className="text-base-content leading-relaxed">
            <strong>HobbyHub</strong> is a community-focused platform designed to help people discover and join
            local hobby-based groups — whether it's book clubs, hiking crews, painting circles, or any passion-driven activity. 
            Users can also create their own groups, making it easier than ever to build meaningful offline connections through shared interests.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-base-content leading-relaxed">
            We believe that hobbies can bring people together. Our mission is to promote social interaction, creativity,
            and mental well-being by making it easy to find and organize hobby groups in your local area.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-base-content">
            <li>Create and manage your own hobby groups</li>
            <li>Join local groups based on shared interests</li>
            <li>Authentication with Firebase and protected routes</li>
            <li>Live status of group availability based on dates</li>
            <li>Responsive, clean design with dark/light mode toggle</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <p className="text-base-content leading-relaxed">
            <span className="font-medium">Frontend:</span> React.js, React Router, Tailwind CSS, DaisyUI  
            <br />
            <span className="font-medium">Backend:</span> Node.js, Express.js, MongoDB  
            <br />
            <span className="font-medium">Authentication:</span> Firebase Auth  
            <br />
            <span className="font-medium">Other Tools:</span> SweetAlert2, React Icons, Lottie, React Awesome Reveal
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Meet the Developer</h2>
          <p className="text-base-content leading-relaxed">
            Hi, I’m <strong>Hasibul Hossain</strong>, the creator of HobbyHub — a React enthusiast and MERN stack developer passionate about building community-driven web apps. This project showcases my dedication to UI/UX, real-world problem solving, and performance optimization.
          </p>
        </section>

        <section className="text-center">
          <p className="text-base-content">🔗 Visit the <a href="https://github.com/ShantoD0" target="_blank" rel="noreferrer" className="text-primary hover:underline">GitHub</a> for more projects.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
