import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Code2,
  Cloud,
  Database,
  Brain,
  Smartphone,
  Settings,
  Atom,
  Server,
  Boxes,
  CloudCog,
  Cpu,
  DatabaseZap
} from "lucide-react"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const technologies = [
  { name: "React", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: ".NET", icon: Boxes },
  { name: "AWS", icon: CloudCog },
  { name: "Azure", icon: Cpu },
  { name: "Databases", icon: DatabaseZap },
]

const services = [
  {
    title: "Software Development",
    desc: "Custom web & enterprise applications.",
    icon: Code2,
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, Azure & CI/CD pipelines.",
    icon: Cloud,
  },
  {
    title: "Data Engineering",
    desc: "Scalable data platforms & analytics.",
    icon: Database,
  },
  {
    title: "AI & Machine Learning",
    desc: "Intelligent automation solutions.",
    icon: Brain,
  },
  {
    title: "Mobile App Development",
    desc: "iOS & Android applications.",
    icon: Smartphone,
  },
  {
    title: "IT Consulting",
    desc: "Technology strategy & transformation.",
    icon: Settings,
  },
]

function Home() {
  return (
    <>
      

      {/* PAGE WRAPPER */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gradient-to-r from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

            {/* Hero Text */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Trusted IT Outsourcing <br />
                <span className="text-blue-600">
                  Partner for Your Business
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                We help businesses build scalable, secure and high-performance
                digital solutions using modern technologies.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
                alt="IT Solutions"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900"
            >
              Our Services
            </motion.h2>

            <motion.p
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"
            >
              End-to-end IT services tailored to your business needs
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
  {services.map((service, index) => {
    const Icon = service.icon
    return (
      <div
        key={index}
        className="
          group relative
          bg-white dark:bg-[#020617]
          border border-gray-200 dark:border-gray-800
          rounded-xl p-8
          transition-all duration-300
          hover:bg-[#020617]
          hover:border-[#020617]
          hover:shadow-xl
        "
      >
        {/* Icon */}
        <div className="
          w-12 h-12 flex items-center justify-center
          rounded-lg bg-blue-50 text-primary
          group-hover:bg-blue-600 group-hover:text-white
          transition
        ">
          <Icon size={24} />
        </div>

        {/* Title */}
        <h3 className="
          mt-6 text-xl font-semibold text-gray-900
          group-hover:text-white
        ">
          {service.title}
        </h3>

        {/* Description */}
        <p className="
          mt-4 text-textMuted
          group-hover:text-gray-300
        ">
          {service.desc}
        </p>
      </div>
    )
  })}
</div>


          </div>
        </section>

        {/* ================= TECHNOLOGIES SECTION ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <motion.h2
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900"
            >
              Technologies We Use
            </motion.h2>

            <motion.p
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mt-4"
            >
              Modern tools and platforms for high-performance solutions
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
  {technologies.map((tech, index) => {
    const Icon = tech.icon
    return (
      <div
        key={index}
        className="
          group flex flex-col items-center justify-center
          bg-white dark:bg-[#020617]
          border border-gray-200 dark:border-gray-800
          rounded-xl py-8
          transition-all duration-300
          hover:bg-[#020617]
          hover:shadow-lg
        "
      >
        <Icon
          size={28}
          className="
            text-primary
            group-hover:text-blue-400
            transition
          "
        />
        <span className="
          mt-4 font-medium text-gray-800
          group-hover:text-white
        ">
          {tech.name}
        </span>
      </div>
    )
  })}
</div>


          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              variants={fadeUp}
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900"
            >
              Why Choose Us
            </motion.h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experienced Team",
                  desc: "Skilled engineers with real-world project expertise.",
                },
                {
                  title: "Agile & Scalable",
                  desc: "Solutions that grow with your business.",
                },
                {
                  title: "Client-Centric",
                  desc: "Transparent communication and long-term partnerships.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 border rounded-lg text-center hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

      </motion.div>
    </>
  )
}

export default Home
