function Services() {
  const services = [
    {
      title: "Software Development",
      desc:
        "Custom web, enterprise, and cloud-native applications designed for performance and scalability.",
    },
    {
      title: "Cloud & DevOps",
      desc:
        "Cloud architecture, migration, CI/CD pipelines, and infrastructure automation using AWS and Azure.",
    },
    {
      title: "Data Engineering",
      desc:
        "Data pipelines, analytics platforms, and reporting solutions for data-driven decision making.",
    },
    {
      title: "AI & Machine Learning",
      desc:
        "Intelligent automation, predictive analytics, and AI-powered solutions.",
    },
    {
      title: "Mobile App Development",
      desc:
        "Native and cross-platform mobile apps with modern user experience.",
    },
    {
      title: "IT Consulting",
      desc:
        "Technology strategy, system architecture, and digital transformation consulting.",
    },
  ]

  return (
    <section className="bg-white">

      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services to help your business grow and innovate
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-8 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {service.title}
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services
