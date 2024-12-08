import React from 'react'
import Navbar from "./Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div>
        <Navbar />
      <section className="contact-info py-5 bg-light ">
      <div className="container">
        <h2 className=" mb-4">Contact Information</h2>
        <p className=" mb-5">
          Feel free to reach out to us using the information below. We're always happy to hear from you!
        </p>

        <ul className="list-unstyled">
          <li className="mb-3">
            <FaPhoneAlt />{' '}
            <a href="tel:+91 7892644030" className="ms-2">Phone: +91 7892644030</a>
          </li>
          <li className="mb-3">
            <FaEnvelope />{' '}
            <a href="mailto:Contact@flawskin.com" className="ms-2">Email: Contact@flawskin.com</a>
          </li>
          <li className="mb-3">
            <FaMapMarkerAlt />{' '}
            <a href="https://maps.app.goo.gl/xoWjuJowYrRgs6nWA" className="ms-2" target="_blank" rel="noopener noreferrer">
              Visit Us on Google Maps
            </a>
          </li>
        </ul>

        <h3 className=" mt-5">Social Media</h3>
        <ul className="list-unstyled d-flex justify-content">
          <li className="mx-3">
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} />
            </a>
          </li>
          <li className="mx-3">
            <a href="https://www.instagram.com/flawskin_?igsh=MWpwMTViMzA4ajVqZA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
}
