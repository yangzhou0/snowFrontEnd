const BASE_URL = 'https://snow-backend.herokuapp.com/api/resorts';

const fetchResortByID = async (resortID) => {
  const response = await fetch(`${BASE_URL}/${resortID}`);
  const data = await response.json();
  return data;
};

const fetchResortByName = async (resort_name) => {
  const response = await fetch(`${BASE_URL}`);
  const resortsData = await response.json();
  const data = resortsData.find(resort => resort.name == resort_name)
  return data;
};

const fetchResorts = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const likeResort = async (resortID) => {
  return fetch(`${BASE_URL}/${resortID}/like`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  });
}


export {
  fetchResortByID,
  fetchResortByName,
  fetchResorts,
  likeResort
};
