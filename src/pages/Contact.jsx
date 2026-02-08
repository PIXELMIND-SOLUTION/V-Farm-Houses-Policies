import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5 text-center">
          <h1 className="fw-bold mb-3">Contact Us</h1>

          <p className="text-muted mb-4">
            Need help with bookings or have questions? Reach out to us.
          </p>

          <div className="fs-5">
            <p>
              <strong>Email:</strong> support@vfarmhouses.com
            </p>

            <p>
              <strong>Phone:</strong> +91-9573819495
            </p>

            <p>
              <strong>Hours:</strong> Mon – Sat, 9 AM – 7 PM
            </p>
          </div>

          <p className="text-muted mt-4">
            Please keep your registered mobile number handy for faster support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
