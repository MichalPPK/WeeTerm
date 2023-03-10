// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getFortune } from '../api';
import { getFiglet } from '../api';
import { getNumber } from '../api';
import { getDatehistory } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const fortune = async (args: string[]): Promise<string> => {
  const data = await getFortune();
  return data;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather warszawa';
  }
  const weather = await getWeather(city);
  return weather;
};

export const number = async (args: string[]): Promise<string> => {
  const numb = args.join(' ');
  if (!numb) {
    return 'Get random trivia about a number.\nUsage: number [numerical value]. Example: number 13';
  }
  const number = await getNumber(numb);
  return number;
};

export const datehis = async (args: string[]): Promise<string> => {
  let datehistory = args.join('');
  if (!datehistory) {
    return 'Get random trivia about a date.\nUsage: datehis [MONTH/DAY]. Ex: datehis 8/22\nOR\nUsage: datehis [DAYOFYEAR]. Ex: datehis 235';
  }
  const datehis = await getDatehistory(datehistory);
  return datehis;
};

export const figlet = async (args: string[]): Promise<string> => {
  const phrase = args.join('+');
  if (!phrase) {
    return 'Usage: figlet [phrase]. Example: figlet Hello World';
  }
  const figlet = await getFiglet(phrase);
  return figlet;
};
