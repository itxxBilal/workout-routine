'use client';

import { useState, useEffect } from 'react';
import OneSignal from 'react-onesignal';

export default function DashboardPage() {
  const [notifications, setNotifications] = useState([]);

  // Manual Push Notification
  const sendNotification = async (title, message) => {
    try {
      await OneSignal.sendSelfNotification(
        title,
        message,
        '/',
        'https://w1.pngwing.com/pngs/930/970/png-transparent-notification-icon-ios-7-iphone-icon-design-zooming-user-interface-button-apple-push-notification-service-computer-software.png'
      );
      alert('Notification Sent!');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  // Auto Push Notification for Prayer Times
  useEffect(() => {
    const autoNotifications = [
      { title: 'Fajr Prayer', time: '5:40 AM', message: 'Time for Fajr prayer' },
      { title: 'Drink Water', time: '10:00 AM', message: 'Stay hydrated!' },
      { title: 'Lunch Reminder', time: '12:40 PM', message: 'Time for lunch!' },
      { title: 'Sleep Reminder', time: '10:30 PM', message: 'Time to sleep!' },
    ];

    const timers = autoNotifications.map((notif) => {
      const now = new Date();
      const [hour, minute] = notif.time.split(':').map(Number);
      const notifTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hour,
        minute
      );

      if (notifTime > now) {
        const delay = notifTime.getTime() - now.getTime();
        return setTimeout(() => sendNotification(notif.title, notif.message), delay);
      }
      return null;
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Dashboard</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => sendNotification('Custom Reminder', 'This is your reminder!')}
      >
        Send Manual Notification
      </button>
    </div>
  );
}
