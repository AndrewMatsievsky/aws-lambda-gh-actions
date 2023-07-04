export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda! ${Math.random()}`),
  };
  return response;
};