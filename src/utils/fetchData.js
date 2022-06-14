export const exerciseOptions = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Key": "c0940579fdmshaef3dbe740df433p18b09ajsn5dd9a836d02d",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  url = `https://exercisedb.p.rapidapi.com${url}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
