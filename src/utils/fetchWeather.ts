// utils/fetchWeather.ts
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const BMKG_URL = 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml';

export const fetchWeatherData = async (provinceCode: string) => {
  try {
    console.log(`Fetching weather data for province code: ${provinceCode}`);
    const response = await axios.get(BMKG_URL);
    const result = await parseStringPromise(response.data);
    console.log('Raw data:', JSON.stringify(result, null, 2));

    const forecasts = result.data.forecast[0].area || [];
    console.log('Forecasts:', forecasts);

    const filteredForecasts = forecasts.filter((area: any) => area.$.domain === provinceCode);
    console.log('Filtered Forecasts:', filteredForecasts);

    const cities = filteredForecasts.map((area: any) => {
      const date = area.parameter.find((param: any) => param.$.id === 'tmax').timerange[0].$.day;
      const maxTemp = area.parameter.find((param: any) => param.$.id === 'tmax').timerange[0].value[0]._;
      const minTemp = area.parameter.find((param: any) => param.$.id === 'tmin').timerange[0].value[0]._;
      const avgTemp = ((parseFloat(maxTemp) + parseFloat(minTemp)) / 2).toFixed(1) + '°C';

      return {
        date,
        maxTemp: maxTemp + '°C',
        minTemp: minTemp + '°C',
        avgTemp
      };
    });

    console.log('Cities:', cities);
    return cities;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return [];
  }
};
