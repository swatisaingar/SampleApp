const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const fetchItemsApi = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  return response.json();
};

export const postItemApi = async (data) => {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to post item');
  }
  return response.json();
};
