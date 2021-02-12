const { REACT_APP_CROSS_ORIGIN_URL } = process.env;
import { PATH, METHOD } from '../constants';

export const getPeople = async () => {
  try {
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}${PATH.API}${PATH.PEOPLE}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const createPerson = async (name: string) => {
  try {
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}${PATH.API}${PATH.PERSON}`, {
      method: METHOD.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePerson = async (id: string) => {
  try {
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}${PATH.API}${PATH.PERSON}`, {
      method: METHOD.DELETE,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
