//import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We build modern solutions that blend creativity and technology to deliver exceptional results.
          </p>
        </div>
      </motion.section>

      {/* About Content */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src="https://via.placeholder.com/500x350"
          alt="Our team"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">
            We are a passionate team of developers, designers, and thinkers dedicated to crafting 
            innovative digital experiences. Our mission is to empower businesses through technology.
          </p>
          <p>
            From web development to brand identity, we bring ideas to life with precision and creativity.
          </p>
        </div>
      </motion.section>

      {/* Mission / Values */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="bg-white py-16"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We push boundaries with new ideas and solutions." },
              { title: "Quality", desc: "We ensure excellence in everything we deliver." },
              { title: "Collaboration", desc: "We work together to achieve greater impact." }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
