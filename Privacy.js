import React from "react";
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="about-us py-5 bg-light">
        <div className="container">
          <h1 className="text-primary mb-4">Privacy Policy</h1>

          <p>
            This privacy policy outlines how your personal information is collected, used, and protected when you visit our website.
          </p>

          <h2 className="text-primary mb-4">Information We Collect</h2>
          <p>
            We may collect personal information to provide you with services related to Weight Management, Beauty, Dermatology, Laser Hair Reduction, and Hair Build. The types of personal information we collect include:
          </p>
          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>City</li>
            <li>Address</li>
          </ul>

          <h2 className="text-primary mb-4">How We Use Your Information</h2>
          <p>We may use your personal information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Process secure payments via Razorpay</li>
            <li>Contact you with newsletters, marketing, or promotional materials</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-primary mb-4">Payment Processing with Razorpay</h2>
          <p>
            We use <strong>Razorpay</strong> as our payment gateway provider. All transactions are encrypted and processed securely following <strong>PCI-DSS</strong> compliance standards. We do not store your payment details (such as card numbers or CVV codes).
          </p>

          <h2 className="text-primary mb-4">Information Sharing</h2>
          <p>
            We do not sell or share your personal information with third parties. However, we may use trusted third-party service providers (e.g., email or payment processing) to assist in delivering our services, ensuring they comply with strict privacy standards.
          </p>

          <h2 className="text-primary mb-4">Data Security & Retention</h2>
          <p>
            We implement industry-standard security measures to protect your data. Your personal information is retained only for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
          </p>

          <h2 className="text-primary mb-4">Refund & Cancellation Policy</h2>
          <p>
            If you wish to request a refund or cancellation, please contact us at <a href="mailto:contact@flawskin.com">contact@flawskin.com</a>. Refunds will be processed within <strong>5-7 business days</strong> to the original payment method..
          </p>

          <h2 className="text-primary mb-4">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be effective immediately upon posting the updated policy on this page.
          </p>

          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@flawskin.com">contact@flawskin.com</a>.
          </p>

          <p><strong>Last updated: 13-02-2025</strong></p>
        </div>
      </section>
    </div>
  );
}
