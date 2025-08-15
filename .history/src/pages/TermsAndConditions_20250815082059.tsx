import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const TermsAndConditions = () => {
  const lastUpdatedDate = "January 1, 2024"; // Update this date as needed

  return (
    <motion.div
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-20"
    >
      {/* Header */}
      <motion.header variants={fadeIn("up", "spring", 0.2, 1)}>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-8">
          Last Updated: {lastUpdatedDate}
        </p>
      </motion.header>

      {/* Introduction */}
      <motion.section 
        variants={fadeIn("up", "spring", 0.4, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-medium">Jinja With Dominic</span> ("we," "our," or "us"). 
          These Terms govern your use of our website (<a href="https://jinjawithdominic.carrd.co" className="text-primary hover:underline">jinjawithdominic.carrd.co</a>) 
          and all custom woodworking orders. By accessing our site or placing an order, you agree to these Terms.
        </p>
      </motion.section>

      {/* Custom Orders */}
      <motion.section 
        variants={fadeIn("up", "spring", 0.6, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">2. Custom Orders</h2>
        
        <div className="ml-4 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">2.1 Process</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All custom pieces require a consultation (via email/contact form).</li>
              <li>A 50% non-refundable deposit is required to begin production.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">2.2 Lead Times</h3>
            <p className="text-gray-700">
              Estimated completion times will be provided per project but may vary due to material availability or complexity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">2.3 Revisions</h3>
            <p className="text-gray-700">
              Design changes after final approval may incur additional fees.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Payments & Pricing */}
      <motion.section 
        variants={fadeIn("up", "spring", 0.8, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">3. Payments & Pricing</h2>
        
        <div className="ml-4 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">3.1 Currency</h3>
            <p className="text-gray-700">
              All prices are in <span className="font-medium">Nigerian Naira (₦)</span> unless otherwise stated.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">3.2 Payment Methods</h3>
            <p className="text-gray-700">
              Bank transfer or other methods listed on our site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">3.3 Pricing Changes</h3>
            <p className="text-gray-700">
              We reserve the right to adjust prices due to material cost fluctuations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Shipping & Delivery */}
      <motion.section 
        variants={fadeIn("up", "spring", 1.0, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">4. Shipping & Delivery</h2>
        
        <div className="ml-4 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">4.1 Local Delivery</h3>
            <p className="text-gray-700">
              Free within [City/Region]. Other locations: calculated at checkout.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">4.2 Damage in Transit</h3>
            <p className="text-gray-700">
              Report damages within <span className="font-medium">48 hours</span> of delivery with photos for resolution.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Returns & Refunds */}
      <motion.section 
        variants={fadeIn("up", "spring", 1.2, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">5. Returns & Refunds</h2>
        
        <div className="ml-4 space-y-6">
          <div>
            <h3 className="text-xl font-medium text-primary mb-2">5.1 Custom Pieces</h3>
            <p className="text-gray-700">
              Due to their bespoke nature, <span className="font-medium">custom orders are non-refundable</span> unless defective.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-primary mb-2">5.2 Ready-Made Items</h3>
            <p className="text-gray-700">
              Returns accepted within <span className="font-medium">7 days</span> if unused and in original condition.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Intellectual Property */}
      <motion.section 
        variants={fadeIn("up", "spring", 1.4, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">6. Intellectual Property</h2>
        <p className="text-gray-700">
          All designs, photos, and content on this site are owned by Jinja With Dominic. Unauthorized use is prohibited.
        </p>
      </motion.section>

      {/* Limitation of Liability */}
      <motion.section 
        variants={fadeIn("up", "spring", 1.6, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">7. Limitation of Liability</h2>
        <p className="text-gray-700 mb-2">
          We are not liable for:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Natural variations in wood grain/color.</li>
          <li>Minor imperfections inherent in handmade items.</li>
          <li>Improper maintenance by the customer.</li>
        </ul>
      </motion.section>

      {/* Governing Law */}
      <motion.section 
        variants={fadeIn("up", "spring", 1.8, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">8. Governing Law</h2>
        <p className="text-gray-700">
          These Terms are governed by Nigerian law.
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section 
        variants={fadeIn("up", "spring", 2.0, 1)}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact</h2>
        <p className="text-gray-700 mb-2">
          For questions:
        </p>
        <ul className="space-y-1 text-gray-700">
          <li>📧 [Your email]</li>
          <li>📞 [Your phone]</li>
          <li>📞 [+234] []</li>
        </ul>
        <p className="text-gray-700 mt-4 italic">
          By using our site, you acknowledge reading and agreeing to these Terms.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default TermsAndConditions;