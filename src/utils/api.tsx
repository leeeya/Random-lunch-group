const { REACT_APP_CROSS_ORIGIN_URL } = process.env;

export const getPeople = async () => {
  try {
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}/api/people`, {
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
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}/api/person`, {
      method: 'post',
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
    const response = await fetch(`${REACT_APP_CROSS_ORIGIN_URL}/api/person`, {
      method: 'delete',
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
