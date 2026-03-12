
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-darkNavy py-20 px-6 md:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto rounded-full relative overflow-hidden border-4 border-cyan shadow-[0_0_50px_#00E5E8]">
            <img
              src="/My_Portfolio/images/wahab.png"
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
          <h3 className="text-2xl font-semibold mb-4">Full Stack Software Developer!</h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>

              I am a passionate Full Stack Developer with experience building end-to-end web applications using React, Next.js, Node.js, TypeScript, and MongoDB.

              I enjoy solving complex problems and turning ideas into scalable, user-friendly applications. My experience includes building dashboard systems, real-time applications using WebRTC and WebSockets, and integrating APIs and payment systems like Stripe.

              I focus on writing clean, maintainable code and continuously improving my skills to build efficient and impactful software solutions.            </p>
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
