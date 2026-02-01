function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Let’s discuss how we can help your business
        </p>

        {/* Two Column Layout */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">

          {/* LEFT: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text" 
                  placeholder="Full Name"
                  className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea placeholder="Your Message"
                  rows ={4}
                  className="w-full mt-2 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT: Map & Contact Info */}
          <div className="bg-white rounded-lg shadow overflow-hidden">

            {/* Google Map */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Mumbai%20India&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            ></iframe>

            {/* Contact Info */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>

              <div>
                <p className="font-medium">📍Address</p>
                <p className="text-gray-600">Mumbai, India</p>
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">📞 +91 96644 XXXX</p>
              </div>

              <div>
                <p className="font-medium">✉️ Email</p>
                <p className="text-gray-600">connect@pixelcore.com</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
