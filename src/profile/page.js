'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Bilal',
    age: 25,
    weight: 50,
    targetWeight: 60,
    sleepingSchedule: '10:30 PM - 5:40 AM',
    prayers: {
      Fajr: '5:40 AM',
      Dhuhr: '12:40 PM',
      Asr: '3:20 PM',
      Maghrib: '7:10 PM',
      Isha: '7:20 PM',
    },
    meals: {
      breakfast: '2 Parathas and Tea',
      lunch: '2-3 Rotis with Curry',
      dinner: '1-2 Rotis with Curry',
    },
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Profile Updated Successfully!');
    // TODO: Save profile to local storage or backend
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Profile Page</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Weight:</label>
          <input
            type="number"
            className="form-control"
            value={profile.weight}
            onChange={(e) => setProfile({ ...profile, weight: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Target Weight:</label>
          <input
            type="number"
            className="form-control"
            value={profile.targetWeight}
            onChange={(e) =>
              setProfile({ ...profile, targetWeight: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
}
