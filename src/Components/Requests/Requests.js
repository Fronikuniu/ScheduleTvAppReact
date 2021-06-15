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

export const searchPeopleByName = (name) => {
  return axios.get(`http://api.tvmaze.com/search/people?q=${name}`);
};

export const getPeopleInfoById = (id) => {
  return axios.get(`http://api.tvmaze.com/people/${id}`);
};

export const getScheduleByCurrentDate = (date) => {
  return axios.get(`http://api.tvmaze.com/schedule?country=PL&date=${date}`);
};
