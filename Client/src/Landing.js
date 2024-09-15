import React, { useState } from 'react';
import { ArrowRight, CheckCircle, DollarSign, Shield, Users, Menu, X } from 'lucide-react';

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">LoanManager</span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Home</a>
                  <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Features</a>
                  <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">About</a>
                  <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contact</a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              
              <a href="/admin-login" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Admin Login</a>
              <a href="/login" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">User Login</a>
              <a href="/signup" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
                User Signup
              </a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <a href="/" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">User Login</a>
              <a href="/login" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">User Signup</a>
              <a href="/admin-login" className="text-gray-700 hover:bg-green-50 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Admin Login</a>
              <a href="/signup" className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-12 sm:px-6 lg:py-16 lg:px-8 bg-green-50 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Revolutionize Your</span>
                <span className="block text-green-600">Loan Management</span>
              </h1>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Streamline processes, enhance customer satisfaction, and drive business growth with our cutting-edge loan management solution.
              </p>
              <div className="mt-10 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <a href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Empower Your Loan Management
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Our platform offers a comprehensive set of tools to revolutionize your loan management process.
                </p>
              </div>

              <div className="mt-16">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <DollarSign className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Efficient Loan Processing</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Automate and streamline your loan application and approval processes for faster turnaround times and improved efficiency.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <Users className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Customer Management</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Maintain detailed customer profiles, track interactions, and provide personalized service to enhance customer satisfaction.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <CheckCircle className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Intelligent Repayment System</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Set up smart repayment schedules, send automated reminders, and reduce defaults with our intelligent system.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <Shield className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure and Compliant Platform</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Ensure data security and regulatory compliance with our robust, state-of-the-art system architecture.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="bg-white py-16 lg:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative py-24 px-8 bg-green-600 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                  {/* <img src="/placeholder.svg?height=500&width=1000" alt="Abstract background" className="w-full h-full object-cover" /> */}
                </div>
                <div className="relative lg:col-span-1">
                  {/* <img className="h-12 w-auto" src="/placeholder.svg?height=48&width=150" alt="Workcation" /> */}
                  <blockquote className="mt-6 text-white">
                    <p className="text-xl font-medium sm:text-2xl">
                      LoanManager has transformed our loan processing. We've seen a 40% increase in efficiency and our customers love the seamless experience.
                    </p>
                    <footer className="mt-6">
                      <p className="flex items-center">
                        <img className="w-10 h-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                        <span className="ml-3 text-base font-medium">Sacrlett Johnson, CEO at IXW</span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to transform your loan management?</span>
                <span className="block bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Start your free trial today.</span>
              </h2>
              <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                <a href="/signup" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                  Get started
                </a>
                <a href="/" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-800 bg-green-100 hover:bg-green-200">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span className="text-2xl font-bold text-green-600">LoanManager</span>
              <p className="text-gray-500 text-base">
                Revolutionizing loan management for businesses worldwide.
              </p>
              <div className="flex space-x-6">
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="/" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Loan Processing
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Customer Management
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Repayment Systems
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Guides
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        API Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 LoanManager, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}