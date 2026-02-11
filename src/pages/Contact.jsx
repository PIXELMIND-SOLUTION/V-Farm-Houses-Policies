import React from "react";
import { Mail, Phone, Clock, MapPin, MessageCircle, Headphones, Shield, Star, Users, Globe, Award, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactPoints = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      details: ["support@vfarmhouses.com", "justforfun54992@gmail.com"],
      response: "Response within 4 hours",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      details: ["+91 95738 19495", "+91 82474 02358"],
      response: "Available 9 AM - 7 PM",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM IST"],
      response: "Closed on Sundays",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Registered Office",
      details: [
        "Plot No 358, Teachers Colony",
        "Bn Reddy Nagar, Hyderabad Rangareddy",
        "Telangana 500070, India"
      ],
      response: "By appointment only",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const supportFeatures = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "24/7 WhatsApp Support",
      subtext: "Quick chat response"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      text: "Dedicated Account Manager",
      subtext: "For premium bookings"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Secure Communication",
      subtext: "Encrypted channels"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Priority Support",
      subtext: "For VIP customers"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Group Booking Specialists",
      subtext: "Events & parties"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Multi-language Support",
      subtext: "English, Hindi, Telugu"
    }
  ];

  const commonQueries = [
    {
      question: "How to modify a booking?",
      answer: "Contact us at least 24 hours before check-in"
    },
    {
      question: "Cancellation policy?",
      answer: "Full refund if cancelled 48+ hours before"
    },
    {
      question: "Payment methods accepted?",
      answer: "UPI, Cards, Net Banking, Wallet"
    },
    {
      question: "Check-in/out times?",
      answer: "12 PM check-in, 11 AM check-out"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 flex items-center justify-center">
            <Headphones className="w-12 h-12 text-rose-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact V Farm House
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help with bookings, support, and any questions about your farmhouse experience.
          </p>
          <div className="mt-6">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
              Operated by VARAHI AUTOMOTIVES AND TRAVELS
            </span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactPoints.map((point, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${point.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${point.color} bg-opacity-10 flex items-center justify-center`}>
                    <div className="text-white">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </div>

                <div className="space-y-3 mb-4">
                  {point.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{point.response}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;