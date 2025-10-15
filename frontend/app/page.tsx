"use client";
import { useState, useEffect } from "react";
import MemberCarousel from "./components/MemberCarousel";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: "Jake", text: "Love the custom links and fast uploads!", rating: 5 },
    { name: "Sara", text: "Super easy to set up my profile!", rating: 4 },
    { name: "Mike", text: "Best hosting for my images hands down!", rating: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      {/* Hero Card */}
      <section className='relative bg-gradient-to-r from-purple-800 to-indigo-900 py-20 text-center overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1500x500')] bg-cover opacity-20"></div>
        <div className='relative z-10'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 animate-fade-in'>
            Welcome to haxs.lol
          </h1>
          <p className='text-xl mb-6 animate-slide-up'>
            Create stunning link-in-bio pages and host files with ease.
          </p>
          <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105 animate-pulse-slow'>
            Get Started
          </button>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className='py-16 bg-gray-800'>
        <h2 className='text-3xl font-bold text-center mb-8'>What Our Users Say</h2>
        <div className='max-w-2xl mx-auto'>
          <div className='relative overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className='w-full flex-shrink-0 p-4'>
                  <div className='bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                    <p className='text-lg mb-4'>&quot;{t.text}&quot;</p>
                    <p className='font-bold'>
                      {t.name} ★{t.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Carousel */}
      <MemberCarousel />

      {/* Pricing Cards */}
      <section className='py-16 bg-gray-900'>
        <h2 className='text-3xl font-bold text-center mb-8'>Choose Your Plan</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {[
            { name: "Free", price: "$0", features: ["10 Links", "5MB Uploads", "Basic Analytics"] },
            {
              name: "Pro",
              price: "$5/mo",
              features: ["Unlimited Links", "50MB Uploads", "Advanced Analytics"],
            },
            {
              name: "Premium",
              price: "$15/mo",
              features: ["Custom Domain", "1GB Uploads", "Priority Support"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className='bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:-translate-y-2'
            >
              <h3 className='text-2xl font-bold mb-4'>{plan.name}</h3>
              <p className='text-3xl font-bold mb-4'>{plan.price}</p>
              <ul className='mb-6'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='mb-2'>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors'>
                Select
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-gray-800'>
        <h2 className='text-3xl font-bold text-center mb-8'>Frequently Asked Questions</h2>
        <div className='max-w-3xl mx-auto'>
          {[
            {
              q: "How do I create a profile?",
              a: "Sign up and click 'Create Profile' to start customizing.",
            },
            {
              q: "What file types are supported?",
              a: "We support images, videos, and more—up to your plan limit.",
            },
            {
              q: "Is my data secure?",
              a: "Yes, we use encrypted storage and follow strict privacy policies.",
            },
          ].map((faq, index) => (
            <details key={index} className='mb-4 bg-gray-700 p-4 rounded-lg'>
              <summary className='font-semibold cursor-pointer'>{faq.q}</summary>
              <p className='mt-2 text-gray-300'>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
