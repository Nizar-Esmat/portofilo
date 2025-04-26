import React from "react";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-20 text-center text-4xl font-semibold">Contact Me</h2>

      <div className="flex flex-wrap justify-center gap-6 text-lg text-neutral-300">
        
        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex w-full max-w-xs items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-lg transition-all hover:scale-105 sm:w-auto"
        >
          <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
          <p>{CONTACT.address}</p>
        </motion.div>

        {/* Phone Number */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex w-full max-w-xs items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-lg transition-all hover:scale-105 sm:w-auto"
        >
          <FaPhoneAlt className="text-cyan-400 text-2xl" />
          <p>{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex w-full max-w-xs items-center gap-4 rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-lg transition-all hover:scale-105 sm:w-auto"
        >
          <FaEnvelope className="text-cyan-400 text-2xl" />
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </motion.div>

      </div>
    </div>
  );
}