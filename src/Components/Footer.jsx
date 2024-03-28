import React from 'react'
import { FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className=' w-full '>
      <footer class="bg-[#D6E5E7] text-[#3B82F6] py-6">
        <div class="container mx-auto px-4">
          <div class="flex justify-between">
            <div class="w-1/2">
              <h4 class="text-2xl font-bold">Stay Connected!</h4>
              <h5 class="mt-2">Connect with us on social media.</h5>
            </div>
            <div class="w-1/2 flex justify-end">
              <button class="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center hover:animate-bounce justify-center mr-2">
                <span><FaFacebook/></span>
              </button>
              <button class="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center hover:animate-bounce justify-center mr-2">
                <span><FaInstagram/></span>
              </button>
              <button class="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center hover:animate-bounce justify-center mr-2">
                <span><FaTwitter/></span>
              </button>
            </div>
          </div>
          <hr class="my-6 border-sky-400"/>
            <div class="flex justify-between">
              <div>
                <h5 class="text-lg font-semibold">Quick Links</h5>
                <ul class="mt-2">
                  <li><a href="#" class="hover:text-orange-500">Home</a></li>
                  <li><a href="#" class="hover:text-orange-500">About Us</a></li>
                  <li><a href="#" class="hover:text-orange-500">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h5 class="text-lg font-semibold">Legal</h5>
                <ul class="mt-2">
                  <li><a href="#" class="hover:text-orange-500">Terms & Conditions</a></li>
                  <li><a href="#" class="hover:text-orange-500">Privacy Policy</a></li>
                  <li><a href="#" class="hover:text-orange-500">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            <div class="text-center mt-4">
              <p class="text-sm">&copy; 2024 DualNature - All Rights Reserved</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
