
export default async function getYelp(payload) {
  const options = {
    method: 'post',
    body: payload,
  };
  try {
    const response = await fetch('api/search', options);
    return response.json();
  } catch (response) {
    throw new Error('Could not retrieve results, please try later');
  }
}
