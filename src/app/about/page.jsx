'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import { useSpring, animated } from 'react-spring';

const AboutPage = () => {

 return (
    <>
      <Navbar />
      <animated.div
        className="bg-gray-900 min-h-screen text-white p-8 pb-10 flex flex-col justify-center items-center"
    
      >
        <div className='flex items-center flex-col'>
          <img src='./images/logo.png' alt="Team Photo" className="w-32 h-32 rounded-full mb-4 border p-4 border-white shadow-lg" />
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Welcome to Cypher-AI</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering Innovation through AI</p>
            <p className="text-xl md:text-2xl">Revolutionizing Careers with Technology</p>
          </div>
        </div>
        <div className="mt-12 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-10">Our Mission</h2>
          <p className="text-xl  mb-12">
            At Cypher-AI, we are on a mission to empower candidates with the tools, knowledge, and guidance to succeed in their careers. We believe in harnessing the power of artificial intelligence to revolutionize the way candidates prepare for interviews, optimize their resumes, and stand out in the competitive job market.
          </p>
          <h2 className="text-2xl  font-bold mb-10">Our Team</h2>
          <p className="text-xl md:text-2xl mb-12">
            Our team comprises passionate AI enthusiasts, experienced engineers, and innovative designers dedicated to creating impactful solutions for career growth and development. With expertise in machine learning, data science, software engineering, and user experience design, we strive to deliver cutting-edge AI-driven tools and resources tailored to the needs of candidates.
          </p>
          <h2 className="text-2xl font-bold mb-10">Key Focus Areas</h2>
          <ul className="text-xl mb-12 space-y-4">
            <li>AI-driven resume analysis and optimization</li>
            <li>Comprehensive interview preparation resources</li>
            <li>Personalized career guidance and mentoring</li>
            <li>Continuous learning and skill development</li>
            <li>Ethical AI development practices</li>
          </ul>
          <h2 className="text-2xl  font-bold mb-10">Connect with Us</h2>
          <p className="text-xl  mb-12">
            Ready to take the next step in your career journey? Connect with Cypher-AI today and unlock your full potential with AI-powered career solutions. Join us in shaping the future of career development and success!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-white hover:text-blue-600">
              Contact Us
            </button>
          </div>
        </div>
      </animated.div>
      <footer className="bg-gray-800 text-white p-8 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4">© 2023 Cypher-AI. All rights reserved.</p>
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
 );
};

export default AboutPage;
