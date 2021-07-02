import axios from 'axios';

export const searchShowByQuery = (query) => {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
};

export const getShowsInfoById = async (id) => {
  const { data: basic } = await axios.get(`http://api.tvmaze.com/shows/${id}`);

  const { data: episodes } = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  const { data: seasons } = await axios.get(`http://api.tvmaze.com/shows/${id}/seasons`);

  const { data: cast } = await axios.get(`http://api.tvmaze.com/shows/${id}/cast`);

  const { data: crew } = await axios.get(`http://api.tvmaze.com/shows/${id}/crew`);

  const { data: images } = await axios.get(`http://api.tvmaze.com/shows/${id}/images`);

  return { basic, episodes, seasons, cast, crew, images };
};

export const getEpisodeInfo = (episodeid) => {
  return axios.get(`https://api.tvmaze.com/episodes/${episodeid}`);
};

export const searchPeopleByName = (name) => {
  return axios.get(`http://api.tvmaze.com/search/people?q=${name}`);
};

export const getPeopleInfoById = (id) => {
  return axios.get(`http://api.tvmaze.com/people/${id}`);
};

export const getScheduleByCurrentDate = (country, currentData) => {
  return axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=${currentData}`);
};

export const getShows = () => {
  return axios.get(`http://api.tvmaze.com/shows`);
};

export const getCountries = () => {
  return axios.get('https://restcountries.eu/rest/v2/all');
};
