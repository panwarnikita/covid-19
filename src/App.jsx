import React, { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import StatsCards from './components/StatsCards';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { getCountries } from './services/countryApi';
import { getCovidData } from './services/covidApi';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  useEffect(() => {
    getCovidData(selectedCountry).then(setCovidData);
  }, [selectedCountry]);

  return (
    <div className="container">
      <h1>COVID-19 Dashboard</h1>
      <CountrySelector countries={countries} onSelect={setSelectedCountry} />
      {covidData && (
        <>
          <StatsCards data={covidData} />
          <LineChart data={covidData} />
          <PieChart data={covidData} />
        </>
      )}
    </div>
  );
};

export default App;
