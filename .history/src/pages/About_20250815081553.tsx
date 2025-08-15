import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
//import { Card, CardContent } from "../components/ui/card";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const AboutUs = () => {
  // Original video for the hero section
  const heroVideoUrl = "https://youtu.be/8vveFfMuhKM?si=SB-KkXpt9As4eH3l";
  const heroVideoTitle = "You can partner with us. Join Multistreams TM Ltd";

  // New video for the process section
  const processVideoUrl = "https://youtube.com/shorts/Z1pPyWXYQmU?si=CFt4a6AHo7un9QgE";
  const processVideoTitle = "35 Small Woodworking Projects Compilation";

  return (
    <motion.section
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-7xl mx-auto px-6 py-12 md:py-20"
    >
        <Link to="/">
            <Button
              variant="outline"
              className="border-secondary bg-transparent text-pimary hover:border-secondary hover:bg-secondary/30 px-6 py-3 rounded-full text-sm md:text-base"
            >
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Go to Home
            </Button>
        </Link>
      {/* Title */}
      <motion.h1
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="text-4xl md:text-5xl font-bold text-amber-400 text-center mb-12"
      >
        About <span className="text-primary">Jinja With Dominic</span>
      </motion.h1>

      {/* Hero Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 1)}
        className="grid md:grid-cols-2 gap-12 items-center mb-16"
      >
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Crafting Bespoke Woodwork with Passion & Precision
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Jinja With Dominic, where traditional woodworking meets modern artistry. 
            Based in [Location], Dominic combines time-honored techniques with innovative design 
            to create functional, elegant, and sustainable wooden pieces.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <YouTubeVideo url={heroVideoUrl} title={heroVideoTitle} />
        </div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 1)}
        className="bg-amber-50 p-8 rounded-xl mb-16"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
        <p className="text-primary">
          Dominic's journey began with a childhood fascination for timber. Today, every piece reflects 
          his dedication to quality, from hand-selected materials to the final polish.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        variants={fadeIn("up", "spring", 0.8, 1)}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Custom Designs",
              desc: "Tailored to your vision, whether it's furniture, decor, or heirloom gifts."
            },
            {
              title: "Eco-Conscious",
              desc: "Sustainably sourced wood and low-waste practices."
            },
            {
              title: "Handcrafted Excellence",
              desc: "No shortcuts—just meticulous attention to detail."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-amber-100"
            >
              <h3 className="text-xl font-medium text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        variants={fadeIn("up", "spring", 1, 1)}
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6">Watch Our Process</h2>
        <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <YouTubeVideo url={processVideoUrl} title={processVideoTitle} />
        </div>
        <p className="mt-4 text-gray-600 italic">
          "From raw timber to refined artistry—see how we transform wood into pieces that tell stories."
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeIn("up", "spring", 1.2, 1)}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6">Let's Create Together</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have an idea? Contact us to discuss your dream project.
        </p>
        <a href="https://wa.me/2347038576581" target="_blank" rel="noopener noreferrer"> 
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary hover:bg-amber-400 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Get in Touch
        </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
