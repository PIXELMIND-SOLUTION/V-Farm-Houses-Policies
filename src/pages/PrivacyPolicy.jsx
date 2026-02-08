import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h1 className="fw-bold mb-2">Privacy Policy</h1>
          <p className="text-muted mb-4">Last updated: January 2026</p>

          <p>
            At <strong>V Farm Houses</strong>, we respect your privacy and are
            committed to protecting your personal data. This policy explains how
            we collect, use, and safeguard your information.
          </p>

          <h5 className="fw-bold mt-4">1. Information We Collect</h5>
          <ul>
            <li>First Name and Last Name</li>
            <li>Mobile number for login and booking updates</li>
            <li>Email address for communication</li>
            <li>Location data to show nearby farmhouses</li>
            <li>Booking details and slot preferences</li>
          </ul>

          <h5 className="fw-bold mt-4">2. How We Use Your Information</h5>
          <ul>
            <li>Create and manage your account</li>
            <li>Enable farmhouse bookings</li>
            <li>Display nearby farmhouses</li>
            <li>Send booking confirmations</li>
          </ul>

          <h5 className="fw-bold mt-4">3. Location Usage</h5>
          <p>
            Your location is used only to recommend nearby farmhouses for better
            booking convenience. We do not sell or share your location data.
          </p>

          <h5 className="fw-bold mt-4">4. Data Security</h5>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access.
          </p>

          <h5 className="fw-bold mt-4">5. Your Rights</h5>
          <p>
            You may update or delete your account information anytime from your
            profile settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
