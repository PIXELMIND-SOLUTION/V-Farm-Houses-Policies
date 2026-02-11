import React from "react";
import { FileText, CheckCircle, AlertTriangle, Shield, Clock, CreditCard, MapPin, UserX, Scale, Mail, Phone } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center">
            <FileText className="w-10 h-10 text-rose-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-2">
            Last Updated: January 2026
          </p>
          <p className="text-gray-500 text-sm">
            VARAHI AUTOMOTIVES AND TRAVELS | V Farm House
          </p>
        </div>

        {/* Terms Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to <strong className="text-rose-700">V Farm Houses</strong>, operated by{" "}
                <strong className="text-rose-700">VARAHI AUTOMOTIVES AND TRAVELS</strong>. 
                By accessing or using our platform, you agree to be bound by these Terms & Conditions.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {/* 1. Acceptance */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    "By registering, accessing, or using V Farm House services, you accept these Terms.",
                    "These Terms constitute a legally binding agreement between you and VARAHI AUTOMOTIVES AND TRAVELS.",
                    "If you disagree with any part, you must discontinue use immediately.",
                    "We reserve the right to modify Terms at any time without prior notice.",
                    "Continued use after modifications constitutes acceptance of changes.",
                    "You must be at least 18 years old to use our services.",
                    "Corporate users must have proper authorization to enter into agreements.",
                    "These Terms supersede all prior agreements and understandings.",
                    "Jurisdiction for disputes is Hyderabad, Telangana, India.",
                    "English version prevails over translations."
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-rose-600" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. User Registration */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. User Registration & Account
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Provide accurate, complete registration information",
                    "Maintain account security and password confidentiality",
                    "Notify us immediately of unauthorized access",
                    "One account per individual, no shared accounts",
                    "Keep contact information updated",
                    "Verify mobile number through OTP authentication",
                    "Accounts inactive for 12 months may be deactivated",
                    "You're responsible for all activities under your account",
                    "False information may lead to account termination",
                    "Profile completion required for full access"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Farmhouse Booking */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Booking Terms & Conditions
                  </h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-rose-50 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">Booking Rules</h3>
                    <div className="space-y-3">
                      {[
                        "All bookings are subject to availability and farmhouse confirmation",
                        "Minimum 2-hour advance booking required",
                        "Full payment must be completed for confirmation",
                        "24-hour cancellation policy applies",
                        "No-shows result in full charge with no refund",
                        "Maximum 30 guests per booking unless pre-approved",
                        "No outside food or beverages without permission",
                        "Check-in/out times strictly enforced",
                        "Damage deposit may be required at check-in",
                        "Special requests subject to availability"
                      ].map((rule, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-rose-600" />
                          <span className="text-gray-700">{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white border border-rose-200 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">Payment Terms</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: <CreditCard />, text: "100% payment required for confirmation" },
                        { icon: <CreditCard />, text: "Multiple payment methods accepted" },
                        { icon: <CreditCard />, text: "Receipt provided within 24 hours" },
                        { icon: <CreditCard />, text: "No cash payments at property" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="text-rose-600">{item.icon}</div>
                          <span className="text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Location Services */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Location Services Terms
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    "Location services enhance farmhouse discovery experience",
                    "Accuracy depends on device and network conditions",
                    "We don't guarantee property availability based on location",
                    "Distance calculations are approximate",
                    "Location data is not stored longer than necessary",
                    "Users can disable location services anytime",
                    "Some features may be limited without location access",
                    "We're not liable for navigation errors",
                    "Third-party maps may have different accuracy",
                    "Location-based offers are subject to change"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Prohibited Activities */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Prohibited Activities
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Providing false or misleading information",
                    "Impersonating others or entities",
                    "Unauthorized access to systems or data",
                    "Reverse engineering or hacking attempts",
                    "Spamming or bulk messaging",
                    "Harassing other users or staff",
                    "Violating intellectual property rights",
                    "Commercial use without authorization",
                    "Posting offensive or illegal content",
                    "Circumventing security measures"
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                        <span className="font-medium text-gray-800">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Account Suspension */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <UserX className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. Account Suspension & Termination
                  </h2>
                </div>
                <div className="space-y-6">
                  {[
                    "Immediate suspension for Terms violation without notice",
                    "Permanent ban for repeated violations",
                    "No refunds for terminated accounts",
                    "Legal action for fraudulent activities",
                    "Reporting to authorities for illegal activities",
                    "Blacklisting from future services",
                    "Data retention as per legal requirements",
                    "No appeal process for severe violations",
                    "Reactivation fees may apply",
                    "Written notice for non-violation terminations"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-rose-600" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Liability */}
              <div className="border-t border-rose-100 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Liability & Disclaimers
                  </h2>
                </div>
                <div className="bg-rose-50 rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      "We act as booking platform only, not property owners",
                      "Not liable for disputes between users and property owners",
                      "No responsibility for property conditions or amenities",
                      "Maximum liability limited to booking amount",
                      "Not responsible for travel delays or cancellations",
                      "Force majeure events exempt from liability",
                      "Users assume all risks during property stay",
                      "No warranty of service availability or accuracy",
                      "Third-party services subject to their terms",
                      "Indian laws govern all disputes"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 8. Additional Terms */}
              <div className="border-t border-rose-100 pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">8. Additional Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Intellectual Property",
                      points: ["All content © VARAHI AUTOMOTIVES AND TRAVELS", "Trademarks protected", "No unauthorized use"]
                    },
                    {
                      title: "Governing Law",
                      points: ["Telangana, India jurisdiction", "English language binding", "Local courts have authority"]
                    },
                    {
                      title: "Severability",
                      points: ["Invalid clauses don't affect others", "Replaceable with valid provisions", "Entire agreement stands"]
                    },
                    {
                      title: "Force Majeure",
                      points: ["Not liable for uncontrollable events", "Includes natural disasters", "Government actions"]
                    }
                  ].map((section, idx) => (
                    <div key={idx} className="p-4 bg-white border border-rose-200 rounded-lg">
                      <h4 className="font-bold text-rose-700 mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-sm text-gray-600">• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact & Footer */}
            <div className="mt-12 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact for Clarifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-rose-600" />
                    <span className="text-gray-700">justforfun54992@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-rose-600" />
                    <span className="text-gray-700">+91 82474 02358</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Registered Office:</p>
                  <p className="text-gray-700">
                    VARAHI AUTOMOTIVES AND TRAVELS<br />
                    Plot No 358, Teachers Colony<br />
                    Bn Reddy Nagar, Hyderabad Rangareddy<br />
                    Telangana 500070, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            These Terms are effective from January 1, 2026
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © 2026 VARAHI AUTOMOTIVES AND TRAVELS. V Farm House is a registered service mark.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;