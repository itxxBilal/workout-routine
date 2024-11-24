'use client';

import { useEffect } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';
import '../app/globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    const initializeOneSignal = () => {
      // Create a script tag to load OneSignal SDK
      const script = document.createElement('script');
      script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
      script.async = true;
      script.onload = () => {
        // Initialize OneSignal after the script is loaded
        window.OneSignal = window.OneSignal || [];
        window.OneSignal.push(function () {
          window.OneSignal.init({
            appId: 'c1eae0d2-5f3c-4ba5-afbc-7dae3a85a1ce',
            allowLocalhostAsSecureOrigin: true,
          });

          // Show the prompt for subscribing to push notifications
          window.OneSignal.showSlidedownPrompt();
        });
      };
      document.head.appendChild(script);
    };

    initializeOneSignal();
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
