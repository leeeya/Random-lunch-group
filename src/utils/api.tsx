const CROSS_ORIGIN_URL = 'http://localhost:2021';

export const createPerson = async (name: string) => {
  try {
    const createdPerson = await fetch(CROSS_ORIGIN_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name),
    });

    return createdPerson.json();
  } catch (error) {
    console.error(error.message);
  }
};
