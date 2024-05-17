// inspiration : https://onthisday.bufferhead.com/

export default function HomePage() {
  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" }
  ];

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold pt-10 flex items-center justify-center">
          🌧 Weather Info NextJS
        </h2>
        <p className="font-semibold pt-1 pb-4 max-w-md mx-auto">
          Periksa prakiraan cuaca untuk provinsi di kota Anda agar tetap terinformasi dan siap menghadapi perubahan cuaca.
        </p>
        <p className="font-semibold">Waktu Saat Ini: </p>
        <p className="font-semibold">Negara Saat Ini: </p>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Pilih Negara</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </form>
      </div>
      <div>
        <div>
          <a href="#" className="block max-w-[20%] p-4 bg-white border border-gray-200 rounded-lg shadow">
            <p className="font-semibold text-sm text-gray-600">May 17, 2019</p>
            <div className="grid grid-cols-2 pt-4 text-center divide-x">
              <div>
                <p className="text-red-600 text-[0.82rem]">Max</p>
                <h1 className="text-red-600 font-semibold text-[1.20rem]">31.0°C</h1>
              </div>
              <div>
                <p className="text-blue-600 text-[0.82rem]">Min</p>
                <h1 className="text-blue-600 font-semibold text-[1.20rem]">31.0°C</h1>
              </div>
            </div>
            <hr className="my-2 border-gray-300 w-[70%] mx-auto" />
            <p className="text-center text-sm text-gray-600">Avg Temperature: 27.5°C</p>
          </a>
        </div>
      </div>
    </div>
  );
}
