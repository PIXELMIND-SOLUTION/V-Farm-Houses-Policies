import React from "react";
import { Shield, Lock, Eye, Database, Trash2, AlertCircle, Users, MapPin, Mail, Bell } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center">
            <Shield className="w-10 h-10 text-rose-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-2">
            Last Updated: January 2026
          </p>
          <p className="text-gray-500 text-sm">
            VARAHI AUTOMOTIVES AND TRAVELS | V Farm House
          </p>
        </div>

        {/* Policy Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <strong className="text-rose-700">V Farm Houses</strong>, operated by{" "}
                <strong className="text-rose-700">VARAHI AUTOMOTIVES AND TRAVELS</strong>, 
                we are committed to protecting your privacy and personal information. 
                This policy outlines how we collect, use, and safeguard your data.
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Database className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Information We Collect
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <Users size={18} />, text: "Full Name & Contact Details" },
                  { icon: <Mail size={18} />, text: "Email Address for Communication" },
                  { icon: <Bell size={18} />, text: "Mobile Number for OTP & Updates" },
                  { icon: <MapPin size={18} />, text: "Location Data for Nearby Farmhouses" },
                  { icon: <Database size={18} />, text: "Booking History & Preferences" },
                  { icon: <Eye size={18} />, text: "Usage Data & App Interactions" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-rose-50 rounded-lg">
                    <div className="text-rose-600">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Usage */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  2. How We Use Your Information
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  "Account creation and user profile management",
                  "Processing farmhouse bookings and reservations",
                  "Sending booking confirmations and updates via SMS/Email",
                  "Personalized farmhouse recommendations based on location",
                  "Customer support and query resolution",
                  "Improving app features and user experience",
                  "Marketing communications with user consent",
                  "Compliance with legal obligations",
                  "Fraud prevention and security monitoring",
                  "Analytics for service improvement"
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

            {/* Location Usage */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Location Data Usage
                </h2>
              </div>
              <div className="bg-rose-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Your location data is used <strong>exclusively</strong> to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-rose-600" />
                    <span>Show nearby farmhouses for convenient booking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-rose-600" />
                    <span>Provide accurate distance and travel time estimates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-rose-600" />
                    <span>Offer location-based special offers and promotions</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg border border-rose-200">
                  <p className="text-sm text-gray-600">
                    <AlertCircle className="inline w-4 h-4 text-rose-500 mr-1" />
                    We <strong>do not</strong> sell, share, or trade your location data with third parties.
                    Location sharing is optional and can be disabled in device settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Data Security Measures
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "End-to-end encryption for sensitive data",
                  "Secure SSL/TLS connections",
                  "Regular security audits and updates",
                  "Access controls and authentication",
                  "Data backup and disaster recovery",
                  "GDPR compliance standards"
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-rose-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Lock className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Rights */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Your Rights & Controls
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "Access & View",
                    desc: "View all personal data we store about you"
                  },
                  {
                    title: "Correction",
                    desc: "Update or correct inaccurate information"
                  },
                  {
                    title: "Deletion",
                    desc: "Request complete account and data deletion"
                  },
                  {
                    title: "Export",
                    desc: "Download your data in readable format"
                  },
                  {
                    title: "Consent Withdrawal",
                    desc: "Opt-out of marketing communications anytime"
                  },
                  {
                    title: "Complaints",
                    desc: "File privacy concerns with our Data Protection Officer"
                  }
                ].map((right, idx) => (
                  <div key={idx} className="p-4 bg-white border border-rose-200 rounded-lg">
                    <h3 className="font-bold text-rose-700 mb-2">{right.title}</h3>
                    <p className="text-gray-600">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-8">
              {[
                {
                  title: "6. Data Retention Period",
                  content: "We retain your personal data for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements. Booking data is retained for 5 years as per financial regulations."
                },
                {
                  title: "7. Third-Party Sharing",
                  content: "We only share data with trusted partners essential for service delivery (payment processors, SMS gateways). All partners comply with GDPR and data protection standards. We never sell your data."
                },
                {
                  title: "8. Cookies & Tracking",
                  content: "We use essential cookies for app functionality. Optional analytics cookies help improve user experience. You can manage cookie preferences in your browser settings."
                },
                {
                  title: "9. Children's Privacy",
                  content: "Our services are not directed to individuals under 18. We do not knowingly collect data from children. Parents/guardians should contact us if they believe we have collected children's data."
                },
                {
                  title: "10. Policy Updates",
                  content: "We may update this policy periodically. Continued use of V Farm House after changes constitutes acceptance. Major changes will be notified via email or in-app notifications."
                }
              ].map((section, idx) => (
                <div key={idx} className="border-t border-rose-100 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Data Protection Officer</p>
                  <p className="font-medium text-gray-800">VARAHI AUTOMOTIVES AND TRAVELS</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="font-medium text-gray-800">justforfun54992@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="font-medium text-gray-800">+91 82474 02358</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Address</p>
                  <p className="font-medium text-gray-800">
                    Plot No 358, Teachers Colony, Bn Reddy Nagar<br />
                    Hyderabad Rangareddy, Telangana 500070
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Effective Date: January 1, 2026 | Version 2.1
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © 2026 VARAHI AUTOMOTIVES AND TRAVELS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;