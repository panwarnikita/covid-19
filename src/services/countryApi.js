export const getCountries = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    return data.map((c) => ({ name: c.name.common, code: c.cca2.toLowerCase() }));
  } catch (err) {
    console.error('Error fetching countries', err);
    return [];
  }
};
