import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router


 const Navbar = () => {
  const router = useRouter(); // Use the useRouter hook to get the router object
 
  const handleLogout = async () => {
     try {
       const response = await fetch('/api/users/logout', { method: 'GET' });
       if (response.ok) {
         document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
         router.push('/login'); // Use router.push to redirect to the login page
       } else {
         console.error('Logout failed:', response.statusText);
       }
     } catch (error) {
       console.error('Logout failed:', error.message);
     }
  };
 
  return (
     <nav className="bg-gray-800 text-white p-4 border-b">
       <div className="mx-auto">
         <div className="flex justify-between items-center">
           <div className="flex space-x-4">
             <a href="/" className={`text-gray-300 hover:text-white ${router.pathname === '/' ? 'text-blue-500' : ''}`}>AI</a>
             <a href="/resume" className={`text-gray-300 hover:text-white ${router.pathname === '/resume' ? 'text-blue-500' : ''}`}>Resume</a>
             {/* <a href="/about" className={`text-gray-300 hover:text-white ${router.pathname === '/about' ? 'text-blue-500' : ''}`}>About</a> */}
    
           </div>
           <div className="flex space-x-4">
           <a href='/profile' className={`text-gray-300 hover:text-white ${router.pathname === '/about' ? 'text-blue-500' : ''}`}>Profile</a>
             <button onClick={handleLogout} className="text-gray-300 hover:text-white">Logout</button>

           </div>
         </div>
       </div>
     </nav>
  );
 };
 
 export default Navbar;