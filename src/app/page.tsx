"use client";

import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import CardLoading from '../components/cardLoading';
import Loading from '../components/loading'; // Import komponen Loading
import { fetchWeatherData } from '../utils/fetchWeather'; // Import fungsi fetchWeatherData

interface WeatherCard {
  date: string;
  maxTemp: string;
  minTemp: string;
  avgTemp: string;
}

export default function HomePage() {
  const provinces = [
    { code: "Bali", name: "Bali" },
    // Tambahkan semua provinsi lainnya
  ];

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [loading, setLoading] = useState(true); // State untuk animasi loading halaman
  const [cardLoading, setCardLoading] = useState(false); // State untuk animasi loading card
  const [cards, setCards] = useState<WeatherCard[]>([]); // State for weather card data

  useEffect(() => {
    // Simulasikan loading halaman selama 3 detik
    setTimeout(() => {
      setLoading(false);
    }, 3000);

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

  const handleProvinceChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceCode = event.target.value;
    const province = provinces.find(province => province.code === provinceCode);
    setSelectedProvince(province ? province.name : "");

    if (provinceCode) {
      setCardLoading(true);
      console.log(`Selected province code: ${provinceCode}`);
      const weatherData = await fetchWeatherData(provinceCode);
      console.log('Weather data:', weatherData);
      setCards(weatherData);
      setCardLoading(false);
    }
  };

  if (loading) {
    return <Loading />; // Tampilkan animasi loading saat state loading bernilai true
  }

  return (
    <div className="px-4 animate-fade-in"> {/* Tambahkan kelas animasi fade-in */}
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
        <p className="font-semibold">🌏 Provinsi Saat Ini: {selectedProvince}</p>
      </div>

      {/* Form */}
      <div>
        <form className="max-w-md mx-auto">
          <label htmlFor="provinces" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Pilih Provinsi
          </label>
          <select
            id="provinces"
            defaultValue=""
            onChange={handleProvinceChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" disabled>Pilih Provinsi</option>
            {provinces.map(province => (
              <option key={province.code} value={province.code}>{province.name}</option>
            ))}
          </select>
        </form>
      </div>

      {/* Cards */}
      <div className="p-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {cardLoading 
            ? Array.from({ length: 5 }, (_, i) => <CardLoading key={i} />)
            : cards.map((card, index) => (
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