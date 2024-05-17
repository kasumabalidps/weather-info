"use client";

import React, { useState, useEffect } from 'react';
import Card from './card';

// inspiration : https://onthisday.bufferhead.com/

export default function HomePage() {
  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" }
  ];

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Update time and date only on client side
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      }));
      setCurrentTime(now.toLocaleTimeString('id-ID', {
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZoneName: 'short'
      }));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = event.target.value;
    const country = countries.find(country => country.code === countryCode);
    setSelectedCountry(country ? country.name : "");
  };

  const cards = [
    { date: "May 17, 2019", maxTemp: "31.0°C", minTemp: "25.0°C", avgTemp: "27.5°C" },
    { date: "May 18, 2019", maxTemp: "30.0°C", minTemp: "24.0°C", avgTemp: "26.5°C" },
    { date: "May 19, 2019", maxTemp: "32.0°C", minTemp: "26.0°C", avgTemp: "29.0°C" },
    { date: "May 20, 2019", maxTemp: "33.0°C", minTemp: "27.0°C", avgTemp: "30.0°C" },
    { date: "May 21, 2019", maxTemp: "34.0°C", minTemp: "28.0°C", avgTemp: "31.0°C" }
  ];

  return (
    <div className="px-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold pt-10 flex items-center justify-center">
          🌧 Weather Info NextJS
        </h2>
        <p className="font-semibold pt-1 pb-4 max-w-md mx-auto">
          Periksa prakiraan cuaca untuk provinsi di kota Anda agar tetap terinformasi dan siap menghadapi perubahan cuaca.
        </p>
        <p className="font-semibold">🗓️ Tanggal Saat Ini: {currentDate}</p>
        <p className="font-semibold">🕛 Waktu Saat Ini: {currentTime}</p>
        <p className="font-semibold">🌏 Negara Saat Ini: {selectedCountry}</p>
      </div>

      {/* Form */}
      <div>
        <form className="max-w-md mx-auto">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pilih Negara
          </label>
          <select
            id="countries"
            defaultValue=""
            onChange={handleCountryChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" disabled>Pilih Negara</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </form>
      </div>

      {/* Cards */}
      <div className="p-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {cards.map((card, index) => (
            <Card
              key={index}
              date={card.date}
              maxTemp={card.maxTemp}
              minTemp={card.minTemp}
              avgTemp={card.avgTemp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
