"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    lastLogin: "",
    profileImage: "", // URL or base64 data for profile image
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserDetails();
  }, []); // Fetch user details on initial component mount

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      const { username, email, lastLogin, profileImage } = res.data.data;
      // Format the lastLogin date
      const formattedLastLogin = new Date(lastLogin).toLocaleDateString();
      setUserData({ username, email, lastLogin: formattedLastLogin, profileImage });
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen h-full pb-5">
      <Navbar />
      <div className="flex flex-col items-center min-h-screen py-8 bg-gray-900 text-white border m-10 rounded-2xl">
        <h1 className="text-blue-500 font-bold text-3xl mb-4">Dashboard</h1>
        <div className="bg-gray-800 p-8 w-full rounded-lg flex items-center mt-4 gap-8">
          <div className="rounded-full overflow-hidden w-24 h-24 border-4 border-gray-400">
            {userData.profileImage ? (
              <img
                src={userData.profileImage}
                alt="Profile Image"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-gray-500 flex items-center justify-center w-full h-full">
                <p className="text-white font-bold text-3xl">{userData.username.charAt(0)}</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-xl font-semibold">{userData.username}</p>
            <p className="text-sm text-gray-400">{userData.email}</p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg mt-8 text-white">
          <p className="text-lg">
            <span className="font-semibold">Username:</span> {userData.username}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          
        </div>
        <Link href="/update-profile">
          <p className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-8 transition duration-300">
            Update Profile
          </p>
        </Link>
      </div>
    </div>
  );
}
