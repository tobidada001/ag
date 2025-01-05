import React from 'react';
import { ArrowRight, Check, Star, Users, User } from 'lucide-react';
import farmerimg from '../assets/images/countryside-woman-holding-plant-leaves.jpg'
import userimg from '../assets/icons/user.png'

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cultivating a Sustainable Future</h1>
          <p className="text-xl md:text-2xl mb-8">Connecting farmers and consumers for a greener world</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-green-50 clip-hero"></div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src={farmerimg} alt="Farmers in a field" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">Founded in 2010, Agripathway started with a simple idea: to bridge the gap between farmers and consumers. We believed that by creating a direct link, we could ensure fair prices for farmers and fresh, quality produce for consumers.</p>
              <p className="text-lg mb-4">Over the years, we've grown from a small startup to a leading agrocommerce platform, but our mission remains the same. We're committed to supporting sustainable farming practices, empowering rural communities, and providing urban consumers with access to farm-fresh products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sustainability", description: "We promote eco-friendly farming practices to protect our planet." },
              { title: "Transparency", description: "We believe in open communication with our farmers and customers." },
              { title: "Innovation", description: "We continuously seek new ways to improve the agricultural ecosystem." },
            ].map((value, index) => (
              <div key={index} className="bg-green-100 p-6 rounded-lg">
                <Check className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Shola Raymond", role: "CEO & Co-founder"  },
              { name: "Desmond Elliot", role: "CTO" },
              { name: "Bode Fadugbagbe", role: "Head of Farmer Relations" },
              { name: "Michael Paul", role: "Lead Developer" },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={userimg} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements and Impact */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100,000+", description: "Farmers Supported" },
              { number: "1M+", description: "Happy Customers" },
              { number: "50%", description: "Reduction in Food Waste" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-xl">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Johnson", role: "Organic Farmer", quote: "Agripathway has transformed my business. I now have direct access to customers who value my organic produce." },
              { name: "David Chen", role: "Urban Consumer", quote: "Thanks to Agripathway, I can now enjoy fresh, locally-sourced produce delivered right to my doorstep." },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 mr-1" />
                  <Star className="w-6 h-6 text-yellow-400 mr-1" />
                  <Star className="w-6 h-6 text-yellow-400 mr-1" />
                  <Star className="w-6 h-6 text-yellow-400 mr-1" />
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and Certifications */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Partners & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "/placeholder.svg?height=100&width=200",
              "/placeholder.svg?height=100&width=200",
              "/placeholder.svg?height=100&width=200",
              "/placeholder.svg?height=100&width=200",
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={partner} alt={`Partner ${index + 1}`} className="max-h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Agripathway Community</h2>
          <p className="text-xl mb-8">Whether you're a farmer or a consumer, be part of our mission for a sustainable future.</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-100 transition duration-300 flex items-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

