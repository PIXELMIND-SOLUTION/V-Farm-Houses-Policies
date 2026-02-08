import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h1 className="fw-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted mb-4">Last updated: January 2026</p>

          <h5 className="fw-bold">1. Acceptance of Terms</h5>
          <p>
            By using <strong>V Farm Houses</strong>, you agree to these terms.
          </p>

          <h5 className="fw-bold mt-4">2. User Registration</h5>
          <p>
            Users must register with accurate details including name, mobile,
            and email.
          </p>

          <h5 className="fw-bold mt-4">3. Farmhouse Booking</h5>
          <ul>
            <li>Bookings are subject to slot availability.</li>
            <li>Users must provide correct booking details.</li>
            <li>Payments and confirmations must be completed on time.</li>
          </ul>

          <h5 className="fw-bold mt-4">4. Location Services</h5>
          <p>
            We use your location to recommend nearby farmhouses but do not
            guarantee availability.
          </p>

          <h5 className="fw-bold mt-4">5. Prohibited Activities</h5>
          <ul>
            <li>Providing false information</li>
            <li>Misusing the platform</li>
            <li>Attempting unauthorized access</li>
          </ul>

          <h5 className="fw-bold mt-4">6. Account Suspension</h5>
          <p>
            Accounts violating our policies may be suspended without notice.
          </p>

          <h5 className="fw-bold mt-4">7. Liability</h5>
          <p>
            V Farm Houses is not responsible for disputes between property
            owners and users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
