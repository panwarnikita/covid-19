

export const getCovidData = async (countryCode) => {
  try {
    const histRes = await fetch(
      `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=1500`
    );
    const histData = await histRes.json();


    const currRes = await fetch(
      `https://disease.sh/v3/covid-19/countries/${countryCode}`
    );
    const currData = await currRes.json();

    // Extract and fallback recovered if missing
    const cases = histData.timeline?.cases || {};
    const deaths = histData.timeline?.deaths || {};
    let recovered = histData.timeline?.recovered || {};

    const lastDate = Object.keys(cases).pop();
    if (!recovered[lastDate] || recovered[lastDate] === 0) {
      recovered[lastDate] = currData.recovered;
    }

    return {
      cases,
      deaths,
      recovered,
      currentStats: {
        cases: currData.cases,
        recovered: currData.recovered,
        deaths: currData.deaths,
      },
    };
  } catch (err) {
    console.error("Error fetching COVID data", err);
    return null;
  }
};




