import axios from 'axios';

export const searchShowByQuery = (query) => {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
};

export const getShowsInfoById = (id) => {
  const { data: episodes } = axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  const { data: seasons } = axios.get(`http://api.tvmaze.com/shows/${id}/seasons`);

  const { data: cast } = axios.get(`http://api.tvmaze.com/shows/${id}/cast`);

  const { data: crew } = axios.get(`http://api.tvmaze.com/shows/${id}/crew`);

  const { data: images } = axios.get(`http://api.tvmaze.com/shows/${id}/images`);

  return { episodes, id: episodes.id, seasons, cast, crew, images };
};

export const searchPeopleByName = (people) => {
  return axios.get(`http://api.tvmaze.com/search/people?q=${people}`);
};

export const getPeopleInfoById = (id) => {
  return axios.get(`http://api.tvmaze.com/people/${id}`);
};

export const getScheduleByCurrentDate = (date) => {
  return axios.get(`http://api.tvmaze.com/schedule?country=PL&date=${date}`);
};
