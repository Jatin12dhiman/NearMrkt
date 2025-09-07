import React from "react"

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About NearMrkt</h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
        Welcome to <span className="font-bold text-red-600">NearMrkt</span> —
        your one-stop destination for shopping everything you need, from daily
        essentials to trending products, at the best prices.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* --- Mission Section --- */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make shopping simple, enjoyable, and accessible
            for everyone. We bring millions of products from trusted sellers and
            brands directly to your doorstep.
          </p>
        </div>

        {/* --- Vision Section --- */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to build a seamless online marketplace where customers can
            discover new products, sellers can grow their businesses, and
            shopping feels personal and fun.
          </p>
        </div>
      </div>

      {/* --- Team Section --- */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          NearMrkt is built with love by a passionate team of developers,
          designers, and dreamers. Together, we are on a journey to create the
          best shopping experience for you.
        </p>
      </div>
    </div>
  )
}

export default About
