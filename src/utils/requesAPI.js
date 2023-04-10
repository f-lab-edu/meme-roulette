const requestAPI = params => {
  const queryString = `?${new URLSearchParams(params).toString()}`;
  return fetch(
    `${process.env.REQUEST_URL}${queryString}&api_key=${process.env.GIPHY_API_KEY}`
  );
};
export default requestAPI;
