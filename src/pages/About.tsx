import { motion } from "framer-motion"

function About() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  >
    <section className="bg-white">

      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We are a technology-driven IT outsourcing company helping businesses
            build scalable and secure digital solutions.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            PixelCore is a trusted IT services provider specializing in
            software development, cloud solutions, and digital transformation.
            We partner with startups, enterprises, and global clients to deliver
            reliable and innovative technology solutions.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our team combines technical expertise with business understanding to
            build systems that scale and perform.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Team"
            className="rounded-lg shadow"
          />
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Deliver high-quality IT solutions that empower businesses to grow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              Become a globally trusted technology partner.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, innovation, and client success.
            </p>
          </div>

        </div>
      </div>

    </section>
    </motion.div>
  )
}

export default About
