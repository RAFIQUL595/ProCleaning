const getAllService = async () => {

  const res = await fetch('http://localhost:9000/services', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default getAllService;
