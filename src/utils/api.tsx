const CROSS_ORIGIN_URL = 'http://localhost:2021';

export const createPerson = async (name: string) => {
  try {
    const response = await fetch(`${CROSS_ORIGIN_URL}/api/person`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    });

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};
