
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-darkNavy py-20 px-6 md:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-full relative overflow-hidden border-4 border-cyan shadow-[0_0_50px_#00E5E8]">
            <img
              src="/lovable-uploads/8df617dc-7d16-4901-a5eb-30b5ff0fdbfd.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-white">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan">Me</span>
          </h2>
          <h3 className="text-2xl font-semibold mb-4">Full Stack Developer!</h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              I'm a passionate and detail-oriented Full Stack Developer with hands-on experience in building scalable web applications using the MERN stack — MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              I enjoy turning complex problems into elegant, user-friendly solutions. My expertise spans both frontend and backend development, including responsive UI design with Bootstrap, state management in React, API integration, and database handling with MongoDB.
            </p>
            <p>
              I'm proficient with version control using Git and GitHub, and I follow modern development workflows including component-based architecture, RESTful APIs, and clean code practices.
            </p>
            <p>
              Always eager to learn and grow, I aim to contribute to teams where I can solve real-world problems, deliver value, and keep evolving as a developer.
            </p>
            <p>
              Whether it's creating dynamic user interfaces or designing robust backend services, I'm ready to take on exciting challenges and deliver polished, production-ready solutions.
            </p>
          </div>
          
          <button className="bg-cyan hover:bg-cyan/90 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
            More About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
