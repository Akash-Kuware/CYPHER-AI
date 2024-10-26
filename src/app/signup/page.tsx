// signup-page.tsx
'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface User {
  email: string;
  password: string;
  username: string;
}

export default function SignupPage() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      window.location.replace("/");
    } catch (error: any) {
      console.log("Signup failed", error.response?.data?.error);
      const errorMessage =
        error.response?.data?.error || "An error occurred during signup";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
      <div className="border-2 rounded-2xl sm:p-30 lg:px-40 md:p-20">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
          {/* Left half with welcoming message and quote */}
          <div className="md:w-1/2 rounded-2xl p-8 flex flex-col justify-center">
            {/* Logo and website name */}
            <div className="flex items-center justify-center mb-8">
              <img src="./images/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
              <h1 className="text-2xl font-semibold">Cypher-AI</h1>
            </div>
            <p className="text-lg text-center md:text-left">Ready to get your first job? You are in the right place</p>
          </div>
          {/* Right half with signup form */}
          <div className="md:w-1/2 rounded-2xl bg-gray-200 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
            <form className="space-y-4">
              {/* Username input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-900">Username</label>
                <input
                  type="text"
                  id="username"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  className="text-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="Enter the username"
                />
              </div>
              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="text-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="Enter the email"
                  autoComplete='current-email'
                />
              </div>
              {/* Password input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  id="password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  className="text-gray-900 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  placeholder="Enter the password"
                  autoComplete='current-password'
                />
              </div>
              <button
                onClick={onSignup}
                className="w-full py-2 px-4 bg-blue-600 cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                disabled={buttonDisabled || loading}
              >
                {loading ? "..." : "Signup"}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-900">Already have an account? <Link href="/login" className="text-blue-400 hover:underline">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
