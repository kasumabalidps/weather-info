interface CardProps {
    date: string;
    maxTemp: string;
    minTemp: string;
    avgTemp: string;
  }
  
  export default function Card({ date, maxTemp, minTemp, avgTemp }: CardProps) {
    return (
      <a href="#" className="block p-4 bg-white border border-gray-200 rounded-lg shadow">
        <p className="font-semibold text-sm text-gray-600">{date}</p>
        <div className="grid grid-cols-2 pt-4 text-center divide-x">
          <div>
            <p className="text-red-600 text-[0.82rem]">Max</p>
            <h1 className="text-red-600 font-semibold text-[1.20rem]">{maxTemp}</h1>
          </div>
          <div>
            <p className="text-blue-600 text-[0.82rem]">Min</p>
            <h1 className="text-blue-600 font-semibold text-[1.20rem]">{minTemp}</h1>
          </div>
        </div>
        <hr className="my-2 border-gray-300 w-[70%] mx-auto" />
        <p className="text-center text-sm text-gray-600">Avg Temperature: {avgTemp}</p>
      </a>
    );
  }
  