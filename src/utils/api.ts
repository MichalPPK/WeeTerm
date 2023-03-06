import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getFortune = async () => {
  const { data } = await axios.get('https://helloacm.com/api/fortune/');
  return data;
};

export const getFiglet = async (phrase: string) => {
  try {
    const { data } = await axios.get(`https://uploadbeta.com/api/figlet/?cached&msg=${phrase}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getNumber = async (number: string) => {
  try {
    const { data } = await axios.get(`numbersapi.com/${number}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getDatehistory = async (datehistory: string) => {
  try {
    const { data } = await axios.get(`http://numbersapi.com/${datehistory}/date`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
